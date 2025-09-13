import { Link } from "react-router-dom";
import { ArrowLeft, TestTube, Beaker, FlaskConical, Droplets, Package, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GlasswareConsumables = () => {
  const glasswareCategories = [
    {
      category: "Volumetric Glassware",
      description: "Precision glassware for accurate volume measurements",
      icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
      products: ["Volumetric Flasks", "Measuring Cylinders", "Burettes", "Pipettes", "Volumetric Pipettes", "Conical Flasks"]
    },
    {
      category: "General Purpose Glassware",
      description: "Standard laboratory glassware for everyday use",
      icon: <Beaker className="w-6 h-6 text-blue-600" />,
      products: ["Beakers", "Erlenmeyer Flasks", "Test Tubes", "Petri Dishes", "Watch Glasses", "Funnels"]
    },
    {
      category: "Specialized Glassware",
      description: "Advanced glassware for specific applications",
      icon: <TestTube className="w-6 h-6 text-blue-600" />,
      products: ["Distillation Sets", "Separatory Funnels", "Round Bottom Flasks", "Condensers", "Reaction Vessels", "Chromatography Columns"]
    },
    {
      category: "Sample Containers",
      description: "Containers for sample collection and storage",
      icon: <Package className="w-6 h-6 text-blue-600" />,
      products: ["Sample Bottles", "Vials", "Specimen Containers", "Storage Jars", "Transport Containers", "Sealed Vessels"]
    }
  ];

  const consumables = [
    {
      category: "Liquid Handling",
      description: "Tools and accessories for precise liquid handling",
      products: ["Pipette Tips", "Serological Pipettes", "Pasteur Pipettes", "Syringes", "Needles", "Dispensers"],
      applications: ["Sample Preparation", "Dilutions", "Transfers", "Dispensing"]
    },
    {
      category: "Sample Collection",
      description: "Equipment for collecting and processing samples",
      products: ["Swabs", "Sampling Bags", "Collection Tubes", "Transport Media", "Preservatives", "Labels"],
      applications: ["Field Sampling", "Clinical Specimens", "Environmental Samples", "Quality Control"]
    },
    {
      category: "Lab Consumables",
      description: "Essential disposable items for daily laboratory operations",
      products: ["Disposable Gloves", "Weighing Papers", "Filter Papers", "Aluminum Foil", "Parafilm", "Cleaning Wipes"],
      applications: ["Sample Handling", "Contamination Control", "Equipment Maintenance", "Safety"]
    },
    {
      category: "Caps & Closures",
      description: "Sealing solutions for containers and vessels",
      products: ["Screw Caps", "Snap Caps", "Rubber Stoppers", "Cork Stoppers", "Septums", "Crimp Seals"],
      applications: ["Sample Storage", "Leak Prevention", "Contamination Control", "Long-term Storage"]
    }
  ];

  const qualityFeatures = [
    {
      feature: "Material Quality",
      description: "High-grade materials for reliable performance",
      specifications: ["Borosilicate Glass", "USP Class VI Plastics", "Chemical Resistance", "Thermal Stability", "Optical Clarity"]
    },
    {
      feature: "Precision Manufacturing",
      description: "Accurate volumes and consistent quality",
      specifications: ["Class A Tolerance", "Calibration Certificates", "Lot Testing", "Dimensional Accuracy", "Surface Quality"]
    },
    {
      feature: "Sterility Options",
      description: "Sterile and non-sterile packaging available",
      specifications: ["Gamma Sterilized", "EtO Sterilized", "Autoclavable", "Pyrogen-Free", "Sterility Assurance"]
    },
    {
      feature: "Traceability",
      description: "Complete documentation and traceability",
      specifications: ["Lot Numbers", "Certificates of Analysis", "Material Compliance", "Quality Records", "Chain of Custody"]
    }
  ];

  const suppliers = [
    { name: "Glassco", specialty: "Laboratory Glassware", grade: "Class A Precision" },
    { name: "Pyrex", specialty: "Borosilicate Glassware", grade: "Premium Quality" },
    { name: "Corning", specialty: "Scientific Glassware", grade: "Research Grade" },
    { name: "Duran", specialty: "Laboratory Glass", grade: "High Quality" },
    { name: "Eppendorf", specialty: "Liquid Handling", grade: "Precision Tools" },
    { name: "Thermo Scientific", specialty: "Lab Consumables", grade: "Certified Quality" }
  ];

  const applications = [
    {
      application: "Analytical Chemistry",
      description: "Precision glassware for accurate measurements",
      requirements: ["Volumetric Accuracy", "Chemical Resistance", "Low Extractables", "Thermal Stability"],
      products: ["Volumetric Flasks", "Burettes", "Pipettes", "Analytical Beakers"]
    },
    {
      application: "Organic Synthesis",
      description: "Specialized glassware for chemical reactions",
      requirements: ["Reaction Vessels", "Heating Compatibility", "Vacuum Capability", "Custom Joints"],
      products: ["Round Bottom Flasks", "Condensers", "Separatory Funnels", "Reaction Sets"]
    },
    {
      application: "Microbiology",
      description: "Sterile containers and culture vessels",
      requirements: ["Sterility Assurance", "Autoclave Safe", "Growth Promotion", "Contamination Control"],
      products: ["Petri Dishes", "Culture Tubes", "Media Bottles", "Pipettes"]
    },
    {
      application: "Quality Control",
      description: "Validated glassware for testing procedures",
      requirements: ["Calibration", "Documentation", "Compliance", "Traceability"],
      products: ["Certified Glassware", "Reference Standards", "Control Samples", "Test Containers"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Laboratory Glassware & Consumables - Volumetric, General Purpose - Biolegend Scientific Ltd"
        description="Complete range of laboratory glassware and consumables including volumetric glassware, sample containers, liquid handling tools, and lab consumables."
        keywords="laboratory glassware, lab consumables, volumetric glassware, sample containers, liquid handling, Pyrex, Glassco, lab supplies"
        url="https://biolegendscientific.co.ke/services/glassware-consumables"
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
                Laboratory Glassware & Consumables
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Complete range of precision glassware, sample containers, and laboratory consumables
              </p>
            </div>
          </div>
        </section>

        {/* Glassware Categories Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Laboratory Glassware
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Precision glassware for accurate measurements and reliable laboratory work
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {glasswareCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-blue-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {category.icon}
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {category.category}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-blue-600">Product Types:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.products.map((product, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
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

        {/* Consumables Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Laboratory Consumables
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential consumable items for daily laboratory operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {consumables.map((consumable, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">
                      {consumable.category}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {consumable.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-blue-600 mb-2">Products:</h4>
                      <div className="flex flex-wrap gap-2">
                        {consumable.products.map((product, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-blue-600 mb-2">Applications:</h4>
                      <div className="space-y-1">
                        {consumable.applications.map((app, idx) => (
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

        {/* Applications Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Laboratory Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized glassware and consumables for different laboratory disciplines
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">
                      {app.application}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-blue-600 mb-2">Requirements:</h4>
                      <div className="space-y-1">
                        {app.requirements.map((req, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-blue-600 mb-2">Key Products:</h4>
                      <div className="flex flex-wrap gap-1">
                        {app.products.map((product, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
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

        {/* Quality Features Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality Assurance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Superior quality standards for reliable laboratory performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700">
                      {feature.feature}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.specifications.map((spec, idx) => (
                        <span key={idx} className="block bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm">
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

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Your Laboratory Setup
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our specialists for comprehensive glassware and consumables solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Product Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GlasswareConsumables;
