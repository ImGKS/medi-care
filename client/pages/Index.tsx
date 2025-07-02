import Layout from "@/components/Layout";
import SearchForm from "@/components/SearchForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Ambulance,
  Heart,
  Shield,
  Clock,
  MapPin,
  Phone,
  Train,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Train className="h-4 w-4" />
                Medical Emergency Assistant for Train Travelers
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Emergency Medical Help{" "}
              <span className="text-primary">On Your Journey</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Traveling by train in India? Get instant access to medical
              services, oxygen cylinders, ambulances, and emergency care
              wherever you are.
            </p>

            {/* Search Form */}
            <div className="bg-card border shadow-lg rounded-2xl p-8 mb-12">
              <SearchForm size="large" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  10,000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Medical Providers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">
                  Cities Covered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Emergency Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose TrainCare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built specifically for travelers who need reliable medical
              assistance away from home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Instant Response</CardTitle>
                <CardDescription>
                  Get medical help within minutes. Our network is optimized for
                  emergency situations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Verified Providers</CardTitle>
                <CardDescription>
                  All medical providers are verified and certified for quality
                  emergency care.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Nationwide Coverage</CardTitle>
                <CardDescription>
                  From metro cities to small towns, get medical assistance
                  across India's railway network.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Medical Services Available
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive medical support for every emergency situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Ambulance,
                title: "Ambulance Services",
                description:
                  "Fully equipped ambulances with trained paramedics",
              },
              {
                icon: Heart,
                title: "Oxygen Supply",
                description:
                  "Medical grade oxygen cylinders for respiratory emergencies",
              },
              {
                icon: Users,
                title: "Emergency Doctors",
                description: "Immediate medical consultation and treatment",
              },
              {
                icon: Phone,
                title: "Telemedicine",
                description: "Remote medical guidance and prescriptions",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get medical help in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Search Service",
                description:
                  "Enter the medical service you need and your current location or city.",
              },
              {
                step: "2",
                title: "Choose Provider",
                description:
                  "Browse verified medical providers with ratings, contact info, and directions.",
              },
              {
                step: "3",
                title: "Get Help",
                description:
                  "Call directly or get directions to receive immediate medical assistance.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-destructive to-destructive/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-destructive-foreground mb-6">
              Medical Emergency Right Now?
            </h2>
            <p className="text-xl text-destructive-foreground/90 mb-8">
              Don't wait - call these emergency numbers immediately for
              life-threatening situations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open("tel:102", "_self")}
                className="gap-2"
              >
                <Phone className="h-4 w-4" />
                Ambulance: 102
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open("tel:100", "_self")}
                className="gap-2"
              >
                <Phone className="h-4 w-4" />
                Police: 100
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open("tel:101", "_self")}
                className="gap-2"
              >
                <Phone className="h-4 w-4" />
                Fire: 101
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open("tel:1098", "_self")}
                className="gap-2"
              >
                <Phone className="h-4 w-4" />
                Helpline: 1098
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
