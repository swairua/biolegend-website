import { Link } from "react-router-dom";
import { ArrowLeft, Eye, Zap, Camera, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Microscopy = () => {
  const microscopeTypes = [
    {
      type: "Compound Microscopes",
      description: "Traditional light microscopes for routine laboratory work",
      magnification: "40x - 2000x",
      applications: ["Histology", "Cell Biology", "Educational Use", "Quality Control"],
      icon: <Eye className="w-6 h-6 text-indigo-600" />
    },
    {
      type: "Stereo Microscopes",
      description: "3D viewing for dissection and inspection work",
      magnification: "7x - 180x",
      applications: ["Dissection", "Electronics", "Material Inspection", "Gemology"],
      icon: <Settings className="w-6 h-6 text-indigo-600" />
    },
    {
      type: "Digital Microscopes",
      description: "Modern imaging with digital capture capabilities",
      magnification: "10x - 5000x",
      applications: ["Documentation", "Analysis", "Measurement", "Remote Viewing"],
      icon: <Camera className="w-6 h-6 text-indigo-600" />
    },
    {
      type: "Fluorescence Microscopes",
      description: "Advanced imaging with fluorescent markers",
      magnification: "100x - 1000x",
      applications: ["Research", "Diagnostics", "Immunofluorescence", "Live Cell Imaging"],
      icon: <Zap className="w-6 h-6 text-indigo-600" />
    }
  ];

  const features = [
    {
      title: "High-Quality Optics",
      description: "Superior lens systems for clear, sharp images",
      benefits: ["Excellent resolution", "Color accuracy", "Minimal distortion", "Long working distance"]
    },
    {
      title: "LED Illumination",
      description: "Energy-efficient LED lighting systems",
      benefits: ["Cool operation", "Long life", "Consistent brightness", "Low power consumption"]
    },
    {
      title: "Digital Integration",
      description: "Modern connectivity and imaging capabilities",
      benefits: ["USB cameras", "Software included", "Measurement tools", "Image capture"]
    },
    {
      title: "Ergonomic Design",
      description: "User-friendly design for comfortable operation",
      benefits: ["Adjustable eyepieces", "Smooth controls", "Stable base", "Easy maintenance"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Microscopy Solutions - Euromex - Laboratory Microscopes - Biolegend Scientific Ltd"
        description="Professional microscopy solutions from Euromex. Compound, stereo, digital, and fluorescence microscopes for research, education, and industry."
        keywords="microscopy, Euromex, compound microscopes, stereo microscopes, digital microscopes, fluorescence microscopes"
        url="https://biolegendscientific.co.ke/services/microscopy"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Microscopy Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Advanced microscopy equipment from Euromex for research, education, and industry
              </p>
            </div>
          </div>
        </section>

        {/* Microscopy Image */}
        {/* Euromex Supplier Reference Images */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Hero Image */}
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-8">
              <img
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Euromex professional microscope in laboratory - supplier reference equipment"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-indigo-500/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Euromex Microscopy Systems</h3>
                <p className="text-sm text-gray-600">Advanced optical instruments for research and education</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">Official Supplier</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">EU Quality</span>
                </div>
              </div>
            </div>

            {/* Supplier Reference Gallery */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Euromex compound microscope for biological research"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">EcoBlue Series</p>
                  <p className="text-xs text-gray-600">Compound Microscope</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Euromex stereo microscope for precision work"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">NexiusZoom</p>
                  <p className="text-xs text-gray-600">Stereo Microscope</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Euromex digital microscope with imaging system"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">DigitalBlue</p>
                  <p className="text-xs text-gray-600">Digital Microscope</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-20 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Euromex Partnership
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leading manufacturer of high-quality microscopy equipment for professional applications
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-elegant p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-700 mb-4">About Euromex</h3>
                  <p className="text-muted-foreground mb-4">
                    Euromex specializes in developing and manufacturing advanced microscopy solutions 
                    that combine traditional optical excellence with modern digital capabilities.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• High-quality optical systems</li>
                    <li>• Digital imaging integration</li>
                    <li>• Educational and research applications</li>
                    <li>• Comprehensive technical support</li>
                  </ul>
                </div>
                <div className="bg-indigo-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-3">Product Categories</h4>
                  <div className="space-y-2">
                    <span className="block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-md text-sm">Compound Microscopes</span>
                    <span className="block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-md text-sm">Stereo Microscopes</span>
                    <span className="block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-md text-sm">Digital Systems</span>
                    <span className="block bg-indigo-200 text-indigo-800 px-3 py-1 rounded-md text-sm">Accessories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Microscope Types Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Microscopy Range
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional microscopes for every application and budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {microscopeTypes.map((microscope, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-indigo-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {microscope.icon}
                      <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">
                        {microscope.type}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {microscope.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm font-semibold text-indigo-600">Magnification Range:</span>
                        <p className="text-sm text-muted-foreground">{microscope.magnification}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-indigo-600">Applications:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {microscope.applications.map((app, idx) => (
                            <span key={idx} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md text-xs">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
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
                Advanced Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Modern technology for superior imaging performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-indigo-700">
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

        {/* Call to Action */}
        <section className="bg-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhance Your Laboratory with Professional Microscopy
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our microscopy specialists for equipment selection and training support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Get Microscopy Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Microscopy;
