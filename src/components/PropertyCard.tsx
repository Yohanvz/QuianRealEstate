import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin, ArrowRight } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: number;
  address: string;
  addressEs: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  descriptionEs: string;
  onViewDetails?: () => void;
}

const PropertyCard = ({
  image = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  price = 750000,
  address = "123 Ocean Drive, Miami Beach",
  addressEs = "123 Ocean Drive, Miami Beach",
  beds = 3,
  baths = 2,
  sqft = 1800,
  description = "Beautiful waterfront property with stunning views and modern amenities.",
  descriptionEs = "Hermosa propiedad frente al mar con vistas impresionantes y comodidades modernas.",
  onViewDetails = () => {},
}: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="w-full max-w-[350px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-primary text-white font-semibold">
          {formatPrice(price)}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center mb-2 text-muted-foreground">
          <MapPin size={16} className="mr-1" />
          <p className="text-sm">{address}</p>
        </div>
        <p className="text-sm italic text-muted-foreground mb-3">{addressEs}</p>

        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <Bed size={18} className="mr-1" />
            <span className="text-sm">{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={18} className="mr-1" />
            <span className="text-sm">{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square size={18} className="mr-1" />
            <span className="text-sm">{sqft} sqft</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm line-clamp-2">{description}</p>
          <p className="text-sm italic line-clamp-2">{descriptionEs}</p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={onViewDetails}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          <span className="mr-1">View Details</span>
          <span className="italic text-xs mr-1">/ Ver Detalles</span>
          <ArrowRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
