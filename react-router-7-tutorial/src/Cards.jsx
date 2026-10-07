import React from 'react'

const Cards = () => {
   return (
    <div className=" bg-blue-300 mt-12 px-6 py-16">
      
      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-black">
          My Skills
        </h1>

        <p className="mt-3 text-black text-3xl font-bold">
          Technologies and programming languages I work with
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {/* React Card */}
        <div
          className="group relative h-96 overflow-hidden rounded-2xl bg-cover bg-center shadow-lg transition duration-500 hover:-translate-y-2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/15"></div>

          <div className="absolute bottom-0 p-6">
            <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
              FRONTEND
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white">
              React
            </h2>

            <p className="mt-2 text-sm text-gray-300">
              Building modern and interactive web applications.
            </p>
          </div>
        </div>

        {/* Java Card */}
        <div
          className="group relative h-96 overflow-hidden rounded-2xl bg-cover bg-center shadow-lg transition duration-500 hover:-translate-y-2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/65 transition group-hover:bg-black/45"></div>

          <div className="absolute bottom-0 p-6">
            <span className="rounded-full bg-orange-400 px-3 py-1 text-xs font-bold text-black">
              PROGRAMMING
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Java
            </h2>

            <p className="mt-2 text-sm text-gray-300">
              Developing powerful and scalable applications.
            </p>
          </div>
        </div>

        {/* PHP Card */}
        <div
          className="group relative h-96 overflow-hidden rounded-2xl bg-cover bg-center shadow-lg transition duration-500 hover:-translate-y-2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/65 transition group-hover:bg-black/45"></div>

          <div className="absolute bottom-0 p-6">
            <span className="rounded-full bg-purple-400 px-3 py-1 text-xs font-bold text-black">
              BACKEND
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white">
              PHP
            </h2>

            <p className="mt-2 text-sm text-gray-300">
              Creating dynamic websites and backend applications.
            </p>
          </div>
        </div>

        {/* C++ Card */}
        <div
          className="group relative h-96 overflow-hidden rounded-2xl bg-cover bg-center shadow-lg transition duration-500 hover:-translate-y-2"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/65 transition group-hover:bg-black/45"></div>

          <div className="absolute bottom-0 p-6">
            <span className="rounded-full bg-blue-400 px-3 py-1 text-xs font-bold text-black">
              PROGRAMMING
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white">
              C++
            </h2>

            <p className="mt-2 text-sm text-gray-300">
              Working with high-performance programming and applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards