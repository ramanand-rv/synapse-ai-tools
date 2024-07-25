import React from "react";

const features = [
  {
    title: "Automated Insights",
    description: "Generate insights with a click of a button.",
  },
  {
    title: "Seamless Integration",
    description: "Integrate seamlessly with your existing tools.",
  },
  {
    title: "User-Friendly Interface",
    description: "Easy to use interface designed for everyone.",
  },
];

const Features = () => {
  return (
    <section id="features" className="container mx-auto py-16">
      <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
      <div className="flex justify-around">
        {features.map((feature, index) => (
          <div key={index} className="max-w-sm p-4 text-center">
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
