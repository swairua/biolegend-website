import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope,
  GraduationCap,
  Utensils,
  Droplets,
  Sprout,
  Pill,
  Landmark,
  FlaskConical,
  MapPin,
  Users,
  Handshake,
} from "lucide-react";

const clientCategories = [
  {
    name: "Hospitals and Healthcare Institutions",
    description: "Hospital laboratories, diagnostic centres, medical research facilities, and healthcare institutions.",
    icon: Stethoscope,
  },
  {
    name: "Research and Academic Institutions",
    description: "Universities, colleges, research centres and scientific institutions.",
    icon: GraduationCap,
  },
  {
    name: "Food and Beverage Industries",
    description: "Food processors, beverage manufacturers, breweries, dairy processors and food quality-control laboratories.",
    icon: Utensils,
  },
  {
    name: "Water and Environmental Laboratories",
    description: "Water treatment companies, wastewater treatment facilities, environmental testing laboratories and water utilities.",
    icon: Droplets,
  },
  {
    name: "Agriculture and Horticulture",
    description: "Agricultural research institutions, farms, flower growers, tissue culture laboratories and agricultural processing facilities.",
    icon: Sprout,
  },
  {
    name: "Pharmaceutical and Manufacturing Industries",
    description: "Pharmaceutical manufacturers, chemical industries, production facilities and industrial quality-control departments.",
    icon: Pill,
  },
  {
    name: "Government and Regulatory Institutions",
    description: "Government laboratories, regulatory agencies, public research institutions and quality assurance bodies.",
    icon: Landmark,
  },
  {
    name: "Independent and Commercial Laboratories",
    description: "Private testing laboratories, microbiology laboratories, analytical laboratories and other commercial testing facilities.",
    icon: FlaskConical,
  },
];

const countries = [
  { name: "Kenya", flag: "🇰🇪", home: true },
  { name: "Uganda", flag: "🇺🇬", home: false },
  { name: "Tanzania", flag: "🇹🇿", home: false },
  { name: "Rwanda", flag: "🇷🇼", home: false },
  { name: "Democratic Republic of Congo (DRC)", flag: "🇨🇩", home: false },
  { name: "Somalia", flag: "🇸🇴", home: false },
  { name: "South Sudan", flag: "🇸🇸", home: false },
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="w-5 h-5 text-biolegend-yellow" />
            <span className="text-biolegend-yellow font-semibold">Who We Serve</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our clients include:
          </p>
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {clientCategories.map((client, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-shadow border-biolegend-purple/10"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-biolegend-yellow text-biolegend-purple w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <client.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-foreground mb-2 leading-snug">
                  {client.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {client.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Geographical Reach */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-6 h-6 text-biolegend-purple" />
              <h3 className="text-2xl font-bold text-foreground">Our Geographical Reach</h3>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We serve customers in Kenya and extend our supply capabilities to the wider
              East and Central African region, including:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((country, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm ${
                  country.home
                    ? "border-2 border-biolegend-yellow"
                    : "border border-border"
                }`}
              >
                <span className="text-2xl" role="img" aria-label={`${country.name} flag`}>
                  {country.flag}
                </span>
                <span className="font-medium text-foreground">{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment to Our Clients */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-10 text-white text-center shadow-elegant">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Our Commitment to Our Clients</h3>
          </div>
          <p className="text-white/90 leading-relaxed max-w-4xl mx-auto text-lg">
            We value every customer, regardless of size or industry. Our focus is on understanding
            clients' requirements, providing suitable products, and building long-term relationships
            founded on trust, quality, and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
