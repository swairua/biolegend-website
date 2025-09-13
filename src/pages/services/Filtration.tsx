import { Link } from "react-router-dom";
import { ArrowLeft, Filter, Droplets, Shield, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Filtration = () => {
  const suppliers = [
    {
      name: "CHMLab Group",
      description: "Professional laboratory filtration solutions and consumables",
      specialties: ["Membrane Filters", "Syringe Filters", "Filter Papers", "Vacuum Filtration"],
      applications: ["Sample Preparation", "Sterilization", "Clarification", "Particle Removal"]
    },
    {
      name: "Hawach",
      description: "High-quality filtration products for analytical and research applications",
      specialties: ["Disposable Filters", "Filter Holders", "Filtration Apparatus", "HPLC Filters"],
      applications: ["Chromatography", "Environmental Analysis", "Food Testing", "Pharmaceutical QC"]
    }
  ];

  const filterTypes = [
    {
      type: "Membrane Filters",
      description: "Precision membrane filters for critical applications",
      icon: <Filter className="w-6 h-6 text-purple-600" />,
      materials: ["PTFE", "Nylon", "PVDF", "Cellulose Acetate", "MCE", "PES"],
      poreSize: "0.1 - 10 μm",
      applications: ["Sterile Filtration", "Particle Analysis", "Air Monitoring", "Water Testing"]
    },
    {
      type: "Syringe Filters",
      description: "Disposable filters for sample preparation and clarification",
      icon: <Droplets className="w-6 h-6 text-purple-600" />,
      materials: ["PTFE", "Nylon", "PVDF", "GF/C", "CA", "PP"],
      poreSize: "0.1 - 5 μm",
      applications: ["Sample Cleanup", "Protein Removal", "Mobile Phase Filtration", "HPLC Prep"]
    },
    {
      type: "Filter Papers",
      description: "Traditional and specialized filter papers for laboratory use",
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      materials: ["Cellulose", "Glass Fiber", "Quartz", "Ashless", "Quantitative"],
      poreSize: "2.5 - 25 μm",
      applications: ["Gravimetric Analysis", "General Filtration", "Clarification", "Precipitation"]
    },
    {
      type: "Vacuum Filtration",
      description: "Complete vacuum filtration systems and assemblies",
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      materials: ["Glass", "Plastic", "Stainless Steel", "PTFE"],
      poreSize: "Variable",
      applications: ["Large Volume Filtration", "Sterilization", "Environmental Sampling", "Research"]
    }
  ];

  const applications = [
    {
      application: "Sample Preparation",
      description: "Pre-analytical sample cleanup and preparation",
      filters: ["Syringe Filters", "Membrane Filters", "Protein Precipitation"],
      benefits: ["Improved Accuracy", "Reduced Contamination", "Extended Column Life", "Better Reproducibility"]
    },
    {
      application: "Sterilization",
      description: "Sterile filtration of heat-sensitive solutions",
      filters: ["0.22 μm Membrane", "Syringe Filters", "Bottle Top Filters"],
      benefits: ["Sterile Solutions", "Heat-sensitive Protection", "Quick Processing", "No Endotoxins"]
    },
    {
      application: "Environmental Analysis",
      description: "Water and air quality monitoring applications",
      filters: ["Glass Fiber", "PTFE Membrane", "Air Monitoring Filters"],
      benefits: ["Accurate Measurements", "Regulatory Compliance", "Trace Analysis", "Quality Assurance"]
    },
    {
      application: "Analytical Chemistry",
      description: "HPLC and GC sample preparation and mobile phase filtration",
      filters: ["HPLC Syringe Filters", "Degassing Filters", "Inline Filters"],
      benefits: ["Peak Quality", "Baseline Stability", "Column Protection", "Reproducible Results"]
    }
  ];

  const technicalSpecs = [
    {
      specification: "Pore Size Range",
      description: "Available pore sizes for different applications",
      options: ["0.1 μm - Virus removal", "0.22 μm - Bacteria removal", "0.45 μm - Clarification", "0.8-5 μm - Particle removal"]
    },
    {
      specification: "Membrane Materials",
      description: "Chemical compatibility and performance characteristics",
      options: ["PTFE - Chemical resistance", "Nylon - Proteins", "PVDF - Low protein binding", "PES - Low extractables"]
    },
    {
      specification: "Filter Formats",
      description: "Available sizes and configurations",
      options: ["13mm - Small volumes", "25mm - Standard samples", "47mm - Large volumes", "90mm - High throughput"]
    },
    {
      specification: "Packaging Options",
      description: "Sterile and non-sterile packaging",
      options: ["Individual packing", "Bulk packaging", "Gamma sterilized", "Pre-sterilized"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Laboratory Filtration Solutions - CHMLab Group, Hawach - Membrane Filters - Biolegend Scientific Ltd"
        description="Professional laboratory filtration products from CHMLab Group and Hawach. Membrane filters, syringe filters, filter papers, and vacuum filtration systems."
        keywords="laboratory filtration, CHMLab Group, Hawach, membrane filters, syringe filters, filter papers, HPLC filters"
        url="https://biolegendscientific.co.ke/services/filtration"
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
                Laboratory Filtration
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Professional filtration solutions from CHMLab Group and Hawach for analytical and research applications
              </p>
            </div>
          </div>
        </section>

        {/* CHMLab Group & Hawach Supplier Reference Images */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Hero Image */}
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-8">
              <img
                src="https://images.pexels.com/photos/7298544/pexels-photo-7298544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="CHMLab Group and Hawach laboratory filtration equipment - supplier reference systems"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-purple-500/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Professional Filtration Solutions</h3>
                <p className="text-sm text-gray-600">High-quality filters from CHMLab Group and Hawach</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Official Suppliers</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">GMP Quality</span>
                </div>
              </div>
            </div>

            {/* Supplier Reference Gallery */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 bg-purple-50">
                  <h3 className="text-lg font-bold text-purple-800 mb-2">CHMLab Group Products</h3>
                  <p className="text-sm text-gray-600">Professional laboratory filtration solutions</p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="relative rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                      alt="CHMLab Group membrane filters and filter papers"
                      className="w-full h-20 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1">
                      Membrane Filters
                    </div>
                  </div>
                  <div className="relative rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/8471963/pexels-photo-8471963.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                      alt="CHMLab Group syringe filters for sample preparation"
                      className="w-full h-20 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1">
                      Syringe Filters
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 bg-purple-50">
                  <h3 className="text-lg font-bold text-purple-800 mb-2">Hawach Products</h3>
                  <p className="text-sm text-gray-600">High-quality filtration for analytical applications</p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="relative rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/7298544/pexels-photo-7298544.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                      alt="Hawach HPLC filters and disposable filters"
                      className="w-full h-20 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1">
                      HPLC Filters
                    </div>
                  </div>
                  <div className="relative rounded overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
                      alt="Hawach filtration apparatus and filter holders"
                      className="w-full h-20 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1">
                      Filter Apparatus
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suppliers Section */}
        <section className="py-20 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted Filtration Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leading manufacturers of laboratory filtration products and solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {suppliers.map((supplier, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                      {supplier.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {supplier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {supplier.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Applications:</h4>
                      <div className="space-y-1">
                        {supplier.applications.map((app, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {app}
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

        {/* Filter Types Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Filtration Product Range
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive selection of filters for all laboratory applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filterTypes.map((filter, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {filter.icon}
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                        {filter.type}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {filter.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm font-semibold text-purple-600">Pore Size:</span>
                        <p className="text-sm text-muted-foreground">{filter.poreSize}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-purple-600">Materials:</span>
                        <p className="text-sm text-muted-foreground">{filter.materials.join(", ")}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {filter.applications.map((app, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs">
                            {app}
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
                Filtration Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized filtration solutions for diverse laboratory needs
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
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Recommended Filters:</h4>
                      <div className="space-y-1">
                        {app.filters.map((filter, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {filter}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Benefits:</h4>
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

        {/* Technical Specifications Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive specifications for optimal filter selection
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-700">
                      {spec.specification}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {spec.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {spec.options.map((option, idx) => (
                        <span key={idx} className="block bg-purple-50 text-purple-700 px-3 py-2 rounded-md text-sm">
                          {option}
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
        <section className="bg-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Optimize Your Laboratory Filtration
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our filtration specialists for product selection and technical support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Filtration Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Technical Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Filtration;
