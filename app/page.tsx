export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to v0 Website Clone</h1>
        <p className="mb-4">A modern website built with Next.js and deployed on Vercel.</p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Edit <code className="bg-gray-100 px-2 py-1 rounded">app/page.tsx</code> to customize this page</li>
            <li>Check the README.md for deployment instructions</li>
            <li>Visit the <a href="https://nextjs.org/docs" className="text-blue-500 hover:underline">Next.js documentation</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
