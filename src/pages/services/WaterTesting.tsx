import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Droplets, TestTube, Shield, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SupplierCard from "@/components/SupplierCard";
import ProductBrowser from "@/components/ProductBrowser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { waterTestingSuppliers, getSupplierById } from "@/data/suppliers";

const WaterTesting = () => {
  const [selectedSupplierId, setSelectedSupplierId] = useState<string | null>(null);
  const [showProductBrowser, setShowProductBrowser] = useState(false);

  const handleViewProducts = (supplierId: string) => {
    setSelectedSupplierId(supplierId);
    setShowProductBrowser(true);
  };

  const handleCloseProductBrowser = () => {
    setShowProductBrowser(false);
    setSelectedSupplierId(null);
  };

  const selectedSupplier = selectedSupplierId ? getSupplierById(selectedSupplierId) : null;

  const testingTypes = [
    {
      title: "Drinking Water Testing",
      description: "Comprehensive testing for municipal and private water supplies",
      parameters: ["pH", "Chlorine", "Turbidity", "Bacteria", "Heavy Metals"]
    },
    {
      title: "Environmental Water Testing",
      description: "Monitor water quality in rivers, lakes, and groundwater",
      parameters: ["BOD/COD", "Nutrients", "Pollutants", "Dissolved Oxygen", "Temperature"]
    },
    {
      title: "Industrial Water Testing",
      description: "Quality control for industrial processes and wastewater",
      parameters: ["Conductivity", "Hardness", "Alkalinity", "Corrosion", "Scaling"]
    },
    {
      title: "Swimming Pool Testing",
      description: "Maintain safe and healthy swimming pool conditions",
      parameters: ["Free Chlorine", "Total Chlorine", "pH", "Alkalinity", "Cyanuric Acid"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Palintest Supplier Kenya - Official Water Testing Equipment Distributor | Biolegend Scientific"
        description="Official Palintest supplier and distributor in Kenya. Authorized dealer for Palintest water testing kits, photometers, and analysis equipment. Professional water testing solutions for Kenya."
        keywords="Palintest supplier Kenya, Palintest distributor Kenya, Palintest dealer Kenya, water testing Kenya, Palintest Nairobi, water analysis equipment Kenya, Palintest authorized distributor, water testing kits Kenya"
        url="https://biolegendscientific.co.ke/services/water-testing"
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
              <div className="mb-4">
                <span className="bg-biolegend-yellow text-biolegend-purple px-4 py-2 rounded-full text-sm font-semibold">
                  🇰🇪 Official Palintest Supplier & Distributor in Kenya
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Palintest Water Testing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Authorized Palintest distributor in Kenya - Professional water analysis equipment and testing kits for every application
              </p>
            </div>
          </div>
        </section>

        {/* Water Testing Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/8392542/pexels-photo-8392542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Professional water testing laboratory - Palintest supplier Kenya showing scientist using precision equipment for water analysis"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-500/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-semibold text-gray-800">Professional Water Testing Equipment</p>
                <p className="text-xs text-gray-600">Palintest Official Distributor Kenya</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!showProductBrowser ? (
              <>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Trusted Water Testing Partners
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Leading global manufacturers of water testing equipment and solutions with product catalogs
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {waterTestingSuppliers.map((supplier) => (
                    <SupplierCard
                      key={supplier.id}
                      supplier={supplier}
                      onViewProducts={handleViewProducts}
                      showProductCount={true}
                    />
                  ))}
                </div>
              </>
            ) : (
              selectedSupplier && (
                <ProductBrowser
                  supplier={selectedSupplier}
                  onClose={handleCloseProductBrowser}
                />
              )
            )}
          </div>
        </section>

        {/* Official Palintest Distributor Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-elegant">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-4">
                    <span className="bg-biolegend-yellow text-biolegend-purple px-4 py-2 rounded-full text-sm font-semibold">
                      🏆 Official Partner
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Palintest Official Distributor in Kenya
                  </h2>
                  <p className="text-xl text-white/90 mb-6">
                    Biolegend Scientific Ltd is the <strong>authorized distributor and supplier</strong> of Palintest water testing equipment in Kenya.
                    As an official partner, we provide genuine Palintest products with full manufacturer warranty and support.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-biolegend-yellow mr-3" />
                      <span>Authorized Palintest dealer with official certification</span>
                    </div>
                    <div className="flex items-center">
                      <TestTube className="w-5 h-5 text-biolegend-yellow mr-3" />
                      <span>Complete range of Palintest photometers and test kits</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart3 className="w-5 h-5 text-biolegend-yellow mr-3" />
                      <span>Technical support and training from certified experts</span>
                    </div>
                    <div className="flex items-center">
                      <Droplets className="w-5 h-5 text-biolegend-yellow mr-3" />
                      <span>Nationwide delivery across Kenya</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us as Your Palintest Supplier?</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-biolegend-yellow">75+</div>
                        <div className="text-sm text-white/80">Years Palintest Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-biolegend-yellow">100%</div>
                        <div className="text-sm text-white/80">Genuine Products</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-biolegend-yellow">24/7</div>
                        <div className="text-sm text-white/80">Technical Support</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-biolegend-yellow">10+</div>
                        <div className="text-sm text-white/80">Years Partnership</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Types Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Water Testing Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive testing solutions for various water sources and applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testingTypes.map((type, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {type.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-blue-600">Key Parameters:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.parameters.map((param, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Water Testing Solutions?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accuracy & Reliability</h3>
                <p className="text-muted-foreground">Precise measurements you can trust for critical water quality decisions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                <p className="text-muted-foreground">User-friendly equipment suitable for both field and laboratory use</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
                <p className="text-muted-foreground">Training, calibration services, and ongoing technical support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <span className="bg-biolegend-yellow text-biolegend-purple px-4 py-2 rounded-full text-sm font-semibold">
                🇰🇪 Official Palintest Supplier Kenya
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Genuine Palintest Water Testing Equipment in Kenya
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              As the <strong>official Palintest distributor in Kenya</strong>, we provide authentic equipment with full warranty and technical support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Palintest Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Palintest Demo
              </Button>
            </div>
            <div className="mt-6 text-sm text-white/80">
              <p>✓ Authorized Palintest Dealer ✓ Genuine Products ✓ Kenya-wide Delivery</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WaterTesting;
