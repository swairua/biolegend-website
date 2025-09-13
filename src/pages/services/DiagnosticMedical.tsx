import { Link } from "react-router-dom";
import { ArrowLeft, Stethoscope, Activity, Heart, TestTube, Shield, Microscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DiagnosticMedical = () => {
  const diagnosticAreas = [
    {
      area: "Clinical Chemistry",
      description: "Automated analyzers and reagents for blood chemistry testing",
      icon: <TestTube className="w-6 h-6 text-red-600" />,
      equipment: ["Clinical Analyzers", "Biochemistry Reagents", "Quality Control Materials", "Calibrators", "Electrolyte Analyzers"]
    },
    {
      area: "Hematology",
      description: "Blood cell counting and coagulation testing equipment",
      icon: <Activity className="w-6 h-6 text-red-600" />,
      equipment: ["CBC Analyzers", "Coagulation Analyzers", "Blood Bank Equipment", "Cell Counters", "Flow Cytometers"]
    },
    {
      area: "Immunoassay",
      description: "ELISA and immunodiagnostic testing solutions",
      icon: <Shield className="w-6 h-6 text-red-600" />,
      equipment: ["ELISA Readers", "Immunoassay Analyzers", "Rapid Test Kits", "CLIA Systems", "Immunofluorescence"]
    },
    {
      area: "Microbiology",
      description: "Bacterial identification and antimicrobial susceptibility testing",
      icon: <Microscope className="w-6 h-6 text-red-600" />,
      equipment: ["ID/AST Systems", "Blood Culture Systems", "Microbiology Analyzers", "Culture Media", "Antimicrobial Testing"]
    }
  ];

  const ivdKits = [
    {
      category: "Rapid Test Kits",
      description: "Point-of-care testing for immediate results",
      tests: ["Pregnancy Tests", "Cardiac Markers", "Infectious Disease", "Drug Testing", "COVID-19 Tests", "Malaria Tests"]
    },
    {
      category: "ELISA Kits",
      description: "Enzyme-linked immunosorbent assays for various analytes",
      tests: ["Hormone Testing", "Infectious Disease", "Allergy Testing", "Autoimmune Markers", "Tumor Markers", "Drug Monitoring"]
    },
    {
      category: "Molecular Diagnostics",
      description: "PCR and genetic testing solutions",
      tests: ["PCR Kits", "Real-time PCR", "Genetic Testing", "Pathogen Detection", "Viral Load Testing", "Genotyping"]
    },
    {
      category: "Clinical Chemistry Kits",
      description: "Reagent kits for automated and manual analysis",
      tests: ["Liver Function", "Kidney Function", "Lipid Profile", "Glucose Testing", "Cardiac Enzymes", "Electrolytes"]
    }
  ];

  const medicalEquipment = [
    {
      equipment: "Blood Gas Analyzers",
      description: "Critical care testing for blood gas and electrolytes",
      applications: ["Emergency Medicine", "ICU Monitoring", "Respiratory Care", "Anesthesia"]
    },
    {
      equipment: "Hemoglobin Meters",
      description: "Point-of-care hemoglobin testing devices",
      applications: ["Anemia Screening", "Blood Donation", "Surgery Prep", "Pediatric Care"]
    },
    {
      equipment: "Glucose Monitors",
      description: "Blood glucose testing for diabetes management",
      applications: ["Diabetes Care", "Hospital Testing", "Home Monitoring", "Emergency Care"]
    },
    {
      equipment: "Urine Analyzers",
      description: "Automated urinalysis systems",
      applications: ["Routine Screening", "Kidney Disease", "UTI Detection", "Pregnancy Monitoring"]
    }
  ];

  const qualityStandards = [
    {
      standard: "ISO 15189",
      description: "Medical laboratories - Requirements for quality and competence",
      requirements: ["Quality Management System", "Technical Requirements", "Competence Requirements", "Management Requirements"]
    },
    {
      standard: "CLIA Waived",
      description: "Clinical Laboratory Improvement Amendments waived tests",
      requirements: ["Simple Procedures", "Minimal Training", "Low Error Risk", "Easy Interpretation"]
    },
    {
      standard: "CE-IVD Marking",
      description: "European Conformity for In Vitro Diagnostic devices",
      requirements: ["Safety Standards", "Performance Requirements", "Quality System", "Post-Market Surveillance"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Diagnostic & Medical Solutions - IVD Kits & Clinical Equipment - Biolegend Scientific Ltd"
        description="Professional diagnostic and medical solutions including IVD kits, clinical analyzers, rapid test kits, and medical equipment for hospitals and clinics."
        keywords="diagnostic solutions, IVD kits, clinical analyzers, medical equipment, rapid test kits, ELISA, PCR, medical diagnostics"
        url="https://biolegendscientific.co.ke/services/diagnostic-medical"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Diagnostic & Medical Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Comprehensive IVD kits, clinical analyzers, and medical equipment for accurate healthcare diagnostics
              </p>
            </div>
          </div>
        </section>

        {/* Diagnostic Areas Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Clinical Diagnostic Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete diagnostic solutions for all major clinical laboratory disciplines
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {diagnosticAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-red-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {area.icon}
                      <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                        {area.area}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-red-600">Key Equipment:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {area.equipment.map((item, idx) => (
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

        {/* IVD Kits Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                In Vitro Diagnostic (IVD) Kits
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of diagnostic kits for clinical testing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {ivdKits.map((kit, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-700">
                      {kit.category}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {kit.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-red-600">Available Tests:</h4>
                      <div className="flex flex-wrap gap-2">
                        {kit.tests.map((test, idx) => (
                          <span key={idx} className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-xs">
                            {test}
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

        {/* Medical Equipment Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Point-of-Care Medical Equipment
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Portable and benchtop analyzers for immediate patient care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {medicalEquipment.map((equip, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-700">
                      {equip.equipment}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {equip.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-red-600">Clinical Applications:</h4>
                      <div className="space-y-1">
                        {equip.applications.map((app, idx) => (
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

        {/* Quality Standards Section */}
        <section className="py-20 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality & Regulatory Standards
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meeting international standards for medical diagnostic equipment
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {qualityStandards.map((standard, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Heart className="w-6 h-6 text-green-600" />
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

        {/* Call to Action */}
        <section className="bg-red-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhance Your Diagnostic Capabilities
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our diagnostic specialists for IVD kits, clinical analyzers, and medical equipment solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Get Diagnostic Solutions
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Product Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiagnosticMedical;
