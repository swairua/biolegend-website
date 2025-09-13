import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Microscope, Thermometer, Scale, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LaboratoryInstruments = () => {
  const categories = [
    {
      name: "Analytical Balances & Weighing",
      description: "Precision weighing equipment from analytical to industrial scales",
      icon: <Scale className="w-8 h-8 text-biolegend-purple" />,
      features: ["Analytical Balances", "Precision Balances", "Moisture Balances", "Industrial Scales", "Weighing Accessories"]
    },
    {
      name: "Microscopy & Imaging",
      description: "Advanced microscopy solutions for research and quality control",
      icon: <Microscope className="w-8 h-8 text-biolegend-purple" />,
      features: ["Biological Microscopes", "Stereo Microscopes", "Digital Cameras", "Microscope Accessories", "Imaging Software"]
    },
    {
      name: "Heating & Temperature Control",
      description: "Precise temperature control equipment for laboratory applications",
      icon: <Thermometer className="w-8 h-8 text-biolegend-purple" />,
      features: ["Hot Plates", "Incubators", "Ovens", "Water Baths", "Chillers & Circulators"]
    },
    {
      name: "Separation & Centrifugation",
      description: "Centrifuges and separation equipment for sample processing",
      icon: <Zap className="w-8 h-8 text-biolegend-purple" />,
      features: ["Benchtop Centrifuges", "Floor Standing Centrifuges", "Microcentrifuges", "Ultracentrifuges", "Rotors & Accessories"]
    }
  ];

  const instruments = [
    {
      category: "Gas & Nitrogen Generators",
      items: ["Nitrogen Generators", "Hydrogen Generators", "Zero Air Generators", "Liquid Nitrogen Generators"]
    },
    {
      category: "Sample Preparation",
      items: ["Rotary Evaporators", "Vacuum Pumps", "Homogenizers", "Freeze Dryers", "Sample Concentrators"]
    },
    {
      category: "Mixing & Stirring",
      items: ["Magnetic Stirrers", "Overhead Stirrers", "Vortex Mixers", "Shakers", "Magnetic Stirring Bars"]
    },
    {
      category: "pH & Electrochemistry",
      items: ["pH Meters", "Conductivity Meters", "Ion Meters", "Electrodes", "Calibration Solutions"]
    },
    {
      category: "Spectroscopy",
      items: ["UV-Vis Spectrophotometers", "Flame Photometers", "Refractometers", "Polarimeters", "Colorimeters"]
    },
    {
      category: "Autoclaves & Sterilization",
      items: ["Benchtop Autoclaves", "Floor Standing Autoclaves", "Steam Sterilizers", "Autoclave Accessories", "Validation Equipment"]
    }
  ];

  const applications = [
    "Quality Control Testing",
    "Research & Development", 
    "Environmental Analysis",
    "Food Safety Testing",
    "Pharmaceutical Analysis",
    "Clinical Diagnostics",
    "Materials Testing",
    "Educational Laboratories"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Laboratory Instruments & Equipment | Biolegend Scientific"
        description="Complete range of laboratory instruments including balances, microscopes, heating equipment, centrifuges, and analytical instruments."
        keywords="laboratory instruments, analytical balances, microscopes, centrifuges, laboratory equipment, scientific instruments"
        url="https://biolegendscientific.co.ke/services/laboratory-instruments"
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
              <span className="text-gray-700">Laboratory Instruments & Equipment</span>
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
                <Microscope className="w-12 h-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Laboratory Instruments & Equipment
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Precision instruments and equipment for analytical, research, and quality control laboratories
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Equipment Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Categories */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Main Equipment Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of laboratory instruments from leading global manufacturers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="h-full hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-biolegend-purple flex items-center">
                      {category.icon}
                      <span className="ml-3">{category.name}</span>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
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

        {/* Detailed Instruments */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Detailed Instrument Categories
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive range of laboratory instruments and equipment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instruments.map((instrument, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-semibold text-biolegend-purple mb-4 text-lg">{instrument.category}</h3>
                  <ul className="space-y-2">
                    {instrument.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-biolegend-yellow flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Choose Our Instruments?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Precision & Accuracy</h3>
                      <p className="text-muted-foreground">High-precision instruments from renowned manufacturers ensuring reliable and accurate results</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Technical Support</h3>
                      <p className="text-muted-foreground">Comprehensive technical support, installation, and training services</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quality Assurance</h3>
                      <p className="text-muted-foreground">All instruments undergo rigorous quality checks and calibration before delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Service & Maintenance</h3>
                      <p className="text-muted-foreground">Ongoing service contracts and maintenance support to ensure optimal performance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-biolegend-purple/5 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-biolegend-purple mb-4">Applications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {applications.map((app, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-biolegend-yellow mr-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-biolegend-yellow/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-biolegend-purple mb-4">Installation & Training</h3>
                  <p className="text-muted-foreground mb-4">
                    Our experienced technicians provide complete installation and comprehensive training on all equipment.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-biolegend-yellow mr-2" />
                      On-site installation
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-biolegend-yellow mr-2" />
                      Operator training
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-biolegend-yellow mr-2" />
                      Method development support
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-biolegend-yellow mr-2" />
                      Ongoing technical support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands & Partners */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Trusted Brands & Partners
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              We partner with leading global manufacturers to provide you with the highest quality instruments
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "LabTech", "Lauda", "Fisher Scientific", "Bohlender", "Ecosafe", 
                "Kirsch", "Witeg", "Phoenix Instrument", "Testo", "Water-I.D."
              ].map((brand, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border text-center">
                  <span className="font-medium text-biolegend-purple">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-biolegend-purple text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Selecting the Right Equipment?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our technical experts can help you choose the perfect instruments for your laboratory needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Consult Our Experts
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Demonstration
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LaboratoryInstruments;
