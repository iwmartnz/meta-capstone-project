import About from "@/components/About";
import Hero from "@/components/Hero";
import Specials from "@/components/Specials";
import Testimonials from "@/components/Testimonials";
import { aboutData } from "@/lib/data";

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <Specials />
      <Testimonials />
      <About aboutData={aboutData} />
    </main>
  );
}
