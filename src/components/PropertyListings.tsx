import React from "react";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  image: string;
  priceUSD: number;
  location: {
    en: string;
    es: string;
  };
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: {
    en: string;
    es: string;
  };
}

interface PropertyListingsProps {
  properties?: Property[];
  language?: "en" | "es";
  title?: {
    en: string;
    es: string;
  };
}

const PropertyListings: React.FC<PropertyListingsProps> = ({
  properties = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      priceUSD: 750000,
      location: {
        en: "Brickell, Miami",
        es: "Brickell, Miami",
      },
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1850,
      description: {
        en: "Luxurious waterfront condo with stunning bay views and modern finishes.",
        es: "Lujoso condominio frente al mar con impresionantes vistas a la bahía y acabados modernos.",
      },
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      priceUSD: 1250000,
      location: {
        en: "Coral Gables, Miami",
        es: "Coral Gables, Miami",
      },
      bedrooms: 4,
      bathrooms: 3.5,
      sqft: 2800,
      description: {
        en: "Elegant Spanish-style home with pool in prestigious gated community.",
        es: "Elegante casa de estilo español con piscina en prestigiosa comunidad cerrada.",
      },
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
      priceUSD: 495000,
      location: {
        en: "Little Havana, Miami",
        es: "La Pequeña Habana, Miami",
      },
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      description: {
        en: "Charming renovated townhouse in the heart of vibrant Little Havana.",
        es: "Encantadora casa adosada renovada en el corazón de la vibrante Pequeña Habana.",
      },
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      priceUSD: 980000,
      location: {
        en: "Coconut Grove, Miami",
        es: "Coconut Grove, Miami",
      },
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2100,
      description: {
        en: "Contemporary home with lush tropical garden and outdoor entertainment area.",
        es: "Casa contemporánea con exuberante jardín tropical y área de entretenimiento al aire libre.",
      },
    },
  ],
  language = "en",
  title = {
    en: "Featured Properties",
    es: "Propiedades Destacadas",
  },
}) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white" id="properties">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
          {title[language]}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {language === "en"
            ? "Discover our exclusive selection of Miami properties perfect for your lifestyle and investment goals."
            : "Descubra nuestra selección exclusiva de propiedades en Miami perfectas para su estilo de vida y objetivos de inversión."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              price={property.priceUSD}
              location={property.location[language]}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              sqft={property.sqft}
              description={property.description[language]}
              language={language}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-coral-500 hover:bg-coral-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md">
            {language === "en"
              ? "View All Properties"
              : "Ver Todas Las Propiedades"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
