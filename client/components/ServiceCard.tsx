import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Navigation,
  CheckCircle,
} from "lucide-react";

export interface ServiceProvider {
  id: string;
  name: string;
  service: string;
  city: string;
  phone: string;
  address: string;
  rating: number;
  reviews: number;
  isAvailable24x7: boolean;
  distance: string;
  estimatedTime: string;
  verified: boolean;
  description: string;
  mapUrl?: string;
  source?: string;
}

interface ServiceCardProps {
  provider: ServiceProvider;
}

export default function ServiceCard({ provider }: ServiceCardProps) {
  const handleCall = () => {
    window.open(`tel:${provider.phone}`, "_self");
  };

  const handleGetDirections = () => {
    if (provider.mapUrl) {
      window.open(provider.mapUrl, "_blank");
    } else {
      // Fallback to Google Maps search
      const query = encodeURIComponent(`${provider.name} ${provider.address}`);
      window.open(`https://www.google.com/maps/search/${query}`, "_blank");
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <CardTitle className="text-lg leading-tight">
                {provider.name}
              </CardTitle>
              {provider.verified && (
                <CheckCircle className="h-4 w-4 text-green-600" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">{provider.service}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{provider.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({provider.reviews})
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-sm text-muted-foreground">{provider.description}</p>

        {/* Location & Availability */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{provider.address}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              <Navigation className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{provider.distance}</span>
            </div>

            <div className="flex items-center gap-1 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {provider.estimatedTime}
              </span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {provider.isAvailable24x7 && (
            <Badge variant="secondary" className="text-xs">
              24/7 Available
            </Badge>
          )}
          {provider.verified && (
            <Badge variant="default" className="text-xs">
              Verified
            </Badge>
          )}
          {provider.source && (
            <Badge variant="outline" className="text-xs">
              {provider.source}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button onClick={handleCall} className="flex-1 gap-2">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button
            variant="outline"
            onClick={handleGetDirections}
            className="flex-1 gap-2"
          >
            <MapPin className="h-4 w-4" />
            Directions
          </Button>
        </div>

        {/* Contact Info */}
        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            <strong>Phone:</strong> {provider.phone}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// Mock data for development
export const mockServiceProviders: ServiceProvider[] = [
  {
    id: "1",
    name: "Apollo Emergency Services",
    service: "Oxygen Cylinder",
    city: "Pune",
    phone: "+91-9876543210",
    address: "Hadapsar, Pune, Maharashtra 411028",
    rating: 4.8,
    reviews: 127,
    isAvailable24x7: true,
    distance: "2.3 km",
    estimatedTime: "15 mins",
    verified: true,
    description:
      "Premium oxygen cylinders with home delivery. Medical grade oxygen available for emergency situations.",
    mapUrl:
      "https://maps.google.com/maps?q=Apollo+Emergency+Services+Hadapsar+Pune",
  },
  {
    id: "2",
    name: "MedCare Ambulance Service",
    service: "Ambulance",
    city: "Pune",
    phone: "+91-9876543211",
    address: "Kothrud, Pune, Maharashtra 411038",
    rating: 4.6,
    reviews: 89,
    isAvailable24x7: true,
    distance: "1.8 km",
    estimatedTime: "8 mins",
    verified: true,
    description:
      "Fully equipped ambulance with trained paramedics. ICU facilities available on board.",
  },
  {
    id: "3",
    name: "City Hospital Emergency",
    service: "Emergency Doctor",
    city: "Pune",
    phone: "+91-9876543212",
    address: "Shivajinagar, Pune, Maharashtra 411005",
    rating: 4.7,
    reviews: 203,
    isAvailable24x7: true,
    distance: "3.1 km",
    estimatedTime: "20 mins",
    verified: true,
    description:
      "Emergency medical consultation available. Specialized doctors for critical care and immediate attention.",
  },
  {
    id: "4",
    name: "LifeLine Blood Bank",
    service: "Blood Bank",
    city: "Pune",
    phone: "+91-9876543213",
    address: "Camp, Pune, Maharashtra 411001",
    rating: 4.9,
    reviews: 156,
    isAvailable24x7: false,
    distance: "4.2 km",
    estimatedTime: "25 mins",
    verified: true,
    description:
      "All blood types available. Emergency blood supply with proper screening and testing.",
  },
];
