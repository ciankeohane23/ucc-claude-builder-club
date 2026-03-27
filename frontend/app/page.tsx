import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Outreach from "./components/Outreach";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Form />
        <Gallery />
        <Outreach />
        <Chatbot />
        <section className="bg-primary px-[8%] py-16 sm:py-20 md:py-28">
          <p className="text-center text-5xl font-light leading-tight text-cream sm:text-6xl md:text-left md:text-7xl lg:text-8xl">
            Keep
            <br />
            thinking.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
