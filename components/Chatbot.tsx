'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Chatbot({ themeColor = '#104cba' }: { themeColor?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi there! I'm the PrimeCare AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          history: messages.filter(m => m.role !== 'assistant' || m.content !== "Hi there! I'm the PrimeCare AI assistant. How can I help you today?"), // exclude greeting
          message: userMessage 
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch response');
      }

      // Add a placeholder message for the assistant
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let assistantMessage = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value);
          assistantMessage += chunk;
          
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = assistantMessage;
            return newMessages;
          });
        }
      }
    } catch (error: any) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="chatbot-trigger"
        style={{
          position: 'fixed', bottom: '30px', right: '30px', width: '60px', height: '60px',
          borderRadius: '50%', background: themeColor, color: 'white', border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)', display: isOpen ? 'none' : 'flex',
          alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 9999,
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '30px', right: '30px', width: '350px', height: '500px',
          background: 'white', borderRadius: '15px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          display: 'flex', flexDirection: 'column', zIndex: 9999, overflow: 'hidden',
          fontFamily: 'var(--font-jakarta)'
        }}>
          {/* Header */}
          <div style={{
            background: themeColor, padding: '15px 20px', display: 'flex', 
            justifyContent: 'space-between', alignItems: 'center', color: 'white'
          }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '18px', color: 'white', fontFamily: 'var(--font-outfit)' }}>PrimeCare AI</h4>
              <span style={{ fontSize: '12px', opacity: 0.8, fontFamily: 'var(--font-jakarta)' }}>Powered by AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
              <X size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', background: '#f8f9fa', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                background: msg.role === 'user' ? themeColor : '#ffffff',
                color: msg.role === 'user' ? '#ffffff' : '#333333',
                padding: '14px 18px', 
                borderRadius: '16px',
                borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                maxWidth: '85%', 
                boxShadow: msg.role === 'user' ? `0 4px 12px ${themeColor}33` : '0 4px 12px rgba(0,0,0,0.06)',
                border: msg.role === 'assistant' ? '1px solid #f0f0f0' : 'none',
                fontSize: '14px', 
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap',
                fontFamily: 'var(--font-jakarta)'
              }}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start', background: 'white', padding: '12px 16px', borderRadius: '12px', color: '#666', fontSize: '14px' }}>
                <Loader2 size={16} className="fa-spin" style={{ display: 'inline-block', animation: 'spin 2s linear infinite' }} /> Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} style={{ padding: '15px', background: 'white', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              style={{
                flex: 1, padding: '10px 15px', border: '1px solid #ddd', borderRadius: '25px',
                outline: 'none', fontSize: '14px', fontFamily: 'var(--font-jakarta)'
              }}
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={!input.trim() || isLoading}
              style={{
                background: input.trim() && !isLoading ? themeColor : '#ccc', color: 'white', border: 'none',
                width: '40px', height: '40px', borderRadius: '50%', display: 'flex',
                alignItems: 'center', justifyContent: 'center', cursor: input.trim() && !isLoading ? 'pointer' : 'default',
                transition: 'background 0.3s'
              }}
            >
              <Send size={18} style={{ marginLeft: '2px' }} />
            </button>
          </form>
        </div>
      )}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </>
  );
}
