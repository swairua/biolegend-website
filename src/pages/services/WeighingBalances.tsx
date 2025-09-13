import { Link } from "react-router-dom";
import { ArrowLeft, Scale, Zap, Shield, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WeighingBalances = () => {
  const balanceTypes = [
    {
      type: "Analytical Balances",
      description: "Ultra-precise weighing for analytical applications",
      readability: "0.1 mg (0.0001 g)",
      capacity: "up to 320 g",
      applications: ["Chemical Analysis", "Sample Preparation", "Microweighing", "Quality Control"],
      icon: <Scale className="w-6 h-6 text-blue-600" />
    },
    {
      type: "Precision Balances",
      description: "High accuracy for general laboratory weighing",
      readability: "1 mg (0.001 g)",
      capacity: "up to 64 kg",
      applications: ["Formulation", "Density Determination", "General Weighing", "Recipe Development"],
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      type: "Semi-Micro Balances",
      description: "Superior precision for micro-sample weighing",
      readability: "0.01 mg (0.00001 g)",
      capacity: "up to 220 g",
      applications: ["Micro Analysis", "Precious Materials", "Research Applications", "Pharmaceutical Testing"],
      icon: <Award className="w-6 h-6 text-blue-600" />
    },
    {
      type: "Moisture Analyzers",
      description: "Rapid moisture content determination",
      readability: "0.001% moisture",
      capacity: "up to 200 g",
      applications: ["Food Analysis", "Pharmaceutical QC", "Chemical Processing", "Material Testing"],
      icon: <Shield className="w-6 h-6 text-blue-600" />
    }
  ];

  const features = [
    {
      title: "Advanced Technology",
      description: "State-of-the-art weighing technology with intelligent sensors",
      benefits: ["Fast stabilization", "Temperature compensation", "Vibration filtering", "Auto-calibration"]
    },
    {
      title: "User-Friendly Interface",
      description: "Intuitive operation with color touchscreen displays",
      benefits: ["Easy navigation", "Multi-language support", "Customizable displays", "Data logging"]
    },
    {
      title: "Connectivity Options",
      description: "Modern connectivity for data management and integration",
      benefits: ["USB/Ethernet ports", "Wireless connectivity", "Laboratory networks", "ERP integration"]
    },
    {
      title: "Quality Assurance",
      description: "Built-in quality features for reliable measurements",
      benefits: ["GLP/GMP compliance", "Audit trails", "User management", "Statistical functions"]
    }
  ];

  const applications = [
    {
      industry: "Pharmaceutical",
      description: "Critical weighing for drug development and manufacturing",
      requirements: ["USP compliance", "Audit trails", "User access control", "High precision"]
    },
    {
      industry: "Chemical",
      description: "Accurate weighing for chemical analysis and production",
      requirements: ["Chemical resistance", "Anti-static design", "Explosion-proof options", "Temperature stability"]
    },
    {
      industry: "Food & Beverage",
      description: "Quality control and formulation weighing",
      requirements: ["Hygienic design", "Easy cleaning", "Moisture analysis", "Recipe management"]
    },
    {
      industry: "Research & Education",
      description: "Precise measurements for scientific research",
      requirements: ["High accuracy", "Data logging", "Statistical analysis", "Training features"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Weighing Balances - Radwag - Modern Analytical & Precision Balances - Biolegend Scientific Ltd"
        description="Professional weighing balances from Radwag. Analytical balances, precision scales, and moisture analyzers for laboratory and industrial applications."
        keywords="weighing balances, Radwag, analytical balances, precision scales, moisture analyzers, laboratory weighing"
        url="https://biolegendscientific.co.ke/services/weighing-balances"
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
                Modern Weighing Balances
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Precision weighing solutions from Radwag for laboratory and industrial applications
              </p>
            </div>
          </div>
        </section>

        {/* Radwag Supplier Reference Images */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Hero Image */}
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-8">
              <img
                src="https://images.pexels.com/photos/9629662/pexels-photo-9629662.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Radwag precision analytical balance in professional laboratory - supplier reference"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-500/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Radwag Analytical Balances</h3>
                <p className="text-sm text-gray-600">Professional precision weighing equipment</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Official Supplier</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">0.1mg Precision</span>
                </div>
              </div>
            </div>

            {/* Supplier Reference Gallery */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/8666810/pexels-photo-8666810.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Radwag precision balance for pharmaceutical applications"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">AS Series</p>
                  <p className="text-xs text-gray-600">Analytical Balance</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Radwag precision weighing scale for laboratory research"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">PS Series</p>
                  <p className="text-xs text-gray-600">Precision Balance</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/9629662/pexels-photo-9629662.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Radwag moisture analyzer for quality control"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">MA Series</p>
                  <p className="text-xs text-gray-600">Moisture Analyzer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Radwag Partnership
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leading European manufacturer of precision weighing equipment with over 40 years of experience
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-elegant p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">About Radwag</h3>
                  <p className="text-muted-foreground mb-4">
                    Radwag is a renowned Polish manufacturer of precision weighing instruments, serving laboratories 
                    and industries worldwide with innovative solutions and exceptional quality.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Over 40 years of experience</li>
                    <li>• ISO 9001 certified manufacturing</li>
                    <li>• Advanced R&D capabilities</li>
                    <li>• Global service network</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Product Innovation</h4>
                  <div className="space-y-2">
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">Touchscreen Technology</span>
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">Wireless Connectivity</span>
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">Smart Sensors</span>
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">Data Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Balance Types Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Precision Weighing Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete range of weighing balances for every application
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {balanceTypes.map((balance, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-blue-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {balance.icon}
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {balance.type}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {balance.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm font-semibold text-blue-600">Readability:</span>
                          <p className="text-sm text-muted-foreground">{balance.readability}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-blue-600">Capacity:</span>
                          <p className="text-sm text-muted-foreground">{balance.capacity}</p>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-blue-600">Applications:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {balance.applications.map((app, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
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
                Modern technology for superior weighing performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700">
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
                Industry Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized weighing solutions for diverse industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">
                      {app.industry}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-blue-600">Key Requirements:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {app.requirements.map((req, idx) => (
                          <span key={idx} className="block bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                            {req}
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
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Upgrade to Modern Weighing Technology
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our weighing specialists for balance selection and installation support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Balance Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Product Demonstration
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

export default WeighingBalances;
