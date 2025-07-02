import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, Shield, Clock } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About TrainCare
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting travelers with essential medical services across
              India's railway network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>
                  To ensure no traveler faces a medical emergency alone. We
                  bridge the gap between urgent medical needs and available
                  healthcare services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>
                  A connected healthcare ecosystem where medical help is just a
                  tap away, regardless of your location in India.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>
                  All medical providers are verified, certified, and regularly
                  reviewed to ensure the highest standards of emergency care.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-4" />
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Medical emergencies don't wait. Our platform and provider
                  network are available round the clock for your peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Why TrainCare Exists</h2>
            <p className="text-muted-foreground mb-6">
              India's vast railway network connects millions of travelers daily.
              However, medical emergencies during travel can be particularly
              challenging when you're away from your home city and unfamiliar
              with local healthcare providers.
            </p>

            <p className="text-muted-foreground mb-6">
              TrainCare was born from the recognition that travelers need
              immediate access to reliable medical services, whether it's an
              oxygen cylinder for breathing difficulties, an ambulance for
              serious injuries, or simply finding a trusted doctor in an
              unfamiliar city.
            </p>

            <h2 className="text-2xl font-bold mb-4">How We Help</h2>
            <p className="text-muted-foreground mb-6">
              Our platform provides instant access to verified medical providers
              with direct contact information and location details. No more
              searching frantically during an emergency - everything you need is
              at your fingertips.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
