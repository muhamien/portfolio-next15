'use client'

export default function LatestPost() {
  return (
    <section className="w-full max-w-2xl mx-auto my-12 px-4">
      <h2 className="text-2xl font-semibold mb-6">Latest Post</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold">How to Build a Modern Web App</h3>
          <p className="text-gray-500 text-sm">June 15, 2024 &middot; 5 min read</p>
        </div>
        <p className="text-gray-700">
          Learn the essentials of building scalable modern web apps using Next.js, React, and TypeScript. This tutorial covers the basics to get you started in no time.
        </p>
        <a
          href="#"
          className="inline-block mt-4 text-blue-600 hover:underline font-medium"
        >
          Read more &rarr;
        </a>
      </div>
    </section>
  );
}
