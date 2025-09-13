import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Beaker, FlaskConical } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ChemicalReferenceStandards = () => {
  const standards = [
    {
      name: "USP Reference Standards",
      description: "United States Pharmacopeia certified reference materials for pharmaceutical testing",
      features: ["USP Monograph Standards", "Compendial Reference Standards", "Primary Standards", "Working Standards"]
    },
    {
      name: "BP Reference Standards", 
      description: "British Pharmacopoeia reference materials for European compliance",
      features: ["BP Monograph Standards", "European Pharmacopoeia", "Pharmaceutical Testing", "Quality Control"]
    },
    {
      name: "EP Reference Standards",
      description: "European Pharmacopoeia standards for regulatory compliance",
      features: ["EP Certified Materials", "European Compliance", "Pharmaceutical Analysis", "Method Validation"]
    },
    {
      name: "Certified Reference Materials (CRM)",
      description: "Traceable reference materials with certified values for analytical testing",
      features: ["ISO/IEC 17025 Certified", "Traceability Documentation", "Uncertainty Values", "Certificate of Analysis"]
    },
    {
      name: "Impurity Standards",
      description: "Pharmaceutical impurity reference standards for method development and validation",
      features: ["API Impurities", "Degradation Products", "Process Impurities", "Genotoxic Impurities"]
    },
    {
      name: "Working Standards",
      description: "Secondary reference materials for routine analytical testing",
      features: ["Cost-Effective Solutions", "Routine Testing", "Quality Assurance", "Method Transfer"]
    }
  ];

  const suppliers = [
    "USP (United States Pharmacopeia)",
    "British Pharmacopoeia",
    "European Pharmacopoeia", 
    "TRC Canada",
    "LGC Standards",
    "Merck Reference Standards",
    "EDQM Council of Europe"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Chemical Reference Standards - USP, BP, EP & CRM | Biolegend Scientific"
        description="Certified chemical reference standards including USP, BP, EP, and CRM materials. Primary and working standards for pharmaceutical and analytical testing."
        keywords="USP reference standards, BP standards, EP standards, CRM, certified reference materials, pharmaceutical standards, impurity standards"
        url="https://biolegendscientific.co.ke/services/chemical-reference-standards"
      />
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-biolegend-purple hover:underline">Home</Link>
              <span className="text-gray-500">/</span>
              <Link to="/services" className="text-biolegend-purple hover:underline">Services</Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-700">Chemical Reference Standards</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link to="/services">
                <Button variant="ghost" className="text-white hover:bg-white/10 mr-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Button>
              </Link>
            </div>
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <FlaskConical className="w-12 h-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Chemical Reference Standards
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                USP, BP & EP Reference Standards, CRM, and Working Standards for pharmaceutical and analytical testing
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                    Request Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Download Catalog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Categories */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Reference Standards Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of certified reference materials for pharmaceutical and analytical applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standards.map((standard, index) => (
                <Card key={index} className="h-full hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-biolegend-purple flex items-center">
                      <Beaker className="w-6 h-6 mr-2" />
                      {standard.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {standard.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {standard.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-biolegend-yellow flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Suppliers */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Trusted Suppliers & Partners
              </h2>
              <p className="text-lg text-muted-foreground">
                We source reference standards from globally recognized organizations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suppliers.map((supplier, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <CheckCircle className="w-8 h-8 text-biolegend-yellow mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{supplier}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Applications & Uses
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Pharmaceutical Testing</h3>
                      <p className="text-muted-foreground">API analysis, impurity testing, and method validation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quality Control</h3>
                      <p className="text-muted-foreground">Routine testing and quality assurance procedures</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Method Development</h3>
                      <p className="text-muted-foreground">Analytical method development and validation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Regulatory Compliance</h3>
                      <p className="text-muted-foreground">Meeting FDA, EMA, and other regulatory requirements</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-primary p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Need Custom Standards?</h3>
                <p className="mb-6">
                  Our technical team can help you source specific reference standards or 
                  provide guidance on the right materials for your analytical needs.
                </p>
                <Link to="/contact">
                  <Button className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                    Contact Our Experts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-biolegend-purple text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Order Reference Standards?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get competitive pricing and fast delivery on all reference standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Request Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Technical Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChemicalReferenceStandards;
