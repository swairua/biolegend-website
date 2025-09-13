import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, TestTube, BarChart3, Thermometer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SoilTesting = () => {
  const partners = [
    {
      name: "LaMotte",
      description: "Leading manufacturer of soil testing kits and equipment",
      specialties: ["Soil Test Kits", "pH Testing", "Nutrient Analysis", "Field Testing"]
    },
    {
      name: "Wagtech",
      description: "Portable testing technology for field and laboratory use",
      specialties: ["Portable Kits", "Digital Testing", "Environmental Monitoring", "Quick Tests"]
    },
    {
      name: "Hannah Instruments",
      description: "Analytical instrumentation for soil and agricultural testing",
      specialties: ["pH Meters", "EC Meters", "Multi-parameter Testers", "Laboratory Equipment"]
    }
  ];

  const testingParameters = [
    {
      category: "Chemical Properties",
      icon: <TestTube className="w-6 h-6 text-amber-600" />,
      tests: ["pH", "Electrical Conductivity", "Organic Matter", "CEC", "Available Nutrients", "Heavy Metals"]
    },
    {
      category: "Physical Properties",
      icon: <BarChart3 className="w-6 h-6 text-amber-600" />,
      tests: ["Texture", "Bulk Density", "Porosity", "Water Holding Capacity", "Permeability", "Aggregate Stability"]
    },
    {
      category: "Nutrient Analysis",
      icon: <Leaf className="w-6 h-6 text-amber-600" />,
      tests: ["Nitrogen (N)", "Phosphorus (P)", "Potassium (K)", "Calcium (Ca)", "Magnesium (Mg)", "Sulfur (S)"]
    },
    {
      category: "Environmental Testing",
      icon: <Thermometer className="w-6 h-6 text-amber-600" />,
      tests: ["Contamination", "Salinity", "Temperature", "Moisture Content", "Biological Activity", "Erosion Risk"]
    }
  ];

  const applications = [
    {
      title: "Agricultural Testing",
      description: "Optimize crop production with comprehensive soil analysis",
      benefits: ["Improved crop yields", "Nutrient management", "Cost-effective fertilization", "Sustainable farming"]
    },
    {
      title: "Environmental Monitoring",
      description: "Assess soil quality and contamination levels",
      benefits: ["Pollution detection", "Remediation planning", "Compliance monitoring", "Risk assessment"]
    },
    {
      title: "Construction & Engineering",
      description: "Evaluate soil properties for construction projects",
      benefits: ["Foundation design", "Load bearing capacity", "Drainage assessment", "Stability analysis"]
    },
    {
      title: "Research & Education",
      description: "Support academic and research investigations",
      benefits: ["Scientific research", "Student education", "Data collection", "Method development"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Soil Testing Equipment - LaMotte, Wagtech, Hannah Instruments - Biolegend Scientific Ltd"
        description="Professional soil testing equipment from LaMotte, Wagtech, and Hannah Instruments. Complete solutions for agricultural, environmental, and construction soil analysis."
        keywords="soil testing, LaMotte, Wagtech, Hannah Instruments, soil analysis, pH testing, nutrient analysis, environmental monitoring"
        url="https://biolegendscientific.co.ke/services/soil-testing"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Soil Testing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Professional soil analysis equipment from LaMotte, Wagtech, and Hannah Instruments
              </p>
            </div>
          </div>
        </section>

        {/* Soil Testing Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                alt="Soil testing and analysis in laboratory and field conditions"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-amber-500/20"></div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted Soil Testing Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leading manufacturers of soil testing equipment and analytical instruments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-amber-500/20">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-amber-600 transition-colors">
                      {partner.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {partner.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-amber-600">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-xs font-medium">
                            {specialty}
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

        {/* Testing Parameters Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Soil Analysis
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete testing for agricultural, environmental, and construction applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testingParameters.map((param, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-amber-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {param.icon}
                      <CardTitle className="text-lg group-hover:text-amber-600 transition-colors">
                        {param.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {param.tests.map((test, idx) => (
                        <span key={idx} className="block bg-amber-50 text-amber-700 px-2 py-1 rounded-md text-sm">
                          {test}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Soil Testing Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional solutions for diverse soil analysis needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-700">
                      {app.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-amber-600">Key Benefits:</h4>
                      {app.benefits.map((benefit, idx) => (
                        <span key={idx} className="block text-sm text-muted-foreground">
                          • {benefit}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Soil Testing Solutions?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
                <p className="text-muted-foreground">Precise measurements for reliable soil assessment and decision making</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Field & Lab Testing</h3>
                <p className="text-muted-foreground">Portable solutions for field work and comprehensive laboratory analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground">Technical support and training for optimal testing procedures</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-amber-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Professional Soil Testing Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our soil testing specialists for equipment recommendations and technical support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                  Get Testing Equipment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Technical Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SoilTesting;
