import Header from "./components/Header";
import Hero from "./components/Hero";
import NextEvent from "./components/NextEvent";
import WhatWeDo from "./components/WhatWeDo";
import WhyJoin from "./components/WhyJoin";
import Gallery from "./components/Gallery";
import Chatbot from "./components/Chatbot";
import Resources from "./components/Resources";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NextEvent />
        <WhatWeDo />
        <WhyJoin />
        <Gallery />
        <Chatbot />
        <Resources />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
