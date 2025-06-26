
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, MessageCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-rose-900 to-orange-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
