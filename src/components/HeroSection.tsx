import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: {
    english: string;
    spanish: string;
  };
  subtitle?: {
    english: string;
    spanish: string;
  };
  ctaText?: {
    english: string;
    spanish: string;
  };
  backgroundImage?: string;
  language?: "english" | "spanish";
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = {
    english: "Find Your Dream Home in Miami",
    spanish: "Encuentra Tu Casa Soñada en Miami",
  },
  subtitle = {
    english: "Expert real estate services for the Hispanic community",
    spanish: "Servicios inmobiliarios expertos para la comunidad hispana",
  },
  ctaText = {
    english: "Contact Us Today",
    spanish: "Contáctanos Hoy",
  },
  backgroundImage = "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80",
  language = "english",
  onCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}) => {
  const currentTitle = language === "english" ? title.english : title.spanish;
  const currentSubtitle =
    language === "english" ? subtitle.english : subtitle.spanish;
  const currentCtaText =
    language === "english" ? ctaText.english : ctaText.spanish;

  return (
    <div className="relative h-[700px] w-full overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-start px-6 md:px-12 lg:px-24">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {currentTitle}
          </h1>

          <p className="mb-8 text-xl text-white/90 md:text-2xl">
            {currentSubtitle}
          </p>

          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-amber-500 text-lg font-semibold text-white hover:bg-amber-600"
          >
            {currentCtaText}
          </Button>
        </motion.div>
      </div>

      {/* Miami Skyline Silhouette (Optional Decorative Element) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 w-full bg-contain bg-bottom bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=10&auto=format&fit=crop&crop=bottom&h=100')`,
        }}
      ></div>
    </div>
  );
};

export default HeroSection;
