import React from "react";

const SneakPeek = () => {
  return (
    <section id="sneakpeek" className="bg-blue-600 text-white py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Product Sneak Peek</h3>
        <p className="mb-4">
          Get a glimpse of our upcoming features and improvements.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default SneakPeek;
