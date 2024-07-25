import Image from "next/image";
import Header from "./_Components/Header";
import Hero from "./_Components/Hero";
import Features from "./_Components/Features";
import Gallery from "./_Components/Gallery";
import Feedback from "./_Components/Feedback";
import SneakPeek from "./_Components/SneakPeek";
import Footer from "./_Components/Footer";

export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Feedback />
        <SneakPeek />
      </main>
      <Footer />
    </div>
  );
}
