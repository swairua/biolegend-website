import { Link } from "react-router-dom";
import { ArrowLeft, Beaker, Shield, Award, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ChemicalsReagents = () => {
  const suppliers = [
    {
      name: "Loba Chemie",
      description: "High-quality laboratory chemicals and reagents from India",
      specialties: ["Analytical Reagents", "Indicators", "Solvents", "Laboratory Chemicals"],
      grade: "AR/LR Grade"
    },
    {
      name: "Merck Millipore",
      description: "Global leader in life science chemicals and materials",
      specialties: ["HPLC Solvents", "Cell Culture", "Molecular Biology", "Analytical Standards"],
      grade: "Suprapur/ACS"
    },
    {
      name: "Fisher Scientific",
      description: "Comprehensive range of chemicals for research and analysis",
      specialties: ["Organic Chemicals", "Inorganic Salts", "Buffer Solutions", "Reference Materials"],
      grade: "Certified Grade"
    },
    {
      name: "Reagecon",
      description: "Specialist manufacturer of analytical reference standards",
      specialties: ["pH Buffers", "Conductivity Standards", "Ion Standards", "Titrants"],
      grade: "Traceable Standards"
    },
    {
      name: "Sigma-Aldrich",
      description: "Leading supplier of research chemicals and biochemicals",
      specialties: ["Biochemicals", "Fine Chemicals", "Custom Synthesis", "Research Materials"],
      grade: "Research Grade"
    }
  ];

  const categories = [
    {
      title: "Analytical Reagents",
      icon: <Beaker className="w-6 h-6 text-purple-600" />,
      products: ["Indicators", "Buffer Solutions", "Titrants", "Standard Solutions", "pH Buffers", "Complexometric Reagents"]
    },
    {
      title: "Laboratory Solvents",
      icon: <Award className="w-6 h-6 text-purple-600" />,
      products: ["HPLC Solvents", "Spectroscopy Solvents", "Extraction Solvents", "Cleaning Solvents", "Chromatography Solvents"]
    },
    {
      title: "Inorganic Chemicals",
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      products: ["Acids", "Bases", "Salts", "Oxides", "Metal Compounds", "Minerals"]
    },
    {
      title: "Organic Chemicals",
      icon: <Truck className="w-6 h-6 text-purple-600" />,
      products: ["Fine Chemicals", "Intermediates", "Reagents", "Building Blocks", "Catalysts", "Polymers"]
    }
  ];

  const applications = [
    {
      sector: "Analytical Chemistry",
      description: "High-purity chemicals for accurate analysis and testing",
      chemicals: ["Reference Standards", "Calibration Solutions", "Analytical Reagents", "Spectroscopy Materials"]
    },
    {
      sector: "Research & Development",
      description: "Specialized chemicals for scientific research",
      chemicals: ["Research Chemicals", "Custom Compounds", "Rare Materials", "High-Purity Reagents"]
    },
    {
      sector: "Quality Control",
      description: "Certified materials for QC testing and validation",
      chemicals: ["Control Standards", "Validation Materials", "Certified References", "Test Solutions"]
    },
    {
      sector: "Environmental Testing",
      description: "Chemicals for environmental monitoring and analysis",
      chemicals: ["Water Standards", "Soil Extractants", "Environmental References", "Monitoring Solutions"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Laboratory Chemicals & Reagents - Merck, Sigma, Loba Chemie - Biolegend Scientific Ltd"
        description="High-quality laboratory chemicals and reagents from leading suppliers including Merck Millipore, Sigma-Aldrich, Loba Chemie, Fisher Scientific, and Reagecon."
        keywords="laboratory chemicals, reagents, Merck, Sigma-Aldrich, Loba Chemie, Fisher Scientific, Reagecon, analytical chemicals"
        url="https://biolegendscientific.co.ke/services/chemicals-reagents"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Chemicals & Reagents
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                High-quality laboratory chemicals from world-leading suppliers
              </p>
            </div>
          </div>
        </section>

        {/* Chemicals Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/9243577/pexels-photo-9243577.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                alt="Laboratory chemicals and reagents with protective equipment"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-purple-500/20"></div>
            </div>
          </div>
        </section>

        {/* Suppliers Section */}
        <section className="py-20 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted Chemical Suppliers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium chemicals and reagents from globally recognized manufacturers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {suppliers.map((supplier, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                        {supplier.name}
                      </CardTitle>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs font-medium">
                        {supplier.grade}
                      </span>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {supplier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-purple-600">Specialties:</h4>
                      <div className="space-y-1">
                        {supplier.specialties.map((specialty, idx) => (
                          <span key={idx} className="block bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-sm">
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

        {/* Categories Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Chemical Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of chemicals for all laboratory applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {category.icon}
                      <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.products.map((product, idx) => (
                        <span key={idx} className="block bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-sm">
                          {product}
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
                Applications & Industries
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized chemicals for diverse laboratory applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700">
                      {app.sector}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-purple-600">Key Products:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {app.chemicals.map((chemical, idx) => (
                          <span key={idx} className="block bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs">
                            {chemical}
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
        <section className="py-20 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Chemical Solutions?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Certified chemicals meeting international standards and specifications</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliable Supply</h3>
                <p className="text-muted-foreground">Consistent availability and timely delivery of chemical products</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-muted-foreground">Proper handling, storage, and safety documentation for all chemicals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Source Quality Chemicals for Your Laboratory
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our chemical specialists for product recommendations and bulk ordering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Request Chemical Quote
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

export default ChemicalsReagents;
