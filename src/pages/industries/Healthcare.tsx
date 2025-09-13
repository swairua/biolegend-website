import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Stethoscope, Shield, Activity, Microscope, TestTube } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Healthcare = () => {
  const healthcareSectors = [
    {
      sector: "Clinical Laboratories",
      description: "Diagnostic testing and pathology laboratories",
      icon: <TestTube className="w-6 h-6 text-red-600" />,
      equipment: ["Automated Analyzers", "Microscopes", "Centrifuges", "Incubators", "Safety Cabinets", "Pipettes"]
    },
    {
      sector: "Hospitals & Clinics",
      description: "Point-of-care testing and in-house laboratories",
      icon: <Heart className="w-6 h-6 text-red-600" />,
      equipment: ["Blood Gas Analyzers", "Hemoglobin Meters", "Glucose Monitors", "Urinalysis Systems", "Rapid Test Kits"]
    },
    {
      sector: "Blood Banks",
      description: "Blood collection, processing, and storage facilities",
      icon: <Activity className="w-6 h-6 text-red-600" />,
      equipment: ["Blood Bank Refrigerators", "Plasma Freezers", "Cell Washers", "Blood Mixers", "Tube Sealers"]
    },
    {
      sector: "Medical Research",
      description: "Research institutions and pharmaceutical development",
      icon: <Microscope className="w-6 h-6 text-red-600" />,
      equipment: ["Research Microscopes", "PCR Systems", "Spectrophotometers", "Cell Culture Equipment", "Freezers"]
    }
  ];

  const testingAreas = [
    {
      area: "Hematology",
      description: "Blood cell analysis and coagulation testing",
      tests: ["Complete Blood Count", "Blood Smear Analysis", "Coagulation Studies", "Reticulocyte Count"],
      equipment: ["Cell Counters", "Coagulation Analyzers", "Microscopes", "Staining Equipment"]
    },
    {
      area: "Clinical Chemistry",
      description: "Biochemical analysis of blood and body fluids",
      tests: ["Glucose", "Cholesterol", "Liver Function", "Kidney Function", "Cardiac Markers"],
      equipment: ["Automated Analyzers", "Photometers", "Ion Selective Electrodes", "Centrifuges"]
    },
    {
      area: "Microbiology",
      description: "Detection and identification of pathogens",
      tests: ["Culture & Sensitivity", "Bacterial Identification", "Antibiotic Susceptibility", "Viral Detection"],
      equipment: ["Incubators", "Autoclaves", "Microscopes", "Safety Cabinets", "ID Systems"]
    },
    {
      area: "Immunology",
      description: "Immune system testing and serology",
      tests: ["ELISA", "Immunofluorescence", "Complement Studies", "Autoimmune Markers"],
      equipment: ["ELISA Readers", "Fluorescence Microscopes", "Washers", "Incubators"]
    }
  ];

  const qualityStandards = [
    {
      standard: "ISO 15189",
      description: "Medical laboratories - Requirements for quality and competence",
      requirements: ["Quality Management", "Technical Requirements", "Documentation", "Validation"]
    },
    {
      standard: "CAP Accreditation",
      description: "College of American Pathologists laboratory accreditation",
      requirements: ["Proficiency Testing", "Quality Assurance", "Personnel Standards", "Safety Protocols"]
    },
    {
      standard: "CLIA Compliance",
      description: "Clinical Laboratory Improvement Amendments",
      requirements: ["Personnel Requirements", "Quality Control", "Proficiency Testing", "Quality Assessment"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Healthcare & Medical Laboratory Solutions - Biolegend Scientific Ltd"
        description="Professional laboratory equipment for healthcare facilities, clinical labs, hospitals, and medical research. Quality diagnostic instruments for accurate patient care."
        keywords="healthcare laboratory equipment, clinical laboratory, medical diagnostics, hospital laboratory, blood bank equipment"
        url="https://biolegendscientific.co.ke/industries/healthcare"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/industries" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Industries
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Healthcare & Medical
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Precision laboratory equipment for accurate diagnostics and exceptional patient care
              </p>
            </div>
          </div>
        </section>

        {/* Healthcare Suppliers Image */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg overflow-hidden shadow-elegant mb-16">
              <img
                src="https://images.pexels.com/photos/6501853/pexels-photo-6501853.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Healthcare and medical laboratory equipment suppliers - Advanced diagnostic equipment for clinical laboratories and hospitals"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-red-500/20"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Medical Laboratory Equipment</h3>
                <p className="text-sm text-gray-600">Precision diagnostic instruments for healthcare facilities</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Hematology</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Clinical Chemistry</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Microbiology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Sectors Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Healthcare Sectors We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized equipment solutions for different healthcare environments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {healthcareSectors.map((sector, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-red-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {sector.icon}
                      <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                        {sector.sector}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {sector.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-red-600">Key Equipment:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {sector.equipment.map((item, idx) => (
                          <span key={idx} className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-xs">
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

        {/* Testing Areas Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Clinical Testing Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions for all major clinical laboratory disciplines
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testingAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-700">
                      {area.area}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-red-600 mb-2">Common Tests:</h4>
                      <div className="space-y-1">
                        {area.tests.map((test, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {test}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-red-600 mb-2">Equipment Required:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.equipment.map((equip, idx) => (
                          <span key={idx} className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-xs">
                            {equip}
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

        {/* Quality Standards Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality Standards & Compliance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meeting international standards for healthcare laboratory quality
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {qualityStandards.map((standard, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Shield className="w-6 h-6 text-green-600" />
                      <CardTitle className="text-lg text-green-700">
                        {standard.standard}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {standard.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-green-600">Key Requirements:</h4>
                      <div className="space-y-1">
                        {standard.requirements.map((req, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {req}
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
        <section className="py-20 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Healthcare Solutions?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clinical Accuracy</h3>
                <p className="text-muted-foreground">Precision instruments for reliable diagnostic results</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-muted-foreground">Equipment meeting international healthcare standards</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
                <p className="text-muted-foreground">Comprehensive training and maintenance services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhance Your Healthcare Laboratory Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our healthcare specialists for customized laboratory solutions and compliance support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Get Healthcare Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Healthcare;
