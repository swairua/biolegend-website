import { Link } from "react-router-dom";
import { ArrowLeft, Milk, TestTube, BarChart3, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DairyTesting = () => {
  const testingParameters = [
    {
      category: "Chemical Analysis",
      icon: <TestTube className="w-6 h-6 text-blue-600" />,
      tests: ["Fat Content", "Protein Content", "Lactose", "Solid Non-Fat (SNF)", "pH Value", "Acidity"]
    },
    {
      category: "Physical Properties",
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      tests: ["Density", "Freezing Point", "Conductivity", "Viscosity", "Color", "Flavor"]
    },
    {
      category: "Microbiological Testing",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      tests: ["Total Bacterial Count", "Somatic Cell Count", "Pathogen Detection", "Yeast & Mold", "Antibiotic Residues"]
    },
    {
      category: "Adulteration Detection",
      icon: <Milk className="w-6 h-6 text-blue-600" />,
      tests: ["Water Addition", "Starch", "Urea", "Detergent", "Hydrogen Peroxide", "Neutralizers"]
    }
  ];

  const instruments = [
    {
      name: "Milk Analyzer",
      description: "Comprehensive analysis of milk composition",
      parameters: ["Fat", "Protein", "Lactose", "SNF", "Density", "pH"]
    },
    {
      name: "Butyrometer Set",
      description: "Traditional fat content measurement using Gerber method",
      parameters: ["Fat percentage", "Butterfat content", "Cream analysis"]
    },
    {
      name: "Lactometer",
      description: "Specific gravity measurement for milk purity",
      parameters: ["Specific gravity", "Water adulteration", "Milk purity"]
    },
    {
      name: "pH Meter",
      description: "Acidity and pH measurement for quality control",
      parameters: ["pH value", "Acidity levels", "Quality assessment"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Dairy Testing Equipment - Gerber Instruments - Biolegend Scientific Ltd"
        description="Professional dairy testing equipment from Gerber Instruments. Complete solutions for milk analysis, fat content testing, and dairy quality control."
        keywords="dairy testing, Gerber instruments, milk analysis, fat content, dairy quality control, butyrometer, lactometer"
        url="https://biolegendscientific.co.ke/services/dairy-testing"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Dairy Testing & Equipment
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Professional dairy analysis equipment from Gerber Instruments for quality assurance
              </p>
            </div>
          </div>
        </section>

        {/* Dairy Testing Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/5760878/pexels-photo-5760878.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                alt="Dairy testing laboratory with professional equipment and analysis"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-blue-500/20"></div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Gerber Instruments Partnership
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted manufacturer of precision dairy testing instruments with over 140 years of experience
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-elegant p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">About Gerber Instruments</h3>
                  <p className="text-muted-foreground mb-4">
                    Gerber Instruments has been a leading manufacturer of dairy testing equipment since 1881. 
                    Their precision instruments are used worldwide for accurate analysis of milk and dairy products.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Over 140 years of experience</li>
                    <li>• Precision-engineered instruments</li>
                    <li>• International quality standards</li>
                    <li>• Comprehensive technical support</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Key Product Lines</h4>
                  <div className="space-y-2">
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">Butyrometers & Accessories</span>
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">Lactometers</span>
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">Centrifuges</span>
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">Testing Reagents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Parameters Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Dairy Testing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete analysis for quality control and regulatory compliance
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

        {/* Instruments Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dairy Testing Instruments
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional equipment for accurate and reliable dairy analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {instruments.map((instrument, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700">
                      {instrument.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {instrument.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-blue-600">Measures:</h4>
                      {instrument.parameters.map((param, idx) => (
                        <span key={idx} className="block text-xs text-muted-foreground">
                          • {param}
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
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Dairy Testing Solutions?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Precision & Accuracy</h3>
                <p className="text-muted-foreground">Reliable results for quality control and regulatory compliance</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Operation</h3>
                <p className="text-muted-foreground">User-friendly instruments suitable for routine laboratory use</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Support</h3>
                <p className="text-muted-foreground">Training, calibration, and ongoing technical assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ensure Dairy Quality with Professional Testing
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our dairy testing specialists for equipment recommendations and setup assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Testing Equipment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Training
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DairyTesting;
