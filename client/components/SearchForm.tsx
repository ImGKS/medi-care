import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, MapPin, Stethoscope, Train } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  className?: string;
  size?: "default" | "large";
}

export default function SearchForm({
  className,
  size = "default",
}: SearchFormProps) {
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [onTrain, setOnTrain] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!service.trim() || !city.trim()) return;

    setIsLoading(true);

    // Navigate to search results with query parameters
    const searchParams = new URLSearchParams({
      service: service.trim(),
      city: city.trim(),
    });

    if (onTrain) {
      searchParams.set("onTrain", "true");
    }

    // Simulate loading time for better UX
    setTimeout(() => {
      navigate(`/search?${searchParams.toString()}`);
      setIsLoading(false);
    }, 500);
  };

  const isLarge = size === "large";

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Service Input */}
          <div className="space-y-2">
            <Label
              htmlFor="service"
              className={cn(
                "text-sm font-medium flex items-center gap-2",
                isLarge && "text-base",
              )}
            >
              <Stethoscope className={cn("h-4 w-4", isLarge && "h-5 w-5")} />
              Medical Service
            </Label>
            <Input
              id="service"
              type="text"
              placeholder="e.g., Oxygen cylinder, Ambulance, Doctor"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={cn("w-full", isLarge && "h-12 text-base")}
              required
            />
          </div>

          {/* City Input */}
          <div className="space-y-2">
            <Label
              htmlFor="city"
              className={cn(
                "text-sm font-medium flex items-center gap-2",
                isLarge && "text-base",
              )}
            >
              <MapPin className={cn("h-4 w-4", isLarge && "h-5 w-5")} />
              City
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="e.g., Pune, Mumbai, Delhi"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={cn("w-full", isLarge && "h-12 text-base")}
              required
            />
          </div>
        </div>

        {/* Search Button */}
        <Button
          type="submit"
          disabled={!service.trim() || !city.trim() || isLoading}
          className={cn("w-full gap-2", isLarge && "h-12 text-base")}
        >
          {isLoading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Searching...
            </>
          ) : (
            <>
              <Search className={cn("h-4 w-4", isLarge && "h-5 w-5")} />
              Find Services
            </>
          )}
        </Button>
      </form>

      {/* Quick Service Suggestions */}
      <div className="mt-6">
        <p className="text-sm text-muted-foreground mb-3">Popular searches:</p>
        <div className="flex flex-wrap gap-2">
          {[
            "Oxygen cylinder",
            "Ambulance",
            "Emergency doctor",
            "Blood bank",
            "Pharmacy",
            "Hospital",
          ].map((suggestion) => (
            <Button
              key={suggestion}
              variant="outline"
              size="sm"
              onClick={() => setService(suggestion)}
              className="text-xs"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
