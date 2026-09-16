export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to v0 Website Clone
        </h1>
        <p className="text-gray-300 mb-8">
          A modern website built with Next.js 14 and deployed on Vercel
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition">
            <h2 className="text-xl font-semibold mb-2">🚀 Fast Performance</h2>
            <p className="text-gray-400">
              Optimized for speed with Next.js 14 and Vercel deployment
            </p>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition">
            <h2 className="text-xl font-semibold mb-2">🎨 Modern Design</h2>
            <p className="text-gray-400">
              Built with Tailwind CSS for beautiful, responsive layouts
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
