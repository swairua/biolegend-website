import { Link } from "react-router-dom";
import { ArrowRight, Beaker, BarChart3, TestTube, Microscope, FlaskConical, Shield, Dna, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesUpdated = () => {
  const mainServices = [
    {
      name: "Chemical Reference Standards",
      description: "USP, BP & EP reference standards, CRM, impurities, and working standards for pharmaceutical and analytical testing",
      icon: <Beaker className="w-8 h-8 text-biolegend-purple" />,
      slug: "chemical-reference-standards",
      features: ["USP/BP/EP Standards", "Certified Reference Materials", "Impurity Standards", "Working Standards"]
    },
    {
      name: "Chromatography Solutions",
      description: "Complete HPLC, GC columns and accessories, sample preparation, and chromatography safety solutions",
      icon: <BarChart3 className="w-8 h-8 text-biolegend-purple" />,
      slug: "chromatography-solutions",
      features: ["HPLC/GC Columns", "Sample Preparation", "SPE Solutions", "Safety Systems"]
    },
    {
      name: "Laboratory Instruments & Equipment",
      description: "Precision instruments including balances, microscopes, heating equipment, and analytical instruments",
      icon: <Microscope className="w-8 h-8 text-biolegend-purple" />,
      slug: "laboratory-instruments",
      features: ["Analytical Balances", "Microscopes", "Heating Equipment", "Centrifuges"]
    },
    {
      name: "Life Sciences Products",
      description: "Cell culture, molecular biology, microbiology, and biotechnology products for research and diagnostics",
      icon: <Dna className="w-8 h-8 text-biolegend-purple" />,
      slug: "life-sciences-products",
      features: ["Cell Culture", "Molecular Biology", "PCR/ELISA Kits", "Antibodies"]
    },
    {
      name: "Laboratory Chemicals & Reagents",
      description: "High-purity chemicals, reagents, buffer solutions, and bulk chemicals for R&D, QC, and production",
      icon: <FlaskConical className="w-8 h-8 text-biolegend-purple" />,
      slug: "laboratory-chemicals",
      features: ["High-Purity Chemicals", "Buffer Solutions", "Bulk Chemicals", "Organic Solvents"]
    },
    {
      name: "Diagnostic & Medical Solutions",
      description: "IVD kits, medical equipment, analyzers, and diagnostic reagents for clinical laboratories",
      icon: <Stethoscope className="w-8 h-8 text-biolegend-purple" />,
      slug: "diagnostic-medical",
      features: ["IVD Kits", "Clinical Analyzers", "Medical Equipment", "Diagnostic Reagents"]
    },
    {
      name: "Laboratory Glassware & Consumables",
      description: "General and volumetric labware, liquid handling tools, bottles, containers, and sample collection instruments",
      icon: <TestTube className="w-8 h-8 text-biolegend-purple" />,
      slug: "glassware-consumables",
      features: ["Volumetric Glassware", "Sample Containers", "Liquid Handling", "Lab Consumables"]
    },
    {
      name: "Safety Products & Solutions",
      description: "Laboratory safety equipment, protective wear, safety cabinets, and risk management solutions",
      icon: <Shield className="w-8 h-8 text-biolegend-purple" />,
      slug: "safety-solutions",
      features: ["Safety Cabinets", "PPE Equipment", "Fume Hoods", "Emergency Equipment"]
    }
  ];

  const specializedServices = [
    {
      name: "Reference Listed Drug (RLD) Supply",
      description: "Comprehensive solutions for pharmaceutical reference listed drugs from UK, Europe, Australia, and USA"
    },
    {
      name: "Custom Standards & CRM",
      description: "Custom reference materials and certified standards for specific analytical applications"
    },
    {
      name: "Method Development Support",
      description: "Technical consultation for analytical method development and validation"
    },
    {
      name: "Equipment Installation & Training",
      description: "Professional installation, calibration, and comprehensive operator training"
    },
    {
      name: "Maintenance & Support",
      description: "Ongoing technical support, maintenance contracts, and spare parts supply"
    },
    {
      name: "Regulatory Compliance Assistance",
      description: "Support for meeting FDA, EMA, and other regulatory requirements"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Laboratory Products & Scientific Services - Complete Solutions | Biolegend Scientific Ltd"
        description="Comprehensive laboratory products and services including reference standards, chromatography, instruments, life sciences, chemicals, and safety solutions. One-stop laboratory supplier."
        keywords="laboratory products, scientific services, reference standards, chromatography, laboratory instruments, life sciences, laboratory chemicals, safety solutions"
        url="https://biolegendscientific.co.ke/services"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Products & Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                One-stop solution for all your laboratory, diagnostic and life sciences products
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        {/* Value Proposition */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                "You just name the product, we will deliver it to you the best to make your laboratory life easy"
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Augmenting your laboratory efficiency with comprehensive solutions from trusted global partners
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Complete Solutions</h3>
                <p className="text-muted-foreground">One-stop solution for all laboratory and life sciences products</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">Products from leading global manufacturers with quality guarantees</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Quick response times and efficient delivery of products</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Main Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of laboratory products from leading global manufacturers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mainServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-biolegend-purple/20 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {service.icon}
                      <CardTitle className="text-lg group-hover:text-biolegend-purple transition-colors">
                        {service.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-1 mb-4 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <ArrowRight className="w-3 h-3 mr-1 text-biolegend-yellow flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${service.slug}`}>
                      <Button className="w-full group-hover:bg-biolegend-purple group-hover:text-white transition-colors text-sm">
                        Learn More
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Specialized Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional services to support your laboratory operations and ensure success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-biolegend-purple">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Industries We Work For
              </h2>
              <p className="text-lg text-muted-foreground">
                Serving diverse sectors with specialized laboratory solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Pharmaceutical & Biopharmaceutical",
                "Research Institutions & Universities", 
                "Hospitals & Diagnostic Laboratories",
                "3rd Party Testing Laboratories",
                "Food & Agrochemical Industry",
                "Water & Environmental Sector",
                "Herbal & Animal Health",
                "Textile & Cosmetics Industry"
              ].map((industry, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow">
                  <ArrowRight className="w-6 h-6 text-biolegend-yellow mx-auto mb-2" />
                  <span className="text-sm font-medium text-foreground">{industry}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/industries">
                <Button className="bg-biolegend-purple hover:bg-biolegend-purple/90">
                  View All Industries
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Commitment to Excellence
                </h2>
                <p className="text-muted-foreground mb-6">
                  We are guided by the principle of "Service with Care and Integrity" and are passionate about 
                  delivering exceptional laboratory solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quick Response & Support</h3>
                      <p className="text-muted-foreground">Ensuring quick responses and faster customer support</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Consistent & Dependable</h3>
                      <p className="text-muted-foreground">Delivering consistent, fast, and dependable solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Ethical Business Practices</h3>
                      <p className="text-muted-foreground">Upholding transparency, fairness and ethical business practices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Exceeding Expectations</h3>
                      <p className="text-muted-foreground">Dedicated to fulfilling promises and exceeding expectations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-primary p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-biolegend-yellow" />
                    <span>Integrity</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-biolegend-yellow" />
                    <span>Quality and Reliability</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-biolegend-yellow" />
                    <span>Service First</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-biolegend-yellow" />
                    <span>Transparency</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-3 text-biolegend-yellow" />
                    <span>Innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-biolegend-purple text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Laboratory?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our experts to find the perfect products and solutions for your laboratory needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Get Expert Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Request Product Catalog
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesUpdated;
