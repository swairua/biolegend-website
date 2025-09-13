import { Link } from "react-router-dom";
import { ArrowLeft, Thermometer, Shield, Snowflake, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MedicalRefrigerators = () => {
  const refrigeratorTypes = [
    {
      type: "Pharmacy Refrigerators",
      description: "Temperature-controlled storage for pharmaceuticals and medicines",
      temperature: "2°C to 8°C",
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      features: ["Precise Temperature Control", "Alarm Systems", "Data Logging", "Lockable Doors", "Glass Doors Available"]
    },
    {
      type: "Vaccine Refrigerators",
      description: "Specialized storage for vaccines and biological products",
      temperature: "2°C to 8°C",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      features: ["WHO PQS Approved", "Battery Backup", "Temperature Monitoring", "Secure Storage", "Portability Options"]
    },
    {
      type: "Blood Bank Refrigerators",
      description: "Safe storage of blood products and plasma",
      temperature: "1°C to 6°C",
      icon: <Thermometer className="w-6 h-6 text-blue-600" />,
      features: ["AABB Compliant", "Uniform Temperature", "Access Control", "Inventory Management", "Emergency Alarms"]
    },
    {
      type: "Laboratory Freezers",
      description: "Ultra-low temperature storage for research samples",
      temperature: "-20°C to -86°C",
      icon: <Snowflake className="w-6 h-6 text-blue-600" />,
      features: ["Ultra-Low Temperature", "Sample Protection", "Energy Efficient", "Reliable Performance", "Multiple Sizes"]
    }
  ];

  const applications = [
    {
      application: "Hospital Pharmacies",
      description: "Safe storage of temperature-sensitive medications",
      requirements: ["GMP Compliance", "Temperature Logging", "Access Control", "Backup Systems"],
      benefits: ["Medication Safety", "Regulatory Compliance", "Cost Reduction", "Patient Safety"]
    },
    {
      application: "Vaccine Storage",
      description: "Maintaining vaccine efficacy through proper cold chain",
      requirements: ["WHO Guidelines", "Continuous Monitoring", "Backup Power", "Training Programs"],
      benefits: ["Vaccine Potency", "Public Health", "Program Success", "Waste Reduction"]
    },
    {
      application: "Blood Banks",
      description: "Preserving blood products for transfusion services",
      requirements: ["AABB Standards", "Quality Control", "Inventory Tracking", "Emergency Protocols"],
      benefits: ["Product Safety", "Extended Shelf Life", "Quality Assurance", "Operational Efficiency"]
    },
    {
      application: "Research Laboratories",
      description: "Long-term storage of biological samples and reagents",
      requirements: ["Sample Integrity", "Reliable Performance", "Documentation", "Security Features"],
      benefits: ["Research Continuity", "Sample Viability", "Data Quality", "Investment Protection"]
    }
  ];

  const features = [
    {
      feature: "Temperature Control",
      description: "Precise temperature management with advanced control systems",
      specifications: ["±0.5°C accuracy", "Uniform distribution", "Fast recovery", "Multiple sensors"]
    },
    {
      feature: "Monitoring & Alarms",
      description: "Comprehensive monitoring with multiple alarm options",
      specifications: ["Visual alarms", "Audio alerts", "Remote monitoring", "Data logging"]
    },
    {
      feature: "Security & Access",
      description: "Secure storage with controlled access features",
      specifications: ["Digital locks", "Key card access", "User management", "Audit trails"]
    },
    {
      feature: "Construction",
      description: "Durable construction for medical environment demands",
      specifications: ["Stainless steel", "Easy cleaning", "Corrosion resistant", "Medical grade materials"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Medical Refrigerators - Meling Biomedical - Temperature-Controlled Storage - Biolegend Scientific Ltd"
        description="Professional medical refrigerators from Meling Biomedical. Vaccine storage, pharmacy refrigerators, blood bank solutions, and laboratory freezers."
        keywords="medical refrigerators, Meling Biomedical, vaccine storage, pharmacy refrigerator, blood bank, laboratory freezer"
        url="https://biolegendscientific.co.ke/services/medical-refrigerators"
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
                Medical Refrigerators
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Temperature-controlled storage solutions from Meling Biomedical for healthcare and research
              </p>
            </div>
          </div>
        </section>

        {/* Meling Biomedical Supplier Reference Images */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Hero Image */}
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-8">
              <img
                src="https://images.pexels.com/photos/20471642/pexels-photo-20471642.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Meling Biomedical medical refrigerator for vaccine and pharmaceutical storage - supplier reference"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-500/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">Meling Biomedical Refrigeration</h3>
                <p className="text-sm text-gray-600">Professional medical cold storage solutions</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Official Supplier</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">WHO PQS Approved</span>
                </div>
              </div>
            </div>

            {/* Supplier Reference Gallery */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Meling Biomedical pharmacy refrigerator for temperature-sensitive medications"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">YC Series</p>
                  <p className="text-xs text-gray-600">Pharmacy Refrigerator</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/4040557/pexels-photo-4040557.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Meling Biomedical vaccine storage refrigerator with monitoring system"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">YC-V Series</p>
                  <p className="text-xs text-gray-600">Vaccine Refrigerator</p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/20471642/pexels-photo-20471642.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Meling Biomedical ultra-low temperature freezer for laboratory samples"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                  <p className="text-xs font-semibold text-gray-800">DW Series</p>
                  <p className="text-xs text-gray-600">Ultra-Low Freezer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refrigerator Types Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Medical Refrigeration Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized refrigeration for different healthcare and research applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {refrigeratorTypes.map((type, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-blue-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {type.icon}
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {type.type}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {type.description}
                    </CardDescription>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium w-fit">
                      {type.temperature}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-blue-600">Key Features:</h4>
                      <div className="space-y-1">
                        {type.features.map((feature, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {feature}
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

        {/* Partner Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meling Biomedical Partnership
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Leading manufacturer of medical refrigeration equipment with global recognition
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-elegant p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">About Meling Biomedical</h3>
                  <p className="text-muted-foreground mb-4">
                    Meling Biomedical is a specialized manufacturer of medical and laboratory refrigeration equipment, 
                    providing reliable temperature-controlled storage solutions for healthcare facilities worldwide.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• WHO PQS approved products</li>
                    <li>• GMP compliant manufacturing</li>
                    <li>• Global service network</li>
                    <li>• Continuous innovation</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Certifications</h4>
                  <div className="space-y-2">
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">WHO PQS Prequalified</span>
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">CE Certified</span>
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">ISO 13485</span>
                    <span className="block bg-blue-200 text-blue-800 px-3 py-1 rounded-md text-sm">Energy Star</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Healthcare Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Critical temperature storage across various healthcare settings
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
                      <h4 className="font-semibold text-sm text-blue-600 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {app.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
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

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Technical Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced features for reliable medical refrigeration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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
              Secure Your Critical Storage Needs
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our specialists for medical refrigeration solutions and installation support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Refrigeration Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Technical Consultation
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

export default MedicalRefrigerators;
