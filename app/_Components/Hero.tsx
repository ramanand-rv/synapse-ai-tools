import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto p-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Revolutionize Your Workflow with AI Tools
        </h2>
        <p className="mb-8">
          Enhance productivity and creativity with our cutting-edge AI
          solutions.
        </p>
        <Link href={'/dashboard'}>
          <Button className="bg-white text-blue-600 hover:text-white px-6 py-2 rounded-full font-semibold">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
