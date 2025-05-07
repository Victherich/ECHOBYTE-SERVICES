
// app/coming-soon/page.tsx



import React from 'react';

const ComingSoon = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise-bg.png')] opacity-10" />
      <div className="z-10 text-center px-6 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          🚧 Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          We’re working hard to bring something amazing to life. Stay tuned!
        </p>
        <a
        href='/'
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Home
          </a>
        {/* <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full text-black focus:outline-none w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Notify Me
          </button>
        </form> */}
      </div>
    </main>
  );
};

export default ComingSoon;
