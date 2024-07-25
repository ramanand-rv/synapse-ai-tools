import React from "react";

const feedbacks = [
  { name: "John Doe", comment: "Amazing tool, it boosted my productivity!" },
  { name: "Jane Smith", comment: "An essential part of my workflow now." },
  { name: "Mike Johnson", comment: "The best AI tools I've ever used." },
];

const Feedback = () => {
  return (
    <section id="feedback" className="container mx-auto py-16">
      <h3 className="text-3xl font-bold text-center mb-8">Customer Feedback</h3>
      <div className="flex justify-around">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="max-w-sm p-4 text-center">
            <p className="italic mb-2">{feedback.comment}</p>
            <h4 className="text-xl font-semibold">{feedback.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
