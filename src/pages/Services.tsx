import { Link } from "react-router-dom";
import { ArrowRight, Beaker, Microscope, TestTube, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      name: "Lab Companion",
      description: "Complete laboratory solutions and equipment for all your research needs",
      icon: <Beaker className="w-8 h-8 text-biolegend-purple" />,
      slug: "lab-companion"
    },
    {
      name: "Palintest Water Testing Kits",
      description: "Professional water quality testing solutions for accurate analysis",
      icon: <TestTube className="w-8 h-8 text-biolegend-purple" />,
      slug: "palintest-water-testing"
    },
    {
      name: "Indigo Instruments", 
      description: "Advanced scientific instruments for precise measurements",
      icon: <Microscope className="w-8 h-8 text-biolegend-purple" />,
      slug: "indigo-instruments"
    },
    {
      name: "Lovibond Tintometer",
      description: "Color measurement and water analysis instruments",
      icon: <BarChart3 className="w-8 h-8 text-biolegend-purple" />,
      slug: "lovibond-tintometer"
    },
    {
      name: "Wagtech Potatech",
      description: "Portable water testing technology for field applications",
      icon: <TestTube className="w-8 h-8 text-biolegend-purple" />,
      slug: "wagtech-potatech"
    },
    {
      name: "Reagecon",
      description: "Reference standards and calibration solutions",
      icon: <Beaker className="w-8 h-8 text-biolegend-purple" />,
      slug: "reagecon"
    },
    {
      name: "Hannah Instruments",
      description: "Analytical instrumentation for laboratory and field testing",
      icon: <Microscope className="w-8 h-8 text-biolegend-purple" />,
      slug: "hannah-instruments"
    },
    {
      name: "Gerber Instruments",
      description: "Precision instruments for food and dairy analysis",
      icon: <BarChart3 className="w-8 h-8 text-biolegend-purple" />,
      slug: "gerber-instruments"
    },
    {
      name: "Neogene Instruments",
      description: "Advanced laboratory equipment and scientific solutions",
      icon: <Beaker className="w-8 h-8 text-biolegend-purple" />,
      slug: "neogene-instruments"
    },
    {
      name: "Haver and Boecker",
      description: "Particle analysis and size measurement solutions",
      icon: <TestTube className="w-8 h-8 text-biolegend-purple" />,
      slug: "haver-boecker"
    },
    {
      name: "Chemlab",
      description: "Quality laboratory chemicals and reagents",
      icon: <Microscope className="w-8 h-8 text-biolegend-purple" />,
      slug: "chemlab"
    },
    {
      name: "Delagua",
      description: "Water quality testing and environmental monitoring",
      icon: <BarChart3 className="w-8 h-8 text-biolegend-purple" />,
      slug: "delagua"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Laboratory Equipment & Scientific Services - Biolegend Scientific Ltd"
        description="Comprehensive laboratory equipment and scientific services including water testing, analytical instruments, and quality chemicals. Professional solutions for education, health, and industry."
        keywords="laboratory equipment, scientific services, water testing, analytical instruments, chemicals, reagents, Kenya laboratory supplies"
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
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Comprehensive laboratory solutions from trusted global brands
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Laboratory Equipment & Instruments
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional-grade equipment from leading manufacturers worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-biolegend-purple/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {service.icon}
                      <CardTitle className="text-xl group-hover:text-biolegend-purple transition-colors">
                        {service.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/services/${service.slug}`}>
                      <Button className="w-full group-hover:bg-biolegend-purple group-hover:text-white transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-biolegend-purple text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Custom Laboratory Solutions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts can help you find the perfect equipment for your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Get Expert Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;