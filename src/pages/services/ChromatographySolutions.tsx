import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, BarChart3, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ChromatographySolutions = () => {
  const solutions = [
    {
      name: "HPLC Columns & Accessories",
      description: "High-performance liquid chromatography columns and spare parts from leading manufacturers",
      features: ["Analytical Columns", "Preparative Columns", "Column Hardware", "Guard Columns", "HPLC Fittings"]
    },
    {
      name: "GC Columns & Accessories",
      description: "Gas chromatography columns and accessories for precise analytical separations",
      features: ["Capillary Columns", "Packed Columns", "GC Liners", "Injection Port Parts", "Detection Accessories"]
    },
    {
      name: "Sample Preparation",
      description: "Complete sample preparation solutions for chromatographic analysis",
      features: ["Sample Vials", "Caps & Septa", "Filters", "Extraction Cartridges", "Pipettes"]
    },
    {
      name: "Solid Phase Extraction (SPE)",
      description: "SPE cartridges and plates for sample cleanup and concentration",
      features: ["SPE Cartridges", "SPE Plates", "Manifolds", "Vacuum Pumps", "Elution Plates"]
    },
    {
      name: "Syringe Filters",
      description: "High-quality syringe filters for sample filtration and preparation",
      features: ["PTFE Filters", "Nylon Filters", "PVDF Filters", "Glass Fiber Filters", "Sterile Filters"]
    },
    {
      name: "Chromatography Vials & Accessories",
      description: "Complete range of vials, caps, and inserts for autosampler systems",
      features: ["Autosampler Vials", "Screw Thread Vials", "Crimp Top Vials", "Micro Inserts", "Caps & Septa"]
    }
  ];

  const techniques = [
    {
      name: "High Performance Liquid Chromatography (HPLC)",
      description: "Advanced HPLC solutions for pharmaceutical, environmental, and food analysis"
    },
    {
      name: "Gas Chromatography (GC)",
      description: "Comprehensive GC solutions for volatile compound analysis"
    },
    {
      name: "Ultra High Performance Liquid Chromatography (UHPLC)",
      description: "Next-generation UHPLC systems for faster, more efficient separations"
    },
    {
      name: "Ion Chromatography (IC)",
      description: "Specialized IC columns and systems for ion analysis"
    },
    {
      name: "Thin Layer Chromatography (TLC)",
      description: "TLC plates and accessories for qualitative analysis"
    },
    {
      name: "Column Chromatography",
      description: "Traditional column chromatography supplies for preparative separations"
    }
  ];

  const applications = [
    "Pharmaceutical Analysis",
    "Environmental Testing", 
    "Food & Beverage Quality Control",
    "Petrochemical Analysis",
    "Clinical Diagnostics",
    "Research & Development",
    "Forensic Analysis",
    "Agricultural Testing"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Chromatography Solutions - HPLC, GC Columns & Accessories | Biolegend Scientific"
        description="Complete chromatography solutions including HPLC, GC columns, sample preparation, and accessories from leading manufacturers."
        keywords="HPLC columns, GC columns, chromatography, sample preparation, SPE, syringe filters, chromatography vials"
        url="https://biolegendscientific.co.ke/services/chromatography-solutions"
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
              <span className="text-gray-700">Chromatography Solutions</span>
            </div>
          </div>
        </section>

        {/* Hero Section with Equipment Images */}
        <section className="relative bg-gradient-primary text-white py-16 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Chromatography laboratory equipment"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-primary/80"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link to="/services">
                <Button variant="ghost" className="text-white hover:bg-white/10 mr-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Button>
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-12 h-12 mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Chromatography Solutions
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Comprehensive HPLC, GC columns and accessories from all major manufacturers
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                      Request Quote
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Column Selector Tool
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                  alt="HPLC chromatography system"
                  className="w-full rounded-2xl shadow-elegant"
                />
                <div className="absolute -top-4 -right-4 bg-white text-purple-700 p-3 rounded-xl shadow-lg">
                  <div className="text-sm font-semibold">HPLC/GC</div>
                  <div className="text-xs">Expert Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                alt="Chromatography columns and equipment"
                className="w-full max-w-4xl mx-auto h-48 object-cover rounded-2xl shadow-elegant mb-8"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete range of chromatography products for all your analytical needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="h-full hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-biolegend-purple flex items-center">
                      <Filter className="w-6 h-6 mr-2" />
                      {solution.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
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

        {/* Techniques */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Chromatography Techniques
              </h2>
              <p className="text-lg text-muted-foreground">
                Supporting all major chromatographic separation techniques
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techniques.map((technique, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-semibold text-foreground mb-2">{technique.name}</h3>
                  <p className="text-muted-foreground text-sm">{technique.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications & Safety */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Applications */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Applications
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our chromatography solutions serve diverse analytical applications across multiple industries.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {applications.map((app, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-biolegend-yellow mr-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Solutions */}
              <div className="bg-biolegend-purple/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-biolegend-purple mb-4">
                  Safety Solutions
                </h3>
                <p className="text-muted-foreground mb-6">
                  Complete safety solutions for HPLC solvent management and laboratory protection.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-biolegend-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">HPLC Solvent Exhaust Systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-biolegend-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Storage Desiccators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-biolegend-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Vacuum Desiccators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-biolegend-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Automatic Desiccators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-biolegend-yellow mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Glove Boxes & Drying Cabinets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Support */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Technical Support & Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our experienced team provides comprehensive technical support for all your chromatography needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Method Development</h3>
                <p className="text-sm text-muted-foreground">Expert guidance on analytical method development</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Column Selection</h3>
                <p className="text-sm text-muted-foreground">Help choosing the right column for your application</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Troubleshooting</h3>
                <p className="text-sm text-muted-foreground">Technical support for chromatography issues</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Training</h3>
                <p className="text-sm text-muted-foreground">Comprehensive training on chromatography techniques</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-biolegend-purple text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Chromatography?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert advice on the best chromatography solutions for your laboratory
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Request Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Technical Support
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

export default ChromatographySolutions;
