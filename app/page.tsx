import Hero from "@/components/Hero";
import SegmentsMarquee from "@/components/SegmentsMarquee";
import Services from "@/components/Services";
import Award from "@/components/Award";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SegmentsMarquee />
      <Services />
      <Award />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}
