import { Link } from "react-router-dom";
import { ArrowLeft, Microscope, FlaskConical, Award, Users, BookOpen, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchInstitutions = () => {
  const researchAreas = [
    {
      area: "Biomedical Research",
      description: "Advanced instrumentation for life sciences and medical research",
      icon: <Microscope className="w-6 h-6 text-purple-600" />,
      equipment: ["Confocal Microscopes", "Flow Cytometers", "PCR Systems", "Protein Analyzers", "Cell Culture Equipment"]
    },
    {
      area: "Materials Science",
      description: "Characterization and analysis of advanced materials",
      icon: <FlaskConical className="w-6 h-6 text-purple-600" />,
      equipment: ["SEM/TEM", "XRD Systems", "FTIR Spectrometers", "Thermal Analyzers", "Mechanical Testers"]
    },
    {
      area: "Environmental Research",
      description: "Environmental monitoring and sustainability studies",
      icon: <Award className="w-6 h-6 text-purple-600" />,
      equipment: ["Water Quality Analyzers", "Air Monitoring", "Soil Testing Kits", "Weather Stations", "Samplers"]
    },
    {
      area: "Agricultural Research",
      description: "Crop science and agricultural development research",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      equipment: ["Plant Growth Chambers", "Soil Analyzers", "Seed Testers", "Climate Controllers", "Field Equipment"]
    }
  ];

  const institutionTypes = [
    {
      type: "Government Research Labs",
      description: "National and regional research institutes",
      focus: ["Public Health", "Agriculture", "Environmental Monitoring", "Standards Development"],
      needs: ["High-throughput Equipment", "Standardized Methods", "Validation Protocols", "Multi-user Systems"]
    },
    {
      type: "Private Research Centers",
      description: "Corporate R&D facilities and contract research organizations",
      focus: ["Product Development", "Quality Control", "Innovation", "Competitive Research"],
      needs: ["Cutting-edge Technology", "Flexible Systems", "Rapid Results", "Proprietary Methods"]
    },
    {
      type: "International Organizations",
      description: "WHO, FAO, and other international research bodies",
      focus: ["Global Standards", "Capacity Building", "Technology Transfer", "Method Harmonization"],
      needs: ["Portable Equipment", "Training Programs", "Remote Support", "Standardized Protocols"]
    },
    {
      type: "Non-Profit Research",
      description: "Foundations and charitable research organizations",
      focus: ["Disease Research", "Social Impact", "Open Science", "Collaborative Research"],
      needs: ["Cost-effective Solutions", "Shared Resources", "Grant Funding Support", "Educational Discounts"]
    }
  ];

  const researchCapabilities = [
    {
      capability: "Advanced Microscopy",
      description: "High-resolution imaging and analysis",
      techniques: ["Confocal Microscopy", "Super-resolution", "Live Cell Imaging", "Cryo-EM", "Multi-photon"],
      applications: ["Cell Biology", "Neuroscience", "Materials", "Nanotechnology"]
    },
    {
      capability: "Molecular Analysis",
      description: "Genomics, proteomics, and metabolomics research",
      techniques: ["Next-gen Sequencing", "Mass Spectrometry", "NMR", "Chromatography", "Electrophoresis"],
      applications: ["Drug Discovery", "Biomarkers", "Personalized Medicine", "Systems Biology"]
    },
    {
      capability: "Chemical Analysis",
      description: "Advanced analytical chemistry capabilities",
      techniques: ["HPLC-MS", "GC-MS", "ICP-MS", "XPS", "Raman Spectroscopy"],
      applications: ["Environmental", "Forensics", "Quality Control", "Method Development"]
    },
    {
      capability: "Data Analysis",
      description: "Computational and statistical analysis tools",
      techniques: ["Bioinformatics", "Statistical Software", "Machine Learning", "Image Analysis", "Data Mining"],
      applications: ["Big Data", "Pattern Recognition", "Predictive Modeling", "Visualization"]
    }
  ];

  const collaborationBenefits = [
    {
      benefit: "Technology Access",
      description: "Access to cutting-edge instrumentation without full purchase cost",
      features: ["Shared Equipment", "Service Contracts", "Leasing Options", "Upgrade Programs"]
    },
    {
      benefit: "Training & Support",
      description: "Comprehensive training programs for research staff",
      features: ["Hands-on Training", "Online Courses", "Technical Support", "Method Development"]
    },
    {
      benefit: "Grant Support",
      description: "Assistance with funding applications and budget planning",
      features: ["Grant Writing", "Budget Planning", "Equipment Justification", "ROI Analysis"]
    },
    {
      benefit: "Networking",
      description: "Connections with other research institutions and industry",
      features: ["Research Partnerships", "User Groups", "Conferences", "Best Practice Sharing"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Research Institutions Laboratory Solutions - Advanced Scientific Equipment - Biolegend Scientific Ltd"
        description="Comprehensive laboratory solutions for research institutions. Advanced microscopy, molecular analysis, and specialized equipment for cutting-edge scientific research."
        keywords="research laboratory equipment, scientific instruments, advanced microscopy, molecular analysis, research institutions"
        url="https://biolegendscientific.co.ke/industries/research-institutions"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/industries" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Industries
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Research Institutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Advanced scientific instrumentation for cutting-edge research and discovery
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Research Disciplines
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized equipment for diverse research fields and applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {researchAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-purple-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {area.icon}
                      <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                        {area.area}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-purple-600">Advanced Equipment:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {area.equipment.map((item, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs">
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

        {/* Institution Types Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Types of Research Institutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored solutions for different research organization types
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {institutionTypes.map((institution, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700">
                      {institution.type}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {institution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Research Focus:</h4>
                      <div className="space-y-1">
                        {institution.focus.map((focus, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Equipment Needs:</h4>
                      <div className="flex flex-wrap gap-1">
                        {institution.needs.map((need, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs">
                            {need}
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

        {/* Research Capabilities Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advanced Research Capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                State-of-the-art analytical and imaging technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {researchCapabilities.map((capability, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-700">
                      {capability.capability}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {capability.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Techniques:</h4>
                      <div className="flex flex-wrap gap-2">
                        {capability.techniques.map((tech, idx) => (
                          <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-purple-600 mb-2">Applications:</h4>
                      <div className="space-y-1">
                        {capability.applications.map((app, idx) => (
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

        {/* Collaboration Benefits Section */}
        <section className="py-20 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partnership Benefits
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support for your research objectives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collaborationBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Zap className="w-6 h-6 text-orange-600" />
                      <CardTitle className="text-lg text-orange-700">
                        {benefit.benefit}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground text-sm">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {benefit.features.map((feature, idx) => (
                        <span key={idx} className="block bg-orange-50 text-orange-700 px-2 py-1 rounded-md text-sm">
                          {feature}
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
        <section className="bg-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advance Your Research with Cutting-Edge Equipment
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our research specialists for advanced instrumentation and collaborative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Research Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Partnership Opportunities
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResearchInstitutions;
