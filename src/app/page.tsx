// src/app/page.tsx
import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import {Header} from "@/sections/Header"; // Default export
import {Hero} from "@/sections/Hero"; // Default export
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction/>
      <Footer/>
    </>
  );
}
