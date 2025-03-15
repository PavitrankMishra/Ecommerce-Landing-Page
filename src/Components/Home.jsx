import React from "react";

const Home = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-4">
        <div className="text-2xl font-bold flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span>e-commerce</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a
            href="#"
            className="text-orange-500 font-semibold border-b-2 border-orange-500"
          >
            Product
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Contact
          </a>
        </nav>
        <div className="relative">
          <input
            type="text"
            placeholder="Type here"
            className="px-4 py-2 rounded-full border"
          />
          <button className="absolute right-2 top-2 text-orange-500">🔍</button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex items-center px-10 py-12">
        {/* Left Content */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-pink-600">
            e-commerce Website
          </h1>
          <p className="text-sm text-gray-500 tracking-wider my-4">
            SUPPORT LOCAL EVERYTHING
          </p>
          <div className="flex items-center space-x-3 mt-4">
            <span className="text-gray-700">Choose your</span>
            <input
              type="number"
              defaultValue="2"
              className="w-12 border text-center"
            />
          </div>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full">
            🛒 Buy Now
          </button>
        </div>

        {/* Right Content (Product Image & Tags) */}
        <div className="relative w-1/2">
          <div className="relative bg-orange-100 rounded-full w-[400px] h-[400px] flex items-center justify-center">
            <img src="/chair.png" alt="Chair" className="h-[250px]" />
          </div>
          <div className="absolute top-8 right-10 bg-white shadow-lg rounded-full px-4 py-2">
            Minimalistic
          </div>
          <div className="absolute bottom-10 left-10 bg-white shadow-lg rounded-full px-4 py-2">
            ¡Super cozy!
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
