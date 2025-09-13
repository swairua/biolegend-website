import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Microscope, Beaker, Sprout } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PlantTissueCulture = () => {
  const applications = [
    {
      title: "Micropropagation",
      description: "Rapid multiplication of disease-free plants",
      icon: <Sprout className="w-6 h-6 text-green-600" />,
      benefits: ["Disease-free plants", "Rapid multiplication", "Year-round production", "Genetic uniformity"]
    },
    {
      title: "Plant Breeding",
      description: "Development of new plant varieties and hybrids",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      benefits: ["Genetic improvement", "Faster breeding cycles", "Enhanced traits", "Research applications"]
    },
    {
      title: "Conservation",
      description: "Preservation of rare and endangered plant species",
      icon: <Microscope className="w-6 h-6 text-green-600" />,
      benefits: ["Species preservation", "Genetic storage", "Research material", "Future restoration"]
    },
    {
      title: "Research & Development",
      description: "Advanced plant research and biotechnology",
      icon: <Beaker className="w-6 h-6 text-green-600" />,
      benefits: ["Scientific research", "Biotechnology", "Secondary metabolites", "Genetic studies"]
    }
  ];

  const products = [
    {
      category: "Culture Media",
      items: ["MS Medium", "B5 Medium", "WPM Medium", "Custom Media Preparations"]
    },
    {
      category: "Growth Regulators",
      items: ["Auxins (IAA, IBA, NAA)", "Cytokinins (BAP, Kinetin)", "Gibberellins", "Growth Inhibitors"]
    },
    {
      category: "Laboratory Equipment",
      items: ["Laminar Flow Hoods", "Autoclaves", "Growth Chambers", "pH Meters", "Microscopes"]
    },
    {
      category: "Consumables",
      items: ["Culture Vessels", "Petri Dishes", "Pipettes", "Filters", "Agar"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Plant Tissue Culture - Duchefa Biochemie - Biolegend Scientific Ltd"
        description="Complete plant tissue culture solutions from Duchefa Biochemie. Media, growth regulators, equipment and consumables for micropropagation and plant research."
        keywords="plant tissue culture, Duchefa Biochemie, micropropagation, plant breeding, culture media, growth regulators"
        url="https://biolegendscientific.co.ke/services/plant-tissue-culture"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Plant Tissue Culture
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Advanced plant biotechnology solutions with Duchefa Biochemie products
              </p>
            </div>
          </div>
        </section>

        {/* Plant Tissue Culture Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/8851084/pexels-photo-8851084.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                alt="Plant tissue culture laboratory with test tubes and micropropagation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-green-500/20"></div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Duchefa Biochemie Partnership
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leading provider of plant tissue culture media, chemicals, and specialized products for plant biotechnology
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-elegant p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">About Duchefa Biochemie</h3>
                  <p className="text-muted-foreground mb-4">
                    Duchefa Biochemie is a specialized manufacturer of plant tissue culture media and chemicals, 
                    providing high-quality products for plant micropropagation, research, and biotechnology applications.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• High-quality culture media formulations</li>
                    <li>• Sterile and ready-to-use products</li>
                    <li>• Custom media preparation services</li>
                    <li>• Technical support and training</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Product Categories</h4>
                  <div className="space-y-2">
                    <span className="block bg-green-200 text-green-800 px-3 py-1 rounded-md text-sm">Culture Media</span>
                    <span className="block bg-green-200 text-green-800 px-3 py-1 rounded-md text-sm">Growth Regulators</span>
                    <span className="block bg-green-200 text-green-800 px-3 py-1 rounded-md text-sm">Vitamins & Supplements</span>
                    <span className="block bg-green-200 text-green-800 px-3 py-1 rounded-md text-sm">Specialized Chemicals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Plant Tissue Culture Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Diverse applications for agriculture, research, and conservation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-green-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {app.icon}
                      <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                        {app.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground text-sm">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-green-600">Benefits:</h4>
                      <div className="space-y-1">
                        {app.benefits.map((benefit, idx) => (
                          <span key={idx} className="block text-xs text-muted-foreground">
                            • {benefit}
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

        {/* Products Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Product Range
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need for successful plant tissue culture operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700">
                      {product.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {product.items.map((item, idx) => (
                        <span key={idx} className="block bg-green-50 text-green-700 px-2 py-1 rounded-md text-sm">
                          {item}
                        </span>
                      ))}
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
              Start Your Plant Tissue Culture Project
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert advice on setting up your plant tissue culture laboratory with Duchefa Biochemie products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Get Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Product Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlantTissueCulture;
