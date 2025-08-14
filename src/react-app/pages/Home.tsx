import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import StatsSection from '@/react-app/components/StatsSection';
import TestimonialsSection from '@/react-app/components/TestimonialsSection';
import PricingSection from '@/react-app/components/PricingSection';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
