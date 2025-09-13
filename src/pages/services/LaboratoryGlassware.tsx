import { Link } from "react-router-dom";
import { ArrowLeft, Beaker, FlaskConical, TestTube, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LaboratoryGlassware = () => {
  const suppliers = [
    {
      name: "Glassco",
      description: "Premium laboratory glassware manufacturer from India",
      specialties: ["Borosilicate Glass", "Volumetric Glassware", "General Purpose", "Custom Solutions"],
      grade: "Class A"
    },
    {
      name: "Pyrex",
      description: "World-renowned brand for high-quality laboratory glass",
      specialties: ["Heat Resistant", "Chemical Resistant", "Precision Volumetric", "Specialty Items"],
      grade: "Premium"
    }
  ];

  const categories = [
    {
      title: "Volumetric Glassware",
      icon: <FlaskConical className="w-6 h-6 text-emerald-600" />,
      products: ["Volumetric Flasks", "Burettes", "Pipettes", "Measuring Cylinders", "Conical Flasks", "Beakers"]
    },
    {
      title: "General Purpose",
      icon: <Beaker className="w-6 h-6 text-emerald-600" />,
      products: ["Test Tubes", "Petri Dishes", "Watch Glasses", "Funnels", "Stirring Rods", "Droppers"]
    },
    {
      title: "Specialized Glassware",
      icon: <TestTube className="w-6 h-6 text-emerald-600" />,
      products: ["Distillation Sets", "Extraction Apparatus", "Condensers", "Separatory Funnels", "Round Bottom Flasks"]
    },
    {
      title: "Accessories",
      icon: <Award className="w-6 h-6 text-emerald-600" />,
      products: ["Rubber Stoppers", "Glass Rods", "Tubing", "Clamps", "Stands", "Heating Mantles"]
    }
  ];

  const features = [
    {
      title: "Borosilicate Glass",
      description: "Superior thermal and chemical resistance",
      benefits: ["Low thermal expansion", "High temperature resistance", "Chemical inertness", "Optical clarity"]
    },
    {
      title: "Precision Manufacturing",
      description: "Accurate volumes and consistent quality",
      benefits: ["Class A tolerance", "Calibrated accuracy", "Consistent wall thickness", "Quality certification"]
    },
    {
      title: "Durability",
      description: "Long-lasting performance in laboratory conditions",
      benefits: ["Impact resistance", "Thermal shock resistance", "Easy cleaning", "Autoclave safe"]
    },
    {
      title: "Compliance",
      description: "Meeting international standards and regulations",
      benefits: ["ISO standards", "USP compliance", "FDA approved materials", "Traceability"]
    }
  ];

  const applications = [
    {
      sector: "Analytical Chemistry",
      description: "Precise measurements and accurate analysis",
      glassware: ["Volumetric Flasks", "Burettes", "Pipettes", "Beakers"]
    },
    {
      sector: "Organic Chemistry",
      description: "Synthesis and purification procedures",
      glassware: ["Round Bottom Flasks", "Condensers", "Separatory Funnels", "Distillation Sets"]
    },
    {
      sector: "Microbiology",
      description: "Sterile culture and testing procedures",
      glassware: ["Petri Dishes", "Test Tubes", "Culture Flasks", "Spreader Rods"]
    },
    {
      sector: "Quality Control",
      description: "Testing and validation procedures",
      glassware: ["Measuring Cylinders", "Conical Flasks", "Watch Glasses", "Funnels"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Laboratory Glassware - Glassco, Pyrex - Quality Glass Equipment - Biolegend Scientific Ltd"
        description="Premium laboratory glassware from Glassco and Pyrex. Complete range of volumetric, general purpose, and specialized glass equipment for laboratories."
        keywords="laboratory glassware, Glassco, Pyrex, volumetric glassware, beakers, flasks, test tubes, borosilicate glass"
        url="https://biolegendscientific.co.ke/services/laboratory-glassware"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Laboratory Glassware
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Premium glass equipment from Glassco and Pyrex for professional laboratories
              </p>
            </div>
          </div>
        </section>

        {/* Glassware Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                alt="Professional laboratory glassware and equipment"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-emerald-500/20"></div>
            </div>
          </div>
        </section>

        {/* Suppliers Section */}
        <section className="py-20 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted Glassware Suppliers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium laboratory glassware from globally recognized manufacturers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {suppliers.map((supplier, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-emerald-500/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl group-hover:text-emerald-600 transition-colors">
                        {supplier.name}
                      </CardTitle>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-sm font-medium">
                        {supplier.grade}
                      </span>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {supplier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-emerald-600">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {supplier.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md text-sm font-medium">
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

        {/* Laboratory Glassware Suppliers Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Laboratory glassware suppliers - Professional borosilicate glass equipment including beakers, flasks, and volumetric instruments"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-emerald-500/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Premium Laboratory Glassware</h3>
                <p className="text-sm text-gray-600">Borosilicate glass equipment from trusted suppliers</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Glassco</span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Pyrex</span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">Class A Quality</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Glassware Range
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive selection for all laboratory applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-emerald-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {category.icon}
                      <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.products.map((product, idx) => (
                        <span key={idx} className="block bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-sm">
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

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Superior materials and manufacturing for reliable performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-700">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <span key={idx} className="block text-sm text-muted-foreground">
                          • {benefit}
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
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Laboratory Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized glassware for diverse laboratory procedures
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-emerald-700">
                      {app.sector}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-emerald-600">Essential Glassware:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {app.glassware.map((glass, idx) => (
                          <span key={idx} className="block bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md text-xs">
                            {glass}
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

        {/* Call to Action */}
        <section className="bg-emerald-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Equip Your Laboratory with Quality Glassware
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our glassware specialists for product selection and bulk ordering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Get Glassware Quote
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

export default LaboratoryGlassware;
