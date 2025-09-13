import { Link } from "react-router-dom";
import { ArrowLeft, Pill, Beaker, Shield, Award, TestTube, Microscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pharmaceutical = () => {
  const pharmaAreas = [
    {
      area: "Drug Development",
      description: "Research and development of new pharmaceutical compounds",
      icon: <Beaker className="w-6 h-6 text-indigo-600" />,
      equipment: ["HPLC Systems", "Mass Spectrometers", "Dissolution Testers", "Stability Chambers", "Analytical Balances"]
    },
    {
      area: "Quality Control",
      description: "Testing and validation of pharmaceutical products",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      equipment: ["UV Spectrophotometers", "FTIR Spectrometers", "Particle Size Analyzers", "Moisture Analyzers", "Titrators"]
    },
    {
      area: "Manufacturing",
      description: "Production and process control in pharmaceutical manufacturing",
      icon: <Award className="w-6 h-6 text-indigo-600" />,
      equipment: ["Process Analyzers", "pH Meters", "Conductivity Meters", "Temperature Controllers", "Clean Room Equipment"]
    },
    {
      area: "Biopharmaceuticals",
      description: "Development and production of biological drug products",
      icon: <Microscope className="w-6 h-6 text-indigo-600" />,
      equipment: ["Cell Counters", "Bioreactors", "Protein Analyzers", "Flow Cytometers", "Incubators"]
    }
  ];

  const testingMethods = [
    {
      method: "Chromatography",
      description: "Separation and analysis of pharmaceutical compounds",
      techniques: ["HPLC", "GC", "LC-MS", "Ion Chromatography"],
      applications: ["Potency Testing", "Impurity Analysis", "Stability Studies", "Content Uniformity"]
    },
    {
      method: "Spectroscopy",
      description: "Molecular identification and quantification",
      techniques: ["UV-Vis", "FTIR", "NMR", "Mass Spectrometry"],
      applications: ["Identity Testing", "Assay", "Impurity Profiling", "Structure Elucidation"]
    },
    {
      method: "Physical Testing",
      description: "Physical characterization of pharmaceutical products",
      techniques: ["Dissolution", "Disintegration", "Hardness", "Friability"],
      applications: ["Release Testing", "Stability", "Formulation Development", "Process Control"]
    },
    {
      method: "Microbiological Testing",
      description: "Microbial contamination and sterility testing",
      techniques: ["Sterility Testing", "Bioburden", "Endotoxin Testing", "Antimicrobial Effectiveness"],
      applications: ["Sterile Products", "Non-sterile Products", "Environmental Monitoring", "Water Testing"]
    }
  ];

  const regulations = [
    {
      authority: "FDA (US)",
      guidelines: ["21 CFR Part 211", "ICH Guidelines", "FDA Guidance Documents", "USP Standards"],
      focus: "Good Manufacturing Practices and analytical method validation"
    },
    {
      authority: "EMA (Europe)",
      guidelines: ["GMP Guidelines", "ICH Guidelines", "Ph. Eur. Standards", "EMEA Guidelines"],
      focus: "European pharmaceutical regulation and quality standards"
    },
    {
      authority: "ICH (International)",
      guidelines: ["Q1-Q14 Guidelines", "Stability Testing", "Analytical Validation", "Quality Risk Management"],
      focus: "Harmonized international pharmaceutical development standards"
    }
  ];

  const qualityFeatures = [
    {
      title: "GMP Compliance",
      description: "Equipment designed for Good Manufacturing Practice environments",
      features: ["Validation Documentation", "Audit Trails", "User Access Control", "Change Control"]
    },
    {
      title: "Regulatory Support",
      description: "Comprehensive documentation for regulatory submissions",
      features: ["IQ/OQ/PQ Protocols", "Validation Reports", "Certificate of Compliance", "Technical Support"]
    },
    {
      title: "Data Integrity",
      description: "Ensuring ALCOA+ principles in analytical data",
      features: ["Electronic Records", "Digital Signatures", "Secure Data Storage", "Backup Systems"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Pharmaceutical & Biopharmaceutical Laboratory Solutions - Biolegend Scientific Ltd"
        description="GMP-compliant laboratory equipment for pharmaceutical development, quality control, and manufacturing. FDA, EMA, and ICH compliant instruments."
        keywords="pharmaceutical laboratory equipment, GMP compliance, drug development, quality control, biopharmaceutical, HPLC, spectroscopy"
        url="https://biolegendscientific.co.ke/industries/pharmaceutical"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/industries" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Industries
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pharmaceutical & Biopharmaceutical
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                GMP-compliant laboratory solutions for pharmaceutical development, quality control, and manufacturing
              </p>
            </div>
          </div>
        </section>

        {/* Pharmaceutical Suppliers Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/8940355/pexels-photo-8940355.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Pharmaceutical laboratory equipment suppliers - GMP-compliant instruments for drug development and quality control testing"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-indigo-500/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">GMP-Compliant Laboratory Equipment</h3>
                <p className="text-sm text-gray-600">Advanced instruments for pharmaceutical development and QC</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">HPLC</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">Spectroscopy</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">GMP Validation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pharmaceutical Areas Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pharmaceutical Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized equipment for every stage of pharmaceutical development and production
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pharmaAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-indigo-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {area.icon}
                      <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">
                        {area.area}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-indigo-600">Key Equipment:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {area.equipment.map((item, idx) => (
                          <span key={idx} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md text-xs">
                            {item}
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

        {/* Testing Methods Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Analytical Testing Methods
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive analytical capabilities for pharmaceutical testing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testingMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-indigo-700">
                      {method.method}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-indigo-600 mb-2">Techniques:</h4>
                      <div className="flex flex-wrap gap-2">
                        {method.techniques.map((tech, idx) => (
                          <span key={idx} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-indigo-600 mb-2">Applications:</h4>
                      <div className="space-y-1">
                        {method.applications.map((app, idx) => (
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

        {/* Regulations Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Regulatory Compliance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meeting global pharmaceutical regulatory requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {regulations.map((reg, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Pill className="w-6 h-6 text-purple-600" />
                      <CardTitle className="text-lg text-purple-700">
                        {reg.authority}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {reg.focus}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-purple-600">Key Guidelines:</h4>
                      <div className="space-y-1">
                        {reg.guidelines.map((guideline, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {guideline}
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
        <section className="py-20 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality Assurance Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built-in quality features for pharmaceutical compliance
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {qualityFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-indigo-700">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-indigo-600">Features:</h4>
                      <div className="space-y-1">
                        {feature.features.map((feat, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {feat}
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
        <section className="bg-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for GMP-Compliant Laboratory Solutions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our pharmaceutical specialists for regulatory-compliant equipment and validation support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Get Pharma Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Validation Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pharmaceutical;
