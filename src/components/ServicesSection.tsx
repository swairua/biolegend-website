import { Card, CardContent } from "@/components/ui/card";
import {
  Microscope,
  FlaskConical,
  TestTube,
  Thermometer,
  Scale,
  Beaker,
  Activity,
  Zap,
  ShoppingCart,
  Droplets,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      category: "Water Testing & Analysis",
      icon: <Droplets className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/8392542/pexels-photo-8392542.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Palintest", url: "https://www.palintest.com", isOfficial: true },
        { name: "Lovibond", url: "https://www.lovibond.com" },
        { name: "Hanna Instruments", url: "https://www.hannainst.com" }
      ],
      items: [
        "🇰🇪 Official Palintest Distributor",
        "Lovibond Color Measurement",
        "Hanna pH & EC Meters",
        "Pool & Spa Testing Solutions",
        "Environmental Water Analysis"
      ],
      color: "bg-blue-500"
    },
    {
      category: "Specialized Testing Solutions",
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "BioEndo", url: "https://www.bioendo.com" },
        { name: "Leztest", url: "https://letztest.com" },
        { name: "Gerber Instruments", url: "https://www.gerber-instruments.com" }
      ],
      items: [
        "BioEndo Endotoxin Kits",
        "Leztest Detection Systems",
        "Gerber Dairy Testing",
        "Rapid Quality Control",
        "Pharmaceutical Testing"
      ],
      color: "bg-red-500"
    },
    {
      category: "Food Safety Testing",
      icon: <TestTube className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/5760878/pexels-photo-5760878.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Gerber Instruments", url: "https://www.gerber-instruments.com" },
        { name: "Merck Millipore", url: "https://www.merck.com" }
      ],
      items: [
        "Gerber Dairy Analysis",
        "Food Safety Testing Kits",
        "Feed Safety Analysis",
        "Mycotoxin Detection",
        "Rapid Screening Methods"
      ],
      color: "bg-orange-500"
    },
    {
      category: "Laboratory Chemicals & Reagents",
      icon: <Beaker className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Merck Millipore", url: "https://www.merck.com" },
        { name: "Fisher Scientific", url: "https://www.fishersci.com" },
        { name: "Loba Chemie", url: "https://www.lobachemie.com" }
      ],
      items: [
        "Merck High-Purity Chemicals",
        "Fisher Scientific Reagents",
        "Loba Chemie Solvents",
        "Sigma-Aldrich Products",
        "Pharmaceutical Grade"
      ],
      color: "bg-green-500"
    },
    {
      category: "Microbiology & Cell Culture",
      icon: <Microscope className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Merck Millipore", url: "https://www.merck.com" },
        { name: "Duchefa Biochemie", url: "https://www.duchefa-biochemie.com" }
      ],
      items: [
        "MicroMedica Dehydrated Media",
        "Duchefa Plant Culture Media",
        "Merck Cell Culture Products",
        "Microbiology Testing Systems",
        "Diagnostic Reagents"
      ],
      color: "bg-violet-500"
    },
    {
      category: "Chemical Reference Standards",
      icon: <FlaskConical className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Merck Millipore", url: "https://www.merck.com" },
        { name: "Fisher Scientific", url: "https://www.fishersci.com" },
        { name: "Reagecon", url: "https://www.reagecon.com" }
      ],
      items: [
        "USP, BP & EP Standards",
        "Merck Reference Materials",
        "Reagecon pH Standards",
        "Working Standards",
        "Certified CRM Products"
      ],
      color: "bg-purple-500"
    },
    {
      category: "Chromatography & Filtration",
      icon: <Activity className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Merck Millipore", url: "https://www.merck.com" },
        { name: "CHMLab Group", url: "https://www.chmlab.com" },
        { name: "Hawach", url: "https://www.hawach.com" }
      ],
      items: [
        "Merck HPLC Columns",
        "CHMLab Filtration",
        "Hawach Filter Products",
        "SPE Cartridges",
        "Chromatography Accessories"
      ],
      color: "bg-indigo-500"
    },
    {
      category: "Scientific Equipment",
      icon: <Microscope className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Labtron", url: "https://www.labtron.com" },
        { name: "Biobase", url: "https://www.biobase.cc" },
        { name: "Dlab", url: "https://www.dlabsci.com" }
      ],
      items: [
        "Labtron Centrifuges",
        "Biobase Safety Cabinets",
        "Dlab Heating Equipment",
        "Analytical Balances",
        "Microscopes & Imaging"
      ],
      color: "bg-teal-500"
    },
    {
      category: "Plant Tissue Culture",
      icon: <TestTube className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Duchefa Biochemie", url: "https://www.duchefa-biochemie.com" },
        { name: "Merck Millipore", url: "https://www.merck.com" }
      ],
      items: [
        "Duchefa Culture Media",
        "Plant Growth Regulators",
        "Tissue Culture Supplies",
        "Specialized Chemicals",
        "Research Grade Products"
      ],
      color: "bg-pink-500"
    },
    {
      category: "Laboratory Glassware",
      icon: <TestTube className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/8471963/pexels-photo-8471963.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Pyrex", url: "https://www.pyrex.com" },
        { name: "Glassco", url: "https://www.glasscolabware.com" }
      ],
      items: [
        "Pyrex Heat-Resistant Glass",
        "Glassco Borosilicate",
        "Volumetric Glassware",
        "Sample Containers",
        "Laboratory Bottles"
      ],
      color: "bg-cyan-500"
    },
    {
      category: "Medical Equipment",
      icon: <Thermometer className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Hongshun Medical", url: "http://www.asian-medical.com" },
        { name: "Biobase", url: "https://www.biobase.cc" }
      ],
      items: [
        "Hongshun Medical Devices",
        "Biobase Diagnostics",
        "Clinical Analyzers",
        "Diagnostic Instruments",
        "Point-of-Care Testing"
      ],
      color: "bg-amber-500"
    },
    {
      category: "Safety Solutions",
      icon: <Scale className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      suppliers: [
        { name: "Biobase", url: "https://www.biobase.cc" },
        { name: "Labtron", url: "https://www.labtron.com" }
      ],
      items: [
        "Biobase Safety Cabinets",
        "Labtron Fume Hoods",
        "PPE Equipment",
        "Emergency Equipment",
        "Biosafety Solutions"
      ],
      color: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-muted/30" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Products & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of laboratory equipment, chemicals, and scientific supplies 
            to meet all your research and testing needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Service Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-3 right-3 ${service.color} text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-lg`}>
                  {service.icon}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-biolegend-purple transition-colors line-clamp-2">
                  {service.category}
                </h3>

                {/* Supplier Badges */}
                {service.suppliers && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">Our Partners:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.suppliers.map((supplier, supIndex) => (
                        <a
                          key={supIndex}
                          href={supplier.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/supplier"
                        >
                          <Badge
                            className={`text-xs ${supplier.isOfficial ? 'bg-biolegend-yellow text-biolegend-purple' : 'bg-blue-100 text-blue-800'} hover:scale-105 transition-transform cursor-pointer`}
                          >
                            {supplier.name}
                            {supplier.isOfficial && " 🇰🇪"}
                            <ExternalLink className="w-2 h-2 ml-1 opacity-0 group-hover/supplier:opacity-100 transition-opacity" />
                          </Badge>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Website Buttons for all suppliers */}
                {service.suppliers && (
                  <div className="mb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {service.suppliers.map((supplier, supIndex) => (
                        <Button
                          key={supIndex}
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(supplier.url, '_blank')}
                          className="w-full text-xs"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          {supplier.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-biolegend-yellow rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-center text-white shadow-elegant">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Something Specific?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              We work with multiple vendors and can source specialized equipment and supplies 
              tailored to your unique laboratory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90 font-semibold px-8 py-4 shadow-glow"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-biolegend-purple px-8 py-4"
              >
                Download Catalog
              </Button>
            </div>
          </div>
        </div>

        {/* Industry Focus */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <div className="text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-elegant transition-all duration-300">
            <div className="text-4xl mb-4">🎓</div>
            <h4 className="font-semibold text-foreground mb-2">Education</h4>
            <p className="text-sm text-muted-foreground">Universities, colleges, and research institutions</p>
          </div>

          <div className="text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-elegant transition-all duration-300">
            <div className="text-4xl mb-4">🏥</div>
            <h4 className="font-semibold text-foreground mb-2">Healthcare</h4>
            <p className="text-sm text-muted-foreground">Hospitals, clinics, and diagnostic centers</p>
          </div>

          <div className="text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-elegant transition-all duration-300">
            <div className="text-4xl mb-4">💊</div>
            <h4 className="font-semibold text-foreground mb-2">Pharmaceutical</h4>
            <p className="text-sm text-muted-foreground">Drug development and quality control</p>
          </div>

          <div className="text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-elegant transition-all duration-300">
            <div className="text-4xl mb-4">🍎</div>
            <h4 className="font-semibold text-foreground mb-2">Food & Beverages</h4>
            <p className="text-sm text-muted-foreground">Food safety and quality testing facilities</p>
          </div>

          <div className="text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-elegant transition-all duration-300">
            <div className="text-4xl mb-4">🔬</div>
            <h4 className="font-semibold text-foreground mb-2">Research</h4>
            <p className="text-sm text-muted-foreground">Research institutions and laboratories</p>
          </div>

          <div className="text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-elegant transition-all duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h4 className="font-semibold text-foreground mb-2">Environmental</h4>
            <p className="text-sm text-muted-foreground">Water quality and environmental testing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
