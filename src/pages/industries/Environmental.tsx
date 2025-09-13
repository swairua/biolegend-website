import { Link } from "react-router-dom";
import { ArrowLeft, Droplets, Leaf, Earth, Wind, TestTube, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Environmental = () => {
  const environmentalSectors = [
    {
      sector: "Water Quality Monitoring",
      description: "Comprehensive water testing for various sources and applications",
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
      equipment: ["Water Quality Meters", "Turbidity Meters", "Chlorine Analyzers", "BOD/COD Testers", "pH Controllers"]
    },
    {
      sector: "Air Quality Assessment",
      description: "Monitoring atmospheric pollutants and air quality parameters",
      icon: <Wind className="w-6 h-6 text-blue-600" />,
      equipment: ["Particulate Monitors", "Gas Analyzers", "Weather Stations", "Emission Analyzers", "Dust Monitors"]
    },
    {
      sector: "Soil & Land Analysis",
      description: "Soil contamination assessment and agricultural monitoring",
      icon: <Leaf className="w-6 h-6 text-blue-600" />,
      equipment: ["Soil Test Kits", "Heavy Metal Analyzers", "pH Meters", "Conductivity Meters", "Nutrient Analyzers"]
    },
    {
      sector: "Environmental Compliance",
      description: "Regulatory compliance and environmental impact assessment",
      icon: <Earth className="w-6 h-6 text-blue-600" />,
      equipment: ["Sampling Equipment", "Data Loggers", "Portable Analyzers", "Field Test Kits", "Calibration Standards"]
    }
  ];

  const waterTestingAreas = [
    {
      area: "Drinking Water",
      description: "Safety and quality testing for potable water supplies",
      parameters: ["pH", "Chlorine", "Turbidity", "Bacteria", "Heavy Metals", "Pesticides"],
      standards: ["WHO Guidelines", "National Standards", "EU Directives", "EPA Standards"]
    },
    {
      area: "Wastewater",
      description: "Treatment monitoring and discharge compliance",
      parameters: ["BOD", "COD", "TSS", "Nutrients", "Toxicity", "pH"],
      standards: ["Discharge Permits", "Treatment Standards", "Effluent Guidelines", "NPDES"]
    },
    {
      area: "Surface Water",
      description: "Rivers, lakes, and coastal water monitoring",
      parameters: ["Dissolved Oxygen", "Nutrients", "Temperature", "Conductivity", "Algae", "Pollutants"],
      standards: ["Water Framework Directive", "Clean Water Act", "Basin Management Plans"]
    },
    {
      area: "Groundwater",
      description: "Aquifer monitoring and contamination assessment",
      parameters: ["Contaminants", "Well Head Protection", "Saltwater Intrusion", "Pump Tests"],
      standards: ["Groundwater Directives", "Protection Zones", "Monitoring Programs"]
    }
  ];

  const environmentalApplications = [
    {
      application: "Environmental Impact Assessment",
      description: "Comprehensive environmental monitoring for development projects",
      monitoring: ["Baseline Studies", "Impact Prediction", "Mitigation Monitoring", "Post-project Assessment"],
      equipment: ["Multi-parameter Probes", "Portable Spectrophotometers", "Data Loggers", "Sampling Kits"]
    },
    {
      application: "Industrial Monitoring",
      description: "Continuous monitoring of industrial emissions and discharges",
      monitoring: ["Stack Emissions", "Process Water", "Ambient Air", "Noise Levels"],
      equipment: ["Online Analyzers", "Emission Monitors", "Water Quality Sensors", "Noise Meters"]
    },
    {
      application: "Emergency Response",
      description: "Rapid assessment during environmental incidents",
      monitoring: ["Spill Assessment", "Contamination Mapping", "Health Risk Evaluation", "Cleanup Verification"],
      equipment: ["Portable Analyzers", "Field Test Kits", "GPS Systems", "Real-time Monitors"]
    },
    {
      application: "Climate Monitoring",
      description: "Long-term environmental and climate data collection",
      monitoring: ["Weather Parameters", "GHG Emissions", "Ecosystem Health", "Biodiversity"],
      equipment: ["Weather Stations", "GHG Analyzers", "Remote Sensors", "Telemetry Systems"]
    }
  ];

  const regulations = [
    {
      authority: "EPA (US)",
      description: "Environmental Protection Agency regulations and standards",
      regulations: ["Clean Water Act", "Clean Air Act", "RCRA", "CERCLA", "SDWA"],
      requirements: ["Monitoring Programs", "Reporting", "Compliance Testing", "Method Validation"]
    },
    {
      authority: "EU Directives",
      description: "European environmental legislation and frameworks",
      regulations: ["Water Framework Directive", "Air Quality Directive", "REACH", "Industrial Emissions"],
      requirements: ["River Basin Management", "Air Quality Plans", "Chemical Registration", "BREF Documents"]
    },
    {
      authority: "ISO Standards",
      description: "International standards for environmental management",
      regulations: ["ISO 14001", "ISO 17025", "ISO 5667", "ISO 10304"],
      requirements: ["EMS Implementation", "Laboratory Accreditation", "Sampling Protocols", "Method Standards"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Environmental & Water Testing Solutions - Environmental Monitoring Equipment - Biolegend Scientific Ltd"
        description="Professional environmental monitoring equipment for water quality, air quality, soil testing, and compliance monitoring. EPA and EU compliant instruments."
        keywords="environmental monitoring, water testing, air quality, soil analysis, environmental compliance, EPA standards"
        url="https://biolegendscientific.co.ke/industries/environmental"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/industries" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Industries
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Environmental & Water
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Protecting our environment through precision monitoring and testing solutions
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Sectors Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Environmental Monitoring Sectors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive monitoring solutions for all environmental matrices
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {environmentalSectors.map((sector, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-teal-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {sector.icon}
                      <CardTitle className="text-xl group-hover:text-teal-600 transition-colors">
                        {sector.sector}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {sector.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-teal-600">Essential Equipment:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {sector.equipment.map((item, idx) => (
                          <span key={idx} className="bg-teal-100 text-teal-800 px-2 py-1 rounded-md text-xs">
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

        {/* Water Testing Areas Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Water Testing Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized testing for different water sources and uses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {waterTestingAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-700">
                      {area.area}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-blue-600 mb-2">Key Parameters:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.parameters.map((param, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-blue-600 mb-2">Standards:</h4>
                      <div className="space-y-1">
                        {area.standards.map((standard, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {standard}
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

        {/* Environmental Applications Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Environmental Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive monitoring for diverse environmental scenarios
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {environmentalApplications.map((app, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-700">
                      {app.application}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-green-600 mb-2">Monitoring Areas:</h4>
                      <div className="space-y-1">
                        {app.monitoring.map((monitor, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {monitor}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-green-600 mb-2">Equipment Required:</h4>
                      <div className="flex flex-wrap gap-1">
                        {app.equipment.map((equip, idx) => (
                          <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs">
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

        {/* Regulations Section */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Environmental Regulations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compliance with international environmental standards and regulations
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {regulations.map((reg, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Activity className="w-6 h-6 text-orange-600" />
                      <CardTitle className="text-lg text-orange-700">
                        {reg.authority}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {reg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-orange-600 mb-2">Key Regulations:</h4>
                      <div className="space-y-1">
                        {reg.regulations.map((regulation, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {regulation}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-orange-600 mb-2">Requirements:</h4>
                      <div className="space-y-1">
                        {reg.requirements.map((req, idx) => (
                          <span key={idx} className="block bg-orange-100 text-orange-800 px-2 py-1 rounded-md text-xs">
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
        <section className="bg-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Protect Our Environment with Accurate Monitoring
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our environmental specialists for comprehensive monitoring solutions and compliance support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                  Get Environmental Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Compliance Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Environmental;
