import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h2 className={`mb-3 text-2xl font-semibold`}>Links</h2>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/translators"
          target="_blank"
          rel="noopener noreferrer"
        >
          Translation management
        </a>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/jobs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Translation jobs
        </a>
      </div>
    </main>
  );
}
