import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { history, message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: "API Key is missing. Please set GEMINI_API_KEY in your .env.local file." }), { status: 400 });
    }

    const systemPrompt = `You are a helpful and friendly AI assistant for PrimeCare, a premium dental clinic. 
    Here is some context about the clinic:
    - Address: King Street Melbourne, 3000, Australia
    - Email: support@dentisto.com (or info@primecare.com)
    - Hours: Monday - Saturday: 9:00am - 10:00pm
    - Dentists: Dr. Sarah Johnson, Dr. Michael Brown, Dr. Emily Davis
    - Services: General Checkup, Dental Cleaning, Teeth Whitening, Dental Filling, Root Canal, Tooth Extraction, Cosmetic Dentistry, Braces, Invisalign, Pediatric Dentistry.
    - Theme: The clinic is state-of-the-art and focuses on premium patient care.
    Answer user questions based on this context. Be concise, polite, and helpful. Do not format your response with markdown headers, just use plain text or simple bullet points.`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-flash-latest",
      systemInstruction: systemPrompt
    });

    // Format the history for Gemini SDK
    const formattedHistory = history.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: formattedHistory
    });

    const result = await chat.sendMessageStream(message);

    // Stream the response back to the client
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          controller.enqueue(new TextEncoder().encode(chunkText));
        }
        controller.close();
      }
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain' }
    });

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: `API Error: ${error.message || 'Unknown error'}` }), { status: 500 });
  }
}
