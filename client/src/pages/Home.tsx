/* 
  Home Page - Grupo Galdino
  Main landing page with all sections
  Modern Corporate Elegance design
*/

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Segments from '@/components/Segments';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Segments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
