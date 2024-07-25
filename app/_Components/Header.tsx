import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">AI Tools</h1>
        <nav>
          <a href="#features" className="mx-4 text-gray-700">
            Features
          </a>
          <a href="#gallery" className="mx-4 text-gray-700">
            Gallery
          </a>
          <a href="#feedback" className="mx-4 text-gray-700">
            Feedback
          </a>
          <a href="#sneakpeek" className="mx-4 text-gray-700">
            Sneak Peek
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
