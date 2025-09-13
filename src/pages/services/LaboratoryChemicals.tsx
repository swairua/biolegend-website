import { Link } from "react-router-dom";
import { ArrowLeft, FlaskConical, Beaker, Shield, Award, TestTube, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LaboratoryChemicals = () => {
  const chemicalCategories = [
    {
      category: "High-Purity Chemicals",
      description: "Ultra-pure chemicals for research and analytical applications",
      icon: <FlaskConical className="w-6 h-6 text-purple-600" />,
      products: ["ACS Reagent Grade", "Electronic Grade", "Trace Metal Grade", "Semiconductor Grade", "HPLC Grade", "Spectroscopy Grade"]
    },
    {
      category: "Buffer Solutions", 
      description: "Ready-to-use and concentrated buffer solutions",
      icon: <TestTube className="w-6 h-6 text-purple-600" />,
      products: ["pH Buffers", "Biological Buffers", "Protein Buffers", "Electrophoresis Buffers", "Western Blot Buffers", "Custom Buffers"]
    },
    {
      category: "Organic Solvents",
      description: "High-quality solvents for extraction and analysis",
      icon: <Droplets className="w-6 h-6 text-purple-600" />,
      products: ["HPLC Solvents", "GC Solvents", "Extraction Solvents", "Anhydrous Solvents", "Deuterated Solvents", "Green Solvents"]
    },
    {
      category: "Bulk Chemicals",
      description: "Large volume chemicals for production and research",
      icon: <Beaker className="w-6 h-6 text-purple-600" />,
      products: ["Industrial Chemicals", "Manufacturing Grade", "Process Chemicals", "Cleaning Chemicals", "Pilot Plant Supplies", "Custom Blends"]
    }
  ];

  const applications = [
    {
      application: "Research & Development",
      description: "High-purity chemicals for cutting-edge research",
      chemicals: ["Research Grade Chemicals", "Novel Compounds", "Synthesis Building Blocks", "Custom Chemicals"],
      benefits: ["Reproducible Results", "High Purity", "Reliable Supply", "Technical Support"]
    },
    {
      application: "Quality Control Testing",
      description: "Certified chemicals for analytical testing and QC",
      chemicals: ["Reference Standards", "Calibration Solutions", "Control Materials", "Test Reagents"],
      benefits: ["Traceable Standards", "Batch Certificates", "Stability Data", "Regulatory Compliance"]
    },
    {
      application: "Production & Manufacturing",
      description: "Bulk chemicals for large-scale production processes",
      chemicals: ["Process Chemicals", "Intermediates", "Catalysts", "Cleaning Agents"],
      benefits: ["Cost Effective", "Consistent Quality", "Reliable Delivery", "Technical Service"]
    },
    {
      application: "Environmental Testing",
      description: "Specialized chemicals for environmental analysis",
      chemicals: ["Environmental Standards", "Extraction Reagents", "Preservation Solutions", "Field Test Kits"],
      benefits: ["EPA Methods", "Certified Purity", "Method Validation", "Chain of Custody"]
    }
  ];

  const qualityFeatures = [
    {
      feature: "Analytical Certificates",
      description: "Complete analytical data for every batch",
      specifications: ["NMR Analysis", "GC/HPLC Purity", "Water Content", "Heavy Metals", "Trace Impurities"]
    },
    {
      feature: "Packaging & Storage",
      description: "Proper packaging to maintain chemical integrity",
      specifications: ["Inert Atmosphere", "Light Protection", "Temperature Control", "Moisture Barrier", "Tamper Evidence"]
    },
    {
      feature: "Regulatory Compliance",
      description: "Meeting international quality and safety standards",
      specifications: ["ISO 9001", "cGMP", "USP Standards", "Ph. Eur.", "Safety Data Sheets"]
    },
    {
      feature: "Technical Support",
      description: "Expert assistance for chemical selection and use",
      specifications: ["Application Support", "Method Development", "Troubleshooting", "Custom Solutions", "Training"]
    }
  ];

  const suppliers = [
    { name: "Merck/Sigma-Aldrich", specialty: "Research Chemicals & Life Sciences", grade: "Highest Purity" },
    { name: "Fisher Scientific", specialty: "Laboratory Chemicals & Reagents", grade: "Certified Grade" },
    { name: "Loba Chemie", specialty: "Analytical Reagents & Standards", grade: "AR/LR Grade" },
    { name: "Reagecon", specialty: "Reference Standards & Buffers", grade: "Traceable Standards" },
    { name: "Carlo Erba", specialty: "Analytical Chemicals", grade: "Premium Quality" },
    { name: "Honeywell", specialty: "Electronic & Specialty Chemicals", grade: "Ultra-Pure" }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Laboratory Chemicals & Reagents - High-Purity Chemicals - Biolegend Scientific Ltd"
        description="Premium laboratory chemicals, reagents, buffer solutions, and organic solvents from leading manufacturers. High-purity chemicals for R&D, QC, and production."
        keywords="laboratory chemicals, reagents, buffer solutions, organic solvents, high-purity chemicals, research chemicals, analytical grade"
        url="https://biolegendscientific.co.ke/services/laboratory-chemicals"
      />
      <Header />
      
      <main>
        {/* Loba Chemie Highlight */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-emerald-50 border-2 border-emerald-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:max-w-3xl">
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">Loba Chemie Laboratory Chemicals</h3>
                <p className="text-emerald-800 mb-3">High-quality analytical reagents, indicators and solvents for research and QC.</p>
                <div className="text-sm text-emerald-900">Analytical Reagents • Indicators • Solvents</div>
              </div>
              <a href="/loba-chemie" className="mt-4 md:mt-0 inline-flex items-center bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-emerald-700">Explore Loba Chemie <ChevronRight className="w-4 h-4 ml-2"/></a>
            </div>
          </div>
        </section>

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
                Laboratory Chemicals & Reagents
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                High-purity chemicals, reagents, buffer solutions, and bulk chemicals for R&D, QC, and production
              </p>
            </div>
          </div>
        </section>

        {/* Laboratory Chemicals Supplier Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/4031321/pexels-photo-4031321.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Laboratory chemicals and reagents suppliers - Scientists working with high-purity chemicals and analytical reagents for research"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-purple-500/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Premium Laboratory Chemicals</h3>
                <p className="text-sm text-gray-600">High-purity reagents from leading suppliers</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Merck</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Fisher Scientific</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Loba Chemie</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chemical Categories Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Chemical Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of laboratory chemicals for all applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {chemicalCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {category.icon}
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                        {category.category}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-purple-600">Product Types:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.products.map((product, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs">
                            {product}
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
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Chemical Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized chemicals for diverse laboratory and industrial applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700">
                      {app.application}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Chemical Types:</h4>
                      <div className="space-y-1">
                        {app.chemicals.map((chemical, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {chemical}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {app.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs">
                            {benefit}
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

        {/* Quality Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality Assurance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive quality control for reliable laboratory chemicals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-700">
                      {feature.feature}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.specifications.map((spec, idx) => (
                        <span key={idx} className="block bg-purple-50 text-purple-700 px-2 py-1 rounded-md text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Suppliers Section */}
        <section className="py-20 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Global Chemical Suppliers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium chemicals from world-leading manufacturers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {suppliers.map((supplier, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-700">
                      {supplier.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {supplier.specialty}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-md text-sm font-medium">
                      {supplier.grade}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Source Premium Laboratory Chemicals
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our chemical specialists for product recommendations and bulk chemical solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Request Chemical Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Chemical Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LaboratoryChemicals;
