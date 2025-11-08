import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Facebook, Linkedin, Twitter, Microscope, Droplets, Sprout, Milk, Leaf, Scale, Eye, TestTube, Beaker, Thermometer, Filter, Stethoscope, Shield, FlaskConical, BookOpen, ShieldAlert, LifeBuoy, Headset, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);

  const services = [
    { name: "Scientific Equipment", slug: "scientific-equipment", icon: <Microscope className="w-4 h-4 text-biolegend-purple"/> },
    { name: "Water Testing Solutions", slug: "water-testing", icon: <Droplets className="w-4 h-4 text-blue-600"/> },
    { name: "Plant Tissue Culture", slug: "plant-tissue-culture", icon: <Sprout className="w-4 h-4 text-green-600"/> },
    { name: "Dairy Testing & Equipment", slug: "dairy-testing", icon: <Milk className="w-4 h-4 text-amber-600"/> },
    { name: "Soil Testing Solutions", slug: "soil-testing", icon: <Leaf className="w-4 h-4 text-green-700"/> },
    { name: "Weighing Balances", slug: "weighing-balances", icon: <Scale className="w-4 h-4 text-purple-700"/> },
    { name: "Microscopy Solutions", slug: "microscopy", icon: <Eye className="w-4 h-4 text-pink-600"/> },
    { name: "Laboratory Glassware", slug: "laboratory-glassware", icon: <Beaker className="w-4 h-4 text-cyan-700"/> },
    { name: "Medical Refrigerators", slug: "medical-refrigerators", icon: <Thermometer className="w-4 h-4 text-sky-700"/> },
    { name: "Filtration Solutions", slug: "filtration", icon: <Filter className="w-4 h-4 text-emerald-700"/> },
    { name: "Diagnostic & Medical Solutions", slug: "diagnostic-medical", icon: <Stethoscope className="w-4 h-4 text-red-600"/> },
    { name: "Laboratory Chemicals", slug: "laboratory-chemicals", icon: <FlaskConical className="w-4 h-4 text-indigo-700"/> },
    { name: "Safety Solutions", slug: "safety-solutions", icon: <Shield className="w-4 h-4 text-orange-600"/> },
    { name: "Glassware & Consumables", slug: "glassware-consumables", icon: <Beaker className="w-4 h-4 text-cyan-700"/> },
    { name: "Chemicals & Reagents", slug: "chemicals-reagents", icon: <TestTube className="w-4 h-4 text-indigo-600"/> },
    { name: "Chemical Reference Standards", slug: "chemical-reference-standards", icon: <BookOpen className="w-4 h-4 text-slate-700"/> },
    { name: "Chromatography Solutions", slug: "chromatography-solutions", icon: <Filter className="w-4 h-4 text-emerald-700"/> },
    { name: "Laboratory Instruments & Equipment", slug: "laboratory-instruments", icon: <Microscope className="w-4 h-4 text-biolegend-purple"/> },
    { name: "Life Sciences Products", slug: "life-sciences-products", icon: <FlaskConical className="w-4 h-4 text-purple-700"/> }
  ];

  const industries = [
    { name: "Education", slug: "education", icon: <BookOpen className="w-4 h-4 text-biolegend-purple"/> },
    { name: "Healthcare & Medical", slug: "healthcare", icon: <Stethoscope className="w-4 h-4 text-red-600"/> },
    { name: "Pharmaceutical & Biopharmaceutical", slug: "pharmaceutical", icon: <FlaskConical className="w-4 h-4 text-indigo-700"/> },
    { name: "Food and Beverages", slug: "food-beverages", icon: <Beaker className="w-4 h-4 text-amber-700"/> },
    { name: "Research Institutions", slug: "research-institutions", icon: <Microscope className="w-4 h-4 text-biolegend-purple"/> },
    { name: "Environmental & Water", slug: "environmental", icon: <Leaf className="w-4 h-4 text-green-700"/> }
  ];

  const policies = [
    { name: "Anti-Bribery & Corruption", slug: "anti-bribery", icon: <ShieldAlert className="w-4 h-4 text-red-600"/> },
    { name: "Business Continuity Plan", slug: "business-continuity", icon: <LifeBuoy className="w-4 h-4 text-sky-600"/> },
    { name: "Customer Service", slug: "customer-service", icon: <Headset className="w-4 h-4 text-purple-600"/> },
    { name: "HSE Policy", slug: "health-safety-environment", icon: <Leaf className="w-4 h-4 text-green-700"/> },
    { name: "Environmental Sustainability", slug: "environmental-sustainability", icon: <Leaf className="w-4 h-4 text-emerald-700"/> },
    { name: "Ethical Policy", slug: "ethical-policy", icon: <Scale className="w-4 h-4 text-amber-700"/> },
    { name: "Grievance Mechanism", slug: "grievance-mechanism", icon: <Megaphone className="w-4 h-4 text-pink-600"/> }
  ];

  return (
    <header className="shadow-elegant sticky top-0 z-50">
      {/* Social Media Bar */}
      <div className="bg-biolegend-purple/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/biolegendscientific.co.ke" target="_blank" rel="noopener noreferrer" className="text-white hover:text-biolegend-yellow transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/biolegend-scientific-934b1937b" target="_blank" rel="noopener noreferrer" className="text-white hover:text-biolegend-yellow transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/BIOLEGENDSLTD?t=bsDNtEINWzlYbUk0fv-AqA&s=08" target="_blank" rel="noopener noreferrer" className="text-white hover:text-biolegend-yellow transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="hidden md:block">
              <Input 
                placeholder="Search" 
                className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32 md:h-36">
            {/* Logo and Badge */}
            <div className="flex-shrink-0 flex items-center gap-2 md:gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fcbe5d68584504715befd11df22888633%2F7ae1ac41b01644408c45b8bf1c19b281?format=webp&width=800"
                alt="Biolegend Scientific Ltd Logo"
                className="h-28 md:h-32 w-auto"
              />
              <img
                src="/blue-company-badge.svg"
                alt="Corruption Free - A Certified Blue Company Member"
                className="h-20 md:h-24 w-auto"
                title="Certified Blue Company - Corruption Free Member"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="/" className="text-foreground hover:text-biolegend-purple font-medium transition-colors">
                  Home
                </a>
                
                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    className="text-foreground hover:text-biolegend-purple font-medium flex items-center transition-colors"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isServicesOpen && (
                    <div
                      className="absolute top-full right-0 mt-2 w-[820px] bg-white/95 backdrop-blur rounded-xl shadow-elegant border z-50 p-4"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="absolute -top-2 right-10 w-4 h-4 bg-white rotate-45 border-l border-t"></div>
                      <div className="flex items-center justify-between px-2 pb-3 border-b">
                        <a href="/services" className="text-sm font-semibold text-biolegend-purple hover:underline inline-flex items-center">
                          View All Services
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                        <span className="text-xs text-muted-foreground">Explore categories</span>
                      </div>
                      <div className="pt-3 grid grid-cols-3 lg:grid-cols-4 gap-2">
                        {services.map((service, index) => (
                          <a
                            key={index}
                            href={`/services/${service.slug}`}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-foreground rounded-md hover:bg-biolegend-yellow/10 hover:text-biolegend-purple transition-colors"
                          >
                            {service.icon}
                            <span className="truncate">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Industries Dropdown */}
                <div className="relative">
                  <button
                    className="text-foreground hover:text-biolegend-purple font-medium flex items-center transition-colors"
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    Industries
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isIndustriesOpen && (
                    <div
                      className="absolute top-full right-0 mt-2 w-[680px] bg-white/95 backdrop-blur rounded-xl shadow-elegant border z-50 p-4"
                      onMouseEnter={() => setIsIndustriesOpen(true)}
                      onMouseLeave={() => setIsIndustriesOpen(false)}
                    >
                      <div className="absolute -top-2 right-10 w-4 h-4 bg-white rotate-45 border-l border-t"></div>
                      <div className="flex items-center justify-between px-2 pb-3 border-b">
                        <a href="/industries" className="text-sm font-semibold text-biolegend-purple hover:underline inline-flex items-center">
                          View All Industries
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                        <span className="text-xs text-muted-foreground">Sectors we serve</span>
                      </div>
                      <div className="pt-3 grid grid-cols-2 lg:grid-cols-3 gap-2">
                        {industries.map((industry, index) => (
                          <a
                            key={index}
                            href={`/industries/${industry.slug}`}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-foreground rounded-md hover:bg-biolegend-yellow/10 hover:text-biolegend-purple transition-colors"
                          >
                            {industry.icon}
                            <span className="truncate">{industry.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Policies Dropdown */}
                <div className="relative">
                  <button
                    className="text-foreground hover:text-biolegend-purple font-medium flex items-center transition-colors"
                    onMouseEnter={() => setIsPoliciesOpen(true)}
                    onMouseLeave={() => setIsPoliciesOpen(false)}
                  >
                    Policies
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isPoliciesOpen && (
                    <div
                      className="absolute top-full right-0 mt-2 w-[640px] bg-white/95 backdrop-blur rounded-xl shadow-elegant border z-50 p-4"
                      onMouseEnter={() => setIsPoliciesOpen(true)}
                      onMouseLeave={() => setIsPoliciesOpen(false)}
                    >
                      <div className="absolute -top-2 right-10 w-4 h-4 bg-white rotate-45 border-l border-t"></div>
                      <div className="flex items-center justify-between px-2 pb-3 border-b">
                        <a href="/policies" className="text-sm font-semibold text-biolegend-purple hover:underline inline-flex items-center">
                          View All Policies
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                        <span className="text-xs text-muted-foreground">Company policies</span>
                      </div>
                      <div className="pt-3 grid grid-cols-2 lg:grid-cols-2 gap-2">
                        {policies.map((policy, index) => (
                          <a
                            key={index}
                            href={`/policies/${policy.slug}`}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-foreground rounded-md hover:bg-biolegend-yellow/10 hover:text-biolegend-purple transition-colors"
                          >
                            {policy.icon}
                            <span className="truncate">{policy.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a href="/contact" className="text-foreground hover:text-biolegend-purple font-medium transition-colors">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-biolegend-purple"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <a href="#home" className="block px-3 py-2 text-foreground hover:text-biolegend-purple font-medium">
                  Home
                </a>
                <div className="px-3 py-2">
                  <p className="text-biolegend-purple font-semibold mb-2">Services</p>
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between py-1 text-sm text-muted-foreground hover:text-biolegend-purple pl-4 pr-2"
                    >
                      <span>{service.name}</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ))}
                </div>
                <div className="px-3 py-2">
                  <p className="text-biolegend-purple font-semibold mb-2">Industries</p>
                  {industries.map((industry, index) => (
                    <a
                      key={index}
                      href={`/industries/${industry.slug}`}
                      className="flex items-center justify-between py-1 text-sm text-muted-foreground hover:text-biolegend-purple pl-4 pr-2"
                    >
                      <span>{industry.name}</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ))}
                </div>
                <div className="px-3 py-2">
                  <p className="text-biolegend-purple font-semibold mb-2">Policies</p>
                  {policies.map((policy, index) => (
                    <a
                      key={index}
                      href={`/policies/${policy.slug}`}
                      className="flex items-center justify-between py-1 text-sm text-muted-foreground hover:text-biolegend-purple pl-4 pr-2"
                    >
                      <span>{policy.name}</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  ))}
                </div>
                <a href="#contact" className="block px-3 py-2 text-foreground hover:text-biolegend-purple font-medium">
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
