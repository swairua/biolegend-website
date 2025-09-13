import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Beaker, TestTube, Microscope, Thermometer, Scale, FlaskConical } from "lucide-react";

const AtAGlanceSection = () => {
  const productCategories = [
    {
      category: "Lab Chemicals & Supplies",
      icon: <Beaker className="w-6 h-6 text-purple-600" />,
      sections: [
        {
          title: "Chemicals and Standards",
          items: ["CRS and CRM", "Primary and Secondary Standards", "Buffer Solutions", "Reagents and Solutions", "RLD Products Supply"]
        },
        {
          title: "Electrodes and Probes",
          items: ["Dissolved Oxygen Probes", "pH Electrodes", "Turbidity Probes", "Storage Solutions"]
        },
        {
          title: "Microbiology",
          items: ["Culture Media", "MicroMedica laboratories (Dehydrated Medias)", "Petri Dishes", "Cell Culture", "Testing Kits", "ELISA, PCR"]
        },
        {
          title: "Glassware",
          items: ["Beakers, Bottles, Burettes", "Cylinders, Flasks, Pipettes", "Tubes, Vials", "Caps and Closures"]
        },
        {
          title: "Plasticware",
          items: ["Beakers, Bottles", "Jugs, Pipettes", "Sample Tubes, Vials", "Wash Bottles, Caps"]
        },
        {
          title: "Sample Handling",
          items: ["Blenders, Droppers", "Sample Containers", "Sample Dippers, Scoops", "Pipette Accessories"]
        }
      ]
    },
    {
      category: "Laboratory Instruments",
      icon: <Microscope className="w-6 h-6 text-blue-600" />,
      sections: [
        {
          title: "Microscopes",
          items: ["Compound Microscopes", "Stereo Microscopes", "Digital Microscopes", "Microscope Accessories"]
        },
        {
          title: "Water Baths",
          items: ["Circulating Baths", "Heating Baths", "Ultrasonic Baths", "Water Bath Accessories"]
        },
        {
          title: "Refrigeration & Freezers",
          items: ["Laboratory Freezers", "Laboratory Fridges", "Transport Coolers", "Chiller Units"]
        },
        {
          title: "Shakers and Mixers",
          items: ["Orbital Shakers", "Vortex Mixers", "Bottle Rollers", "Tube Rollers", "Mixer Accessories"]
        },
        {
          title: "Separation Equipment",
          items: ["Centrifuges", "Rotary Evaporators", "Flocculators", "Centrifuge Accessories"]
        },
        {
          title: "Testing Equipment",
          items: ["BOD Meters", "DO Meters", "pH Meters", "Conductivity Meters", "Spectrophotometers", "Turbidity Meters"]
        }
      ]
    },
    {
      category: "Analytical Equipment",
      icon: <TestTube className="w-6 h-6 text-green-600" />,
      sections: [
        {
          title: "Chromatography",
          items: ["HPLC Columns", "GC Columns", "Spare Parts", "Refurbished HPLC/LCMS", "Solvent Safety Products"]
        },
        {
          title: "Balance & Weighing",
          items: ["Analytical Balances", "Precision Balances", "Compact Balances", "Industrial Scales", "Moisture Balances"]
        },
        {
          title: "Kjeldahl Equipment",
          items: ["Digestion Units", "Distillation Units", "Titration Systems", "Digestion Accessories"]
        },
        {
          title: "Lab Tools",
          items: ["Data Loggers", "Thermometers", "Timers & Stopwatches", "Crimpers & Decappers"]
        }
      ]
    },
    {
      category: "Safety & Containment",
      icon: <FlaskConical className="w-6 h-6 text-orange-600" />,
      sections: [
        {
          title: "Safety Cabinets",
          items: ["Biosafety Cabinets", "Laminar Flow Cabinets", "Fume Hoods", "Chemical Storage"]
        },
        {
          title: "Autoclaves",
          items: ["Benchtop Autoclaves", "Front Loading Autoclaves", "Top Loading Autoclaves", "Autoclave Accessories"]
        }
      ]
    },
    {
      category: "Heating & Temperature",
      icon: <Thermometer className="w-6 h-6 text-red-600" />,
      sections: [
        {
          title: "Hotplates & Stirrers",
          items: ["Magnetic Stirrers", "Hotplates", "Overhead Stirrers", "Stirrer Accessories"]
        },
        {
          title: "Incubators & Ovens",
          items: ["General Incubators", "CO2 Incubators", "Drying Ovens", "Vacuum Ovens", "High Temperature Ovens", "Sterilizer Ovens"]
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Visual Gallery */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            At a Glance - Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive laboratory solutions across all scientific disciplines.
            From basic consumables to advanced analytical instruments.
          </p>

          {/* Product Category Images */}
          <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop"
                alt="Laboratory chemicals"
                className="w-full h-16 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop"
                alt="Laboratory instruments"
                className="w-full h-16 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop"
                alt="Analytical equipment"
                className="w-full h-16 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop"
                alt="Safety equipment"
                className="w-full h-16 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/9574449/pexels-photo-9574449.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop"
                alt="Heating equipment"
                className="w-full h-16 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Product Categories Tabs */}
        <Tabs defaultValue="chemicals" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="chemicals" className="text-sm">Chemicals & Supplies</TabsTrigger>
            <TabsTrigger value="instruments" className="text-sm">Lab Instruments</TabsTrigger>
            <TabsTrigger value="analytical" className="text-sm">Analytical Equipment</TabsTrigger>
            <TabsTrigger value="safety" className="text-sm">Safety & Containment</TabsTrigger>
            <TabsTrigger value="heating" className="text-sm">Heating & Temperature</TabsTrigger>
          </TabsList>

          {productCategories.map((category, categoryIndex) => (
            <TabsContent 
              key={categoryIndex} 
              value={categoryIndex === 0 ? "chemicals" : categoryIndex === 1 ? "instruments" : categoryIndex === 2 ? "analytical" : categoryIndex === 3 ? "safety" : "heating"}
              className="space-y-8"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.sections.map((section, sectionIndex) => (
                  <Card key={sectionIndex} className="hover:shadow-elegant transition-all duration-300 border-2 hover:border-biolegend-purple/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-biolegend-purple">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="bg-muted/50 px-3 py-2 rounded-md text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Stats with Background Image */}
        <div className="mt-16 relative rounded-lg p-8 text-white overflow-hidden shadow-elegant">
          <img
            src="https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
            alt="Laboratory overview"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-primary/90"></div>
          <div className="relative grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/90">Product Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-white/90">Individual Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-white/90">Global Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/90">Quality Assured</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Something Specific?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our extensive catalog contains thousands of products. 
            Contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-biolegend-purple text-white px-6 py-3 rounded-lg hover:bg-biolegend-purple/90 transition-colors"
            >
              Request Product Catalog
            </a>
            <a 
              href="/services" 
              className="border-2 border-biolegend-purple text-biolegend-purple px-6 py-3 rounded-lg hover:bg-biolegend-purple/10 transition-colors"
            >
              Browse All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtAGlanceSection;
