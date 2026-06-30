
import Demo4ScriptLoader from '@/components/demo-4/Demo4ScriptLoader';

export default function Page() {
  const html = `
<h1>Not Found</h1>
<p>The requested URL was not found on this server.</p>
<p>Additionally, a 404 Not Found
error was encountered while trying to use an ErrorDocument to handle the request.</p>
`;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />
      <Demo4ScriptLoader />
    </>
  );
}
