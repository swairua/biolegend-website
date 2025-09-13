import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, BookOpen, Users, Award, Microscope, TestTube } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const educationLevels = [
    {
      level: "Primary & Secondary Schools",
      description: "Basic laboratory equipment for fundamental science education",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      equipment: ["Basic Microscopes", "Simple Glassware", "pH Test Kits", "Digital Balances", "Safety Equipment"]
    },
    {
      level: "Universities & Colleges",
      description: "Advanced instruments for comprehensive scientific education",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      equipment: ["Research Microscopes", "Analytical Balances", "Spectrophotometers", "Centrifuges", "Laboratory Furniture"]
    },
    {
      level: "Technical & Vocational Schools",
      description: "Practical training equipment for technical skills development",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      equipment: ["Training Kits", "Portable Instruments", "Field Testing Equipment", "Demonstration Models"]
    },
    {
      level: "Research Universities",
      description: "Cutting-edge instruments for advanced research and development",
      icon: <Award className="w-6 h-6 text-blue-600" />,
      equipment: ["Advanced Microscopy", "High-Precision Balances", "Automated Systems", "Data Loggers"]
    }
  ];

  const subjects = [
    {
      subject: "Biology & Life Sciences",
      icon: <Microscope className="w-6 h-6 text-green-600" />,
      equipment: ["Compound Microscopes", "Stereo Microscopes", "Incubators", "Water Baths", "pH Meters"],
      applications: ["Cell Biology", "Microbiology", "Ecology", "Genetics", "Physiology"]
    },
    {
      subject: "Chemistry",
      icon: <TestTube className="w-6 h-6 text-purple-600" />,
      equipment: ["Analytical Balances", "Hot Plates", "Fume Hoods", "Glassware Sets", "Titration Equipment"],
      applications: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry"]
    },
    {
      subject: "Physics & Engineering",
      icon: <Award className="w-6 h-6 text-orange-600" />,
      equipment: ["Digital Multimeters", "Oscilloscopes", "Power Supplies", "Measurement Tools", "Testing Equipment"],
      applications: ["Electronics", "Mechanics", "Thermodynamics", "Optics", "Materials Science"]
    }
  ];

  const benefits = [
    {
      title: "Hands-On Learning",
      description: "Practical experience with real laboratory equipment",
      icon: "🔬"
    },
    {
      title: "Career Preparation",
      description: "Industry-standard tools prepare students for professional careers",
      icon: "🎯"
    },
    {
      title: "STEM Excellence",
      description: "Enhanced science, technology, engineering, and mathematics education",
      icon: "🧪"
    },
    {
      title: "Research Skills",
      description: "Development of critical thinking and analytical abilities",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Education Solutions - Laboratory Equipment for Schools & Universities - Biolegend Scientific Ltd"
        description="Comprehensive laboratory equipment and solutions for educational institutions. From primary schools to research universities, we provide quality instruments for science education."
        keywords="education laboratory equipment, school science equipment, university laboratory, educational microscopes, student laboratory"
        url="https://biolegendscientific.co.ke/industries/education"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link to="/industries" className="inline-flex items-center text-white/90 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Industries
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Education Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Empowering the next generation of scientists with quality laboratory equipment and educational solutions
              </p>
            </div>
          </div>
        </section>

        {/* Education Levels Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Solutions for Every Education Level
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored laboratory equipment packages for different educational stages
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {educationLevels.map((level, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-blue-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {level.icon}
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {level.level}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {level.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-blue-600">Essential Equipment:</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.equipment.map((item, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
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

        {/* Subject Areas Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Subject-Specific Equipment
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized laboratory equipment for different scientific disciplines
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {subject.icon}
                      <CardTitle className="text-lg">
                        {subject.subject}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Equipment:</h4>
                      <div className="space-y-1">
                        {subject.equipment.map((item, idx) => (
                          <span key={idx} className="block text-sm text-muted-foreground">
                            • {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {subject.applications.map((app, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
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

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Benefits of Quality Laboratory Equipment in Education
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enhance Your Educational Laboratory?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our education specialists for customized laboratory solutions and competitive educational pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Educational Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Demonstration
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
