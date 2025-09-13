import { Link } from "react-router-dom";
import { GraduationCap, Heart, Coffee, Building, FlaskConical, Leaf, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const IndustriesUpdated = () => {
  const industries = [
    {
      name: "Education",
      description: "Complete laboratory solutions for schools, colleges, and universities. From basic teaching equipment to advanced research instruments.",
      icon: <GraduationCap className="w-12 h-12 text-biolegend-purple" />,
      slug: "education",
      features: ["Teaching Laboratory Sets", "Student Microscopes", "Basic Chemical Kits", "Safety Equipment", "Educational Water Testing"],
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Healthcare & Medical",
      description: "Medical and clinical laboratory equipment for hospitals, clinics, and diagnostic centers. Ensuring accurate healthcare diagnostics.",
      icon: <Heart className="w-12 h-12 text-biolegend-purple" />,
      slug: "healthcare", 
      features: ["Clinical Analyzers", "Diagnostic Kits", "Medical Microscopes", "Lab Safety Equipment", "Quality Control Standards"],
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Pharmaceutical & Biopharmaceutical",
      description: "Specialized equipment and materials for pharmaceutical research, development, and quality control laboratories.",
      icon: <FlaskConical className="w-12 h-12 text-biolegend-purple" />,
      slug: "pharmaceutical",
      features: ["Reference Standards", "Analytical Testing", "Quality Control", "Method Validation", "Regulatory Compliance"],
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Food and Beverages",
      description: "Food safety testing and quality assurance equipment for the food industry. Maintaining high standards in food production.",
      icon: <Coffee className="w-12 h-12 text-biolegend-purple" />,
      slug: "food-beverages",
      features: ["Food Safety Testing", "Nutritional Analysis", "Microbiological Testing", "Water Quality Control", "Packaging Testing"],
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Research Institutions",
      description: "Advanced research equipment and solutions for universities, government labs, and private research facilities.",
      icon: <Building className="w-12 h-12 text-biolegend-purple" />,
      slug: "research-institutions",
      features: ["Research Instruments", "Analytical Equipment", "Life Sciences Products", "Custom Solutions", "Technical Support"],
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Environmental & Water",
      description: "Environmental monitoring and water quality testing solutions for environmental protection and compliance.",
      icon: <Leaf className="w-12 h-12 text-biolegend-purple" />,
      slug: "environmental",
      features: ["Water Quality Testing", "Environmental Monitoring", "Pollution Control", "Compliance Testing", "Field Testing Kits"],
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const additionalIndustries = [
    "Third Party Testing Laboratories",
    "Agrochemical Industry", 
    "Herbal and Animal Health",
    "Textile and Cosmetics",
    "Petrochemical Analysis",
    "Forensic Laboratories"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Industries We Serve - Laboratory Solutions for Multiple Sectors | Biolegend Scientific"
        description="Specialized laboratory solutions for education, healthcare, pharmaceutical, food, research, and environmental industries in Kenya."
        keywords="education laboratory, medical laboratory equipment, pharmaceutical testing, food safety testing, research instruments, environmental monitoring"
        url="https://biolegendscientific.co.ke/industries"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Specialized laboratory solutions tailored for your industry needs across multiple sectors
              </p>
            </div>
          </div>
        </section>

        {/* Main Industries Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Primary Industry Sectors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive laboratory solutions across diverse industries with specialized expertise
              </p>
            </div>

            <div className="space-y-16">
              {industries.map((industry, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card className="h-full border-2 hover:border-biolegend-purple/20 transition-colors">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          {industry.icon}
                          <CardTitle className="text-2xl md:text-3xl text-biolegend-purple">
                            {industry.name}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-lg text-muted-foreground">
                          {industry.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-foreground">Key Solutions:</h4>
                          <ul className="space-y-2">
                            {industry.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-muted-foreground">
                                <ArrowRight className="w-4 h-4 mr-2 text-biolegend-yellow flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Link to={`/industries/${industry.slug}`}>
                            <Button className="w-full mt-6 bg-biolegend-purple hover:bg-biolegend-purple/90">
                              Learn More About {industry.name}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img 
                      src={industry.image} 
                      alt={`${industry.name} laboratory solutions`}
                      className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-elegant"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Industries */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Additional Industry Sectors
              </h2>
              <p className="text-lg text-muted-foreground">
                We also serve these specialized industry sectors with tailored laboratory solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalIndustries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow">
                  <ArrowRight className="w-8 h-8 text-biolegend-yellow mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Cross-Industry Applications
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our laboratory solutions support critical applications across all industry sectors, 
                  ensuring quality, compliance, and innovation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quality Control & Testing</h3>
                      <p className="text-muted-foreground">Ensuring product quality and regulatory compliance across all sectors</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Research & Development</h3>
                      <p className="text-muted-foreground">Supporting innovation and new product development initiatives</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Regulatory Compliance</h3>
                      <p className="text-muted-foreground">Meeting international standards and regulatory requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRight className="w-6 h-6 text-biolegend-yellow mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Educational Training</h3>
                      <p className="text-muted-foreground">Supporting education and skill development in scientific fields</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-primary p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Industry Expertise</h3>
                <p className="mb-6">
                  Our team combines deep technical knowledge with industry-specific expertise 
                  to provide solutions that meet your unique requirements.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-biolegend-yellow" />
                    Application-specific solutions
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-biolegend-yellow" />
                    Technical consultation
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-biolegend-yellow" />
                    Installation & training
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-biolegend-yellow" />
                    Ongoing support
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                    Discuss Your Needs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-biolegend-yellow py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-biolegend-purple mb-6">
              Ready to Enhance Your Laboratory?
            </h2>
            <p className="text-xl text-biolegend-purple/80 mb-8 max-w-2xl mx-auto">
              Let our industry experts help you select the right equipment and solutions for your specific sector requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-biolegend-purple text-white hover:bg-biolegend-purple/90">
                  Request Industry Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-biolegend-purple text-biolegend-purple hover:bg-biolegend-purple/10">
                  View All Products & Services
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

export default IndustriesUpdated;
