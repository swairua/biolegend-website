import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ScientificEquipment = () => {
  const partners = [
    {
      name: "🇰🇪 Radwag",
      description: "Official Distributor in Kenya - Leading manufacturer of analytical balances and weighing equipment",
      specialties: ["Analytical Balances", "Precision Weighing", "Laboratory Scales", "Industrial Balances"],
      website: "https://radwag.com",
      isOfficialDistributor: true
    },
    {
      name: "🇰🇪 Bioendo",
      description: "Official Distributor in Kenya - Specialized supplier of medical, dental, and laboratory equipment",
      specialties: ["Medical Equipment", "Dental Equipment", "Laboratory Supplies", "Sterilization Equipment"],
      website: "https://bioendo.com",
      isOfficialDistributor: true
    },
    {
      name: "🇰🇪 MicroLab Scientific",
      description: "Official Distributor in Kenya - Comprehensive supplier of laboratory equipment and scientific instruments",
      specialties: ["Microscopes", "Laboratory Equipment", "Analytical Instruments", "Consumables"],
      website: "https://microlabscientific.com",
      isOfficialDistributor: true
    },
    {
      name: "Labtron",
      description: "Advanced laboratory equipment for scientific research and analysis",
      specialties: ["Centrifuges", "Incubators", "Autoclaves", "Shakers", "Heating Equipment"],
      website: "https://www.labtron.com"
    },
    {
      name: "Draglab Technologies",
      description: "Cutting-edge laboratory instruments and automation solutions",
      specialties: ["Automated Systems", "Digital Equipment", "Laboratory Software", "Data Management"],
      website: "https://www.drag-lab.de/EN/"
    },
    {
      name: "Hongshun Medical Instrument",
      description: "Medical and laboratory instrumentation for healthcare applications",
      specialties: ["Medical Devices", "Diagnostic Equipment", "Healthcare Instruments", "Patient Monitoring"],
      website: "https://www.asian-medical.com"
    },
    {
      name: "Biobase",
      description: "Comprehensive laboratory equipment and biosafety solutions",
      specialties: ["Biosafety Cabinets", "PCR Equipment", "Centrifuges", "Laboratory Furniture"],
      website: "https://www.biobase.cc"
    },
    {
      name: "Scitek Global",
      description: "Global provider of scientific instruments and laboratory solutions",
      specialties: ["Analytical Instruments", "Testing Equipment", "Quality Control", "Research Tools"],
      website: "https://www.scitekglobal.com"
    },
    {
      name: "Dlab",
      description: "Professional laboratory equipment for various scientific applications",
      specialties: ["Mixers", "Pipettes", "Heating Plates", "Laboratory Basics", "Sample Preparation"],
      website: "https://www.dlabsci.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Scientific Equipment - Laboratory Instruments - Biolegend Scientific Ltd"
        description="Professional scientific equipment from leading brands including Labtron, Draglab Technologies, Biobase, and more. Complete laboratory solutions for research and analysis."
        keywords="scientific equipment, laboratory instruments, Labtron, Draglab, Biobase, Dlab, Scitek, laboratory solutions"
        url="https://biolegendscientific.co.ke/services/scientific-equipment"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Scientific Equipment
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Advanced laboratory instruments and equipment from world-leading manufacturers
              </p>
            </div>
          </div>
        </section>

        {/* Multi-Supplier Reference Images */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Hero Image */}
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-8">
              <img
                src="https://images.pexels.com/photos/8471963/pexels-photo-8471963.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Scientific laboratory equipment from leading suppliers - Labtron, Biobase, Dlab instruments"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-biolegend-purple/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Premium Scientific Equipment</h3>
                <p className="text-sm text-gray-600">Advanced instruments from trusted global suppliers</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Multiple Suppliers</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Global Quality</span>
                </div>
              </div>
            </div>

            {/* Supplier Reference Gallery */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Labtron laboratory equipment - centrifuges and incubators"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-1 left-1 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">Labtron</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Biobase laboratory equipment - biosafety cabinets and PCR systems"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-1 left-1 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">Biobase</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/8940355/pexels-photo-8940355.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Dlab scientific instruments - mixers and heating equipment"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-1 left-1 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">Dlab</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Draglab Technologies - automated laboratory systems and digital equipment"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-1 left-1 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">Draglab</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Equipment Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We partner with globally recognized manufacturers to provide you with the highest quality scientific equipment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className={`group hover:shadow-elegant transition-all duration-300 border-2 ${partner.isOfficialDistributor ? 'border-biolegend-yellow bg-biolegend-yellow/5 hover:border-biolegend-yellow/80' : 'hover:border-biolegend-purple/20'}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl group-hover:text-biolegend-purple transition-colors flex-1">
                        {partner.name}
                      </CardTitle>
                      {partner.isOfficialDistributor && (
                        <Badge variant="secondary" className="bg-biolegend-yellow text-biolegend-purple-dark font-semibold whitespace-nowrap">
                          Official Distributor
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {partner.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm text-biolegend-purple">Specialties:</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {partner.specialties.map((specialty, idx) => (
                            <span key={idx} className="bg-biolegend-yellow/20 text-biolegend-purple px-2 py-1 rounded-md text-xs font-medium">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button
                        onClick={() => window.open(partner.website, '_blank')}
                        className={`w-full ${partner.isOfficialDistributor ? 'bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90' : 'bg-biolegend-purple hover:bg-biolegend-purple/90'}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Scientific Equipment?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-biolegend-purple">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">All equipment meets international standards and comes with manufacturer warranties</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-biolegend-purple">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-muted-foreground">Our technical team provides installation, training, and ongoing support</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-biolegend-purple">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground">Direct partnerships ensure the best prices for premium equipment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-biolegend-purple text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Laboratory?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your scientific equipment needs and get personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Get Equipment Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Demonstration
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScientificEquipment;
