import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Integrations from '../components/Integrations';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col gap-32 pb-0">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <FAQ />
        <Integrations />
      </main>
      <Footer />
    </div>
  );
}
