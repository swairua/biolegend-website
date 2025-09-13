import { Link } from "react-router-dom";
import { GraduationCap, Heart, Building2, Coffee, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Industries = () => {
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
      name: "Health",
      description: "Medical and clinical laboratory equipment for hospitals, clinics, and diagnostic centers. Ensuring accurate healthcare diagnostics.",
      icon: <Heart className="w-12 h-12 text-biolegend-purple" />,
      slug: "health", 
      features: ["Clinical Analyzers", "Diagnostic Kits", "Medical Microscopes", "Lab Safety Equipment", "Quality Control Standards"],
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Construction",
      description: "Material testing and quality control equipment for construction projects. Ensuring building materials meet required standards.",
      icon: <Building2 className="w-12 h-12 text-biolegend-purple" />,
      slug: "construction",
      features: ["Concrete Testing", "Soil Analysis", "Water Quality Testing", "Material Strength Testing", "Environmental Monitoring"],
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Food and Beverages",
      description: "Food safety testing and quality assurance equipment for the food industry. Maintaining high standards in food production.",
      icon: <Coffee className="w-12 h-12 text-biolegend-purple" />,
      slug: "food-beverages",
      features: ["Food Safety Testing", "Nutritional Analysis", "Microbiological Testing", "Water Quality Control", "Packaging Testing"],
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Industries We Serve - Education, Health, Construction & Food - Biolegend Scientific"
        description="Laboratory solutions for education, healthcare, construction, and food industries in Kenya. Specialized equipment and services for each sector."
        keywords="education laboratory, medical laboratory equipment, construction testing, food safety testing, Kenya laboratory solutions, healthcare diagnostics"
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
                Specialized laboratory solutions tailored for your industry needs
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Call to Action */}
        <section className="bg-biolegend-yellow py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-biolegend-purple mb-6">
              Ready to Enhance Your Laboratory?
            </h2>
            <p className="text-xl text-biolegend-purple/80 mb-8 max-w-2xl mx-auto">
              Let our experts help you select the right equipment for your industry requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-biolegend-purple text-white hover:bg-biolegend-purple/90">
                  Request Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-biolegend-purple text-biolegend-purple hover:bg-biolegend-purple/10">
                View All Products
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;
