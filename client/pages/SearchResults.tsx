import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SearchForm from "@/components/SearchForm";
import ServiceCard, { ServiceProvider } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  AlertCircle,
  Filter,
  ArrowUpDown,
  MapPin,
  Clock,
  Globe,
  Train,
} from "lucide-react";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [providers, setProviders] = useState<ServiceProvider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"distance" | "rating" | "time">(
    "distance",
  );

  const service = searchParams.get("service");
  const city = searchParams.get("city");
  const onTrain = searchParams.get("onTrain") === "true";

  useEffect(() => {
    if (service && city) {
      searchServices(service, city);
    }
  }, [service, city]);

  const searchServices = async (serviceQuery: string, cityQuery: string) => {
    setIsLoading(true);

    try {
      // Call the real API with web scraping
      const apiParams = new URLSearchParams({
        service: serviceQuery,
        city: cityQuery,
      });

      if (onTrain) {
        apiParams.set("onTrain", "true");
      }

      const response = await fetch(`/api/search-services?${apiParams}`);

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      setProviders(data.providers || []);
    } catch (error) {
      console.error("Error searching services:", error);
      // Fallback to empty array or show error
      setProviders([]);
    } finally {
      setIsLoading(false);
    }
  };

  const sortProviders = (providers: ServiceProvider[], sortBy: string) => {
    return [...providers].sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "time":
          return parseInt(a.estimatedTime) - parseInt(b.estimatedTime);
        case "distance":
        default:
          return parseFloat(a.distance) - parseFloat(b.distance);
      }
    });
  };

  const sortedProviders = sortProviders(providers, sortBy);

  if (!service || !city) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Please provide both service and city to search for medical
              providers.
            </AlertDescription>
          </Alert>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Medical Services in {city}
            {onTrain && (
              <span className="inline-flex items-center gap-1 ml-3 text-lg bg-primary/10 text-primary px-3 py-1 rounded-full">
                <Train className="h-4 w-4" />
                Train Delivery
              </span>
            )}
          </h1>
          <p className="text-muted-foreground mb-6">
            Showing results for "{service}" in {city}
            {onTrain && " with train delivery service"}
          </p>

          {/* Search Form */}
          <div className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Refine Your Search</h2>
            <SearchForm />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {isLoading
                  ? "Searching..."
                  : `${sortedProviders.length} services found`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <div className="flex gap-1">
                <Button
                  variant={sortBy === "distance" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("distance")}
                  className="gap-1"
                >
                  <MapPin className="h-3 w-3" />
                  Distance
                </Button>
                <Button
                  variant={sortBy === "time" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("time")}
                  className="gap-1"
                >
                  <Clock className="h-3 w-3" />
                  Time
                </Button>
                <Button
                  variant={sortBy === "rating" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy("rating")}
                  className="gap-1"
                >
                  <ArrowUpDown className="h-3 w-3" />
                  Rating
                </Button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-64 bg-muted animate-pulse rounded-lg"
                />
              ))}
            </div>
          )}

          {/* Data Source Info */}
          {!isLoading && sortedProviders.length > 0 && (
            <div className="mb-4">
              <Alert>
                <Globe className="h-4 w-4" />
                <AlertDescription>
                  Results are scraped from multiple sources including Google
                  Search and JustDial. Data is refreshed in real-time to provide
                  you with the most current information.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Results */}
          {!isLoading && (
            <>
              {sortedProviders.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sortedProviders.map((provider) => (
                    <ServiceCard key={provider.id} provider={provider} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      No services found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We couldn't find any "{service}" services in {city}. Try
                      searching for a different service or location.
                    </p>
                    <Button variant="outline">Try Different Search</Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-destructive/10 border border-destructive/20 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-8 w-8 bg-destructive rounded-full flex items-center justify-center">
              <AlertCircle className="h-4 w-4 text-destructive-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-destructive">
              Medical Emergency?
            </h3>
          </div>
          <p className="text-destructive/80 mb-4">
            If this is a life-threatening emergency, call these numbers
            immediately:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="destructive"
              size="sm"
              onClick={() => window.open("tel:102", "_self")}
            >
              Ambulance: 102
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:100", "_self")}
            >
              Police: 100
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:101", "_self")}
            >
              Fire: 101
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:1098", "_self")}
            >
              Helpline: 1098
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
