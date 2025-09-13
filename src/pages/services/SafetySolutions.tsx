import { Link } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle, Eye, Wind, Flame, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SafetySolutions = () => {
  const safetyCategories = [
    {
      category: "Safety Cabinets",
      description: "Biological and chemical safety cabinets for containment",
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      equipment: ["Class I Biosafety Cabinets", "Class II Biosafety Cabinets", "Class III Biosafety Cabinets", "Chemical Safety Cabinets", "PCR Cabinets", "Cytotoxic Cabinets"]
    },
    {
      category: "Fume Hoods",
      description: "Chemical fume extraction and containment systems",
      icon: <Wind className="w-6 h-6 text-orange-600" />,
      equipment: ["Ducted Fume Hoods", "Ductless Fume Hoods", "Walk-in Fume Hoods", "Perchloric Acid Hoods", "Radioisotope Hoods", "Powder Containment"]
    },
    {
      category: "Personal Protective Equipment",
      description: "Individual protection gear for laboratory workers",
      icon: <Eye className="w-6 h-6 text-orange-600" />,
      equipment: ["Safety Goggles", "Lab Coats", "Disposable Gloves", "Chemical Resistant Gloves", "Respirators", "Face Shields"]
    },
    {
      category: "Emergency Equipment",
      description: "Emergency response and first aid equipment",
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
      equipment: ["Eyewash Stations", "Emergency Showers", "Fire Extinguishers", "Spill Kits", "First Aid Kits", "Emergency Blankets"]
    }
  ];

  const safetyStandards = [
    {
      standard: "OSHA Compliance",
      description: "Occupational Safety and Health Administration standards",
      requirements: ["Hazard Communication", "PPE Requirements", "Ventilation Standards", "Emergency Procedures"],
      applications: ["Chemical Handling", "Biological Safety", "Physical Hazards", "Emergency Response"]
    },
    {
      standard: "WHO Biosafety Guidelines",
      description: "World Health Organization laboratory biosafety standards",
      requirements: ["Containment Levels", "Risk Assessment", "Waste Management", "Training Requirements"],
      applications: ["Pathogen Handling", "GMO Research", "Clinical Samples", "Vaccine Production"]
    },
    {
      standard: "NSF/ANSI Standards",
      description: "National Sanitation Foundation equipment standards",
      requirements: ["Performance Testing", "Certification", "Installation Requirements", "Maintenance Protocols"],
      applications: ["Biosafety Cabinets", "Fume Hoods", "Clean Rooms", "Laboratory Design"]
    }
  ];

  const riskCategories = [
    {
      risk: "Chemical Hazards",
      description: "Protection from toxic, corrosive, and reactive chemicals",
      controls: ["Chemical Storage", "Fume Extraction", "PPE Selection", "Spill Response"],
      equipment: ["Chemical Storage Cabinets", "Fume Hoods", "Chemical Resistant Gloves", "Acid Storage"]
    },
    {
      risk: "Biological Hazards",
      description: "Containment of infectious agents and biological materials",
      controls: ["Biosafety Levels", "Containment Systems", "Decontamination", "Waste Treatment"],
      equipment: ["Biosafety Cabinets", "Autoclaves", "UV Sterilizers", "Biological Indicators"]
    },
    {
      risk: "Physical Hazards",
      description: "Protection from mechanical, thermal, and radiation hazards",
      controls: ["Machine Guarding", "Temperature Control", "Radiation Shielding", "Noise Control"],
      equipment: ["Safety Interlocks", "Thermal Protection", "Lead Shielding", "Sound Enclosures"]
    },
    {
      risk: "Fire & Explosion",
      description: "Prevention and suppression of fires and explosions",
      controls: ["Ignition Prevention", "Fire Detection", "Suppression Systems", "Evacuation Plans"],
      equipment: ["Fire Suppressors", "Explosion-Proof Equipment", "Grounding Systems", "Static Eliminators"]
    }
  ];

  const certifications = [
    { cert: "NSF/ANSI 49", description: "Biosafety Cabinetry Standard" },
    { cert: "ASHRAE 110", description: "Fume Hood Performance Standard" },
    { cert: "UL Listed", description: "Safety Equipment Certification" },
    { cert: "CE Marking", description: "European Conformity Standards" },
    { cert: "ISO 14644", description: "Cleanroom Standards" },
    { cert: "NFPA Standards", description: "Fire Protection Codes" }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Laboratory Safety Solutions - Safety Cabinets, Fume Hoods, PPE - Biolegend Scientific Ltd"
        description="Comprehensive laboratory safety equipment including biosafety cabinets, fume hoods, PPE, and emergency equipment. OSHA compliant safety solutions."
        keywords="laboratory safety, biosafety cabinets, fume hoods, PPE, emergency equipment, chemical safety, biological safety, laboratory ventilation"
        url="https://biolegendscientific.co.ke/services/safety-solutions"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/services" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Laboratory Safety Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Comprehensive safety equipment and risk management solutions for laboratory environments
              </p>
            </div>
          </div>
        </section>

        {/* Safety Categories Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Safety Equipment Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete range of safety equipment for laboratory protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {safetyCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-orange-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {category.icon}
                      <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                        {category.category}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-orange-600">Equipment Types:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.equipment.map((item, idx) => (
                          <span key={idx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-md text-xs">
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

        {/* Risk Management Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Laboratory Risk Management
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Systematic approach to identifying and controlling laboratory hazards
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {riskCategories.map((risk, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-700">
                      {risk.risk}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {risk.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-orange-600 mb-2">Control Measures:</h4>
                      <div className="space-y-1">
                        {risk.controls.map((control, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {control}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-orange-600 mb-2">Safety Equipment:</h4>
                      <div className="flex flex-wrap gap-1">
                        {risk.equipment.map((equip, idx) => (
                          <span key={idx} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-md text-xs">
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

        {/* Safety Standards Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Safety Standards & Compliance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meeting international safety standards and regulatory requirements
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {safetyStandards.map((standard, index) => (
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
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-green-600 mb-2">Key Requirements:</h4>
                      <div className="space-y-1">
                        {standard.requirements.map((req, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-green-600 mb-2">Applications:</h4>
                      <div className="space-y-1">
                        {standard.applications.map((app, idx) => (
                          <span key={idx} className="block bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs">
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

        {/* Certifications Section */}
        <section className="py-20 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Equipment Certifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Certified safety equipment meeting international standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-700">
                      {cert.cert}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-orange-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ensure Laboratory Safety Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our safety specialists for comprehensive laboratory safety solutions and risk assessments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Get Safety Assessment
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Safety Equipment Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SafetySolutions;
