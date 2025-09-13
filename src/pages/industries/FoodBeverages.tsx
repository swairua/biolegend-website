import { Link } from "react-router-dom";
import { ArrowLeft, Apple, Coffee, Shield, Award, TestTube, Thermometer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FoodBeverages = () => {
  const foodSectors = [
    {
      sector: "Food Processing",
      description: "Quality control and safety testing in food manufacturing",
      icon: <Apple className="w-6 h-6 text-green-600" />,
      equipment: ["pH Meters", "Moisture Analyzers", "Texture Analyzers", "Color Meters", "Refractometers"]
    },
    {
      sector: "Beverage Industry",
      description: "Testing and quality assurance for beverage production",
      icon: <Coffee className="w-6 h-6 text-green-600" />,
      equipment: ["Alcohol Analyzers", "CO2 Meters", "Density Meters", "Turbidity Meters", "Titrators"]
    },
    {
      sector: "Dairy Products",
      description: "Comprehensive testing for milk and dairy products",
      icon: <TestTube className="w-6 h-6 text-green-600" />,
      equipment: ["Milk Analyzers", "Fat Testers", "Lactometers", "Protein Analyzers", "Somatic Cell Counters"]
    },
    {
      sector: "Microbiological Testing",
      description: "Food safety and contamination detection",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      equipment: ["Incubators", "Autoclaves", "Laminar Flow Hoods", "Microscopes", "ATP Meters"]
    }
  ];

  const testingParameters = [
    {
      category: "Chemical Analysis",
      icon: <TestTube className="w-6 h-6 text-blue-600" />,
      tests: ["Nutritional Content", "Additives", "Preservatives", "Pesticide Residues", "Heavy Metals", "Vitamins"]
    },
    {
      category: "Physical Properties",
      icon: <Thermometer className="w-6 h-6 text-blue-600" />,
      tests: ["Texture", "Color", "Viscosity", "Density", "Particle Size", "Water Activity"]
    },
    {
      category: "Microbiological",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      tests: ["Total Plate Count", "E. coli", "Salmonella", "Listeria", "Yeast & Mold", "Pathogens"]
    },
    {
      category: "Sensory Analysis",
      icon: <Award className="w-6 h-6 text-blue-600" />,
      tests: ["Taste Panels", "Aroma Analysis", "Appearance", "Texture Evaluation", "Consumer Testing"]
    }
  ];

  const foodSafety = [
    {
      standard: "HACCP",
      description: "Hazard Analysis and Critical Control Points",
      requirements: ["Hazard Analysis", "Critical Control Points", "Monitoring Procedures", "Corrective Actions"],
      equipment: ["Temperature Loggers", "pH Meters", "Water Activity Meters", "Thermometers"]
    },
    {
      standard: "ISO 22000",
      description: "Food Safety Management Systems",
      requirements: ["Food Safety Policy", "Hazard Control", "Communication", "Management Review"],
      equipment: ["Testing Instruments", "Calibration Standards", "Documentation Systems", "Traceability Tools"]
    },
    {
      standard: "BRC/SQF",
      description: "Global Food Safety Standards",
      requirements: ["Quality Management", "HACCP", "Factory Environment", "Product Control"],
      equipment: ["Laboratory Equipment", "Environmental Monitoring", "Rapid Test Kits", "Hygiene Monitoring"]
    }
  ];

  const applications = [
    {
      application: "Nutritional Labeling",
      description: "Accurate analysis for food labeling compliance",
      tests: ["Protein Content", "Fat Content", "Carbohydrates", "Calories", "Sodium", "Fiber"]
    },
    {
      application: "Shelf Life Studies",
      description: "Determining product stability and expiration dates",
      tests: ["Microbial Growth", "Chemical Changes", "Sensory Evaluation", "Accelerated Aging"]
    },
    {
      application: "Incoming Raw Materials",
      description: "Quality verification of ingredients and materials",
      tests: ["Identity Testing", "Purity Analysis", "Contamination Screening", "Specification Verification"]
    },
    {
      application: "Final Product Testing",
      description: "Complete quality assurance before product release",
      tests: ["Safety Parameters", "Quality Attributes", "Regulatory Compliance", "Shelf Life Validation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Food & Beverage Laboratory Solutions - Quality Control & Safety Testing - Biolegend Scientific Ltd"
        description="Professional laboratory equipment for food and beverage industry. HACCP compliant instruments for quality control, safety testing, and nutritional analysis."
        keywords="food testing equipment, beverage analysis, food safety, HACCP compliance, dairy testing, nutritional analysis"
        url="https://biolegendscientific.co.ke/industries/food-beverages"
      />
      <Header />
      
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5760878/pexels-photo-5760878.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Food laboratory testing"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-green-800/80"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/industries" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Industries
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Food & Beverages
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                  Ensuring food safety and quality with professional laboratory testing solutions
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                  alt="Food safety testing equipment"
                  className="w-full rounded-2xl shadow-elegant"
                />
                <div className="absolute -top-4 -right-4 bg-white text-green-700 p-3 rounded-xl shadow-lg">
                  <div className="text-sm font-semibold">HACCP</div>
                  <div className="text-xs">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food Sectors Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <img
                src="https://images.pexels.com/photos/6711707/pexels-photo-6711707.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                alt="Food processing facility"
                className="w-full max-w-4xl mx-auto h-48 object-cover rounded-2xl shadow-elegant mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Food & Beverage Sectors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized testing solutions for different food industry segments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {foodSectors.map((sector, index) => {
                const sectorImages = [
                  "https://images.pexels.com/photos/5760878/pexels-photo-5760878.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
                  "https://images.pexels.com/photos/6711707/pexels-photo-6711707.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
                  "https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
                  "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                ];
                return (
                  <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-green-500/20 overflow-hidden">
                    <div className="relative h-32">
                      <img
                        src={sectorImages[index]}
                        alt={sector.sector}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 right-3 bg-green-600 text-white p-2 rounded-lg">
                        {sector.icon}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                        {sector.sector}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {sector.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-green-600">Essential Equipment:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {sector.equipment.map((item, idx) => (
                            <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testing Parameters Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Food Testing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete analytical capabilities for food safety and quality assurance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testingParameters.map((param, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-blue-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {param.icon}
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {param.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {param.tests.map((test, idx) => (
                        <span key={idx} className="block bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm">
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

        {/* Food Safety Standards Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Food Safety Standards
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meeting international food safety and quality management requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {foodSafety.map((standard, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Shield className="w-6 h-6 text-orange-600" />
                      <CardTitle className="text-lg text-orange-700">
                        {standard.standard}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {standard.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-orange-600 mb-2">Key Requirements:</h4>
                      <div className="space-y-1">
                        {standard.requirements.map((req, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-orange-600 mb-2">Supporting Equipment:</h4>
                      <div className="flex flex-wrap gap-1">
                        {standard.equipment.map((equip, idx) => (
                          <span key={idx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-md text-xs">
                            {equip}
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

        {/* Applications Section */}
        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Testing Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive testing throughout the food production chain
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">
                      {app.application}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-green-600">Typical Tests:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {app.tests.map((test, idx) => (
                          <span key={idx} className="block bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs">
                            {test}
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

        {/* Call to Action */}
        <section className="bg-green-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ensure Food Safety & Quality Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our food testing specialists for HACCP-compliant laboratory solutions and training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Get Food Testing Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                HACCP Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FoodBeverages;
