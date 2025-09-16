import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const PartnersSection = () => {
  const partnerCategories = [
    {
      category: "Scientific Equipment",
      partners: [
        { name: "Labtron", description: "Advanced laboratory equipment and instrumentation", specialty: "Centrifuges, Incubators, Autoclaves", url: "https://www.labtron.com" },
        { name: "Draglab Technologies", description: "Cutting-edge laboratory instruments and automation", specialty: "Digital Equipment, Laboratory Software", url: "https://www.drag-lab.de/EN/" },
        { name: "Hongshun Medical Instrument", description: "Medical and laboratory instrumentation", specialty: "Medical Devices, Diagnostic Equipment", url: "https://www.asian-medical.com" },
        { name: "Biobase", description: "Comprehensive laboratory equipment and biosafety solutions", specialty: "Biosafety Cabinets, PCR Equipment", url: "https://www.biobase.cc" },
        { name: "Scitek Global", description: "Global provider of scientific instruments", specialty: "Analytical Instruments, Testing Equipment", url: "https://www.scitekglobal.com" },
        { name: "Dlab", description: "Professional laboratory equipment for scientific applications", specialty: "Mixers, Pipettes, Heating Plates", url: "https://www.dlabsci.com" }
      ]
    },
    {
      category: "Water Testing & Analysis",
      partners: [
        { name: "Palintest", description: "🇰🇪 Official Distributor in Kenya - Global leader in water testing with over 75 years of experience", specialty: "Photometers, Test Kits, Pool Testing, Authorized Dealer", url: "https://www.palintest.com", internalPath: "/palintest", isOfficial: true },
        { name: "Lovibond", description: "Precision color measurement and water analysis solutions", specialty: "Color Measurement, Water Analysis", url: "https://www.lovibond.com", internalPath: "/lovibond" },
        { name: "Delagua", description: "Water quality testing solutions for developing regions", specialty: "Field Testing, Emergency Response", url: "https://www.delagua.org" },
        { name: "Wagtech", description: "Portable water testing technology for field applications", specialty: "Portable Kits, Digital Testing", url: "https://www.wagtech.co.uk" },
        { name: "Hannah Instruments", description: "Analytical instrumentation for laboratory and field testing", specialty: "pH Meters, EC Meters, Multi-parameter Testers", url: "https://www.hannainst.com", internalPath: "/hanna-instruments" }
      ]
    },
    {
      category: "Chemicals & Reagents",
      partners: [
        { name: "Loba Chemie", description: "High-quality laboratory chemicals and reagents from India", specialty: "Analytical Reagents, Indicators, Solvents", url: "https://www.lobachemie.com" },
        { name: "Merck Millipore", description: "Global leader in life science chemicals and materials", specialty: "HPLC Solvents, Cell Culture, Molecular Biology", url: "https://www.merck.com" },
        { name: "Fisher Scientific", description: "Comprehensive range of chemicals for research and analysis", specialty: "Organic Chemicals, Inorganic Salts, Buffer Solutions", url: "https://www.fishersci.com" },
        { name: "Reagecon", description: "Specialist manufacturer of analytical reference standards", specialty: "pH Buffers, Conductivity Standards, Ion Standards", url: "https://www.reagecon.com" },
        { name: "Sigma-Aldrich", description: "Leading supplier of research chemicals and biochemicals", specialty: "Biochemicals, Fine Chemicals, Custom Synthesis", url: "https://www.sigmaaldrich.com" }
      ]
    },
    {
      category: "Specialized Solutions",
      partners: [
        { name: "Duchefa Biochemie", description: "Plant tissue culture media and specialized products", specialty: "Culture Media, Growth Regulators, Specialized Chemicals", url: "https://www.duchefa-biochemie.com", internalPath: "/duchefa-biochemie" },
        { name: "MicroMedica", description: "Dehydrated culture media for clinical, food and environmental microbiology", specialty: "Agar, Broths, Selective Media", url: "https://micromedicalab.com/", internalPath: "/micromedica" },
        { name: "Gerber Instruments", description: "Precision instruments for food and dairy analysis", specialty: "Butyrometers, Lactometers, Dairy Testing", url: "https://www.gerber-instruments.com" },
        { name: "CHMLab Group", description: "Professional laboratory filtration solutions", specialty: "Membrane Filters, Syringe Filters, Filter Papers", url: "https://www.chmlab.com" },
        { name: "Hawach", description: "High-quality filtration products for analytical applications", specialty: "Disposable Filters, Filter Holders, HPLC Filters", url: "https://www.hawach.com" },
        { name: "BioEndo", description: "Rapid endotoxin testing solutions", specialty: "Endotoxin Kits, Rapid Testing, Quality Control", url: "https://www.bioendo.com" },
        { name: "Leztest", description: "Presence/absence testing solutions", specialty: "Detection Kits, Testing Systems, Quality Assurance", url: "https://letztest.com" }
      ]
    },
    {
      category: "Laboratory Glassware",
      partners: [
        { name: "Glassco", description: "Premium laboratory glassware manufacturer from India", specialty: "Borosilicate Glass, Volumetric Glassware, General Purpose", url: "https://glasscolabs.com" },
        { name: "Pyrex", description: "World-renowned brand for high-quality laboratory glass", specialty: "Heat Resistant, Chemical Resistant, Precision Volumetric", url: "https://www.pyrex.com" }
      ]
    }
  ];

  const globalBrands = [
    "Merck", "Sigma-Aldrich", "Fisher Scientific", "Pyrex", "Palintest", "Hannah Instruments"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We collaborate with world-leading manufacturers to bring you the highest quality
            laboratory equipment, instruments, and consumables from globally recognized brands.
          </p>

          {/* Partners Hero Image */}
          <div className="relative rounded-lg overflow-hidden shadow-elegant mb-12">
            <img
              src="/images/partners-hero.jpg"
              alt="Professional laboratory equipment and scientific instruments from our trusted partners"
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/9242838/pexels-photo-9242838.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'; }}
            />
            <div className="absolute inset-0 bg-biolegend-purple/10"></div>
          </div>
        </div>

        {/* Global Brands Banner */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-elegant p-8">
            <h3 className="text-xl font-semibold text-center mb-6 text-biolegend-purple">
              Representing Global Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {globalBrands.map((brand, index) => (
                <div key={index} className="group flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 group-hover:scale-110 transition-transform">
                    {brand.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-center group-hover:text-biolegend-purple transition-colors">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Partners Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Featured Partner Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Palintest", specialty: "Water Testing", experience: "75+ Years", color: "bg-blue-500" },
              { name: "MicroMedica", specialty: "Microbiology Media", experience: "Dehydrated Media", color: "bg-rose-600" },
              { name: "Loba Chemie", specialty: "Laboratory Chemicals", experience: "Analytical Reagents", color: "bg-emerald-600" },
              { name: "Duchefa Biochemie", specialty: "Plant Tissue Culture", experience: "Specialized Media", color: "bg-green-600" }
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-elegant p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${partner.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                  {partner.name.substring(0, 2)}
                </div>
                <h4 className="font-bold text-lg mb-2">{partner.name}</h4>
                <p className="text-biolegend-purple font-semibold text-sm mb-1">{partner.specialty}</p>
                <p className="text-muted-foreground text-xs">{partner.experience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Categories */}
        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <Card key={partnerIndex} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-biolegend-purple/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className={`text-lg group-hover:text-biolegend-purple transition-colors ${
                            partner.isOfficial ? 'text-biolegend-purple' : ''
                          }`}>
                            {partner.internalPath ? (
                              <Link to={partner.internalPath} className="hover:underline">
                                {partner.name}
                              </Link>
                            ) : (
                              <span>{partner.name}</span>
                            )}
                            {partner.isOfficial && " 🇰🇪"}
                          </CardTitle>
                          <CardDescription className="text-sm text-muted-foreground">
                            {partner.description}
                          </CardDescription>
                        </div>
                        {partner.url && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open(partner.url, '_blank')}
                            className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm text-biolegend-purple mb-2">Specialties:</h4>
                          <Badge
                            variant="secondary"
                            className={`${partner.isOfficial ? 'bg-biolegend-yellow text-biolegend-purple' : 'bg-biolegend-yellow/20 text-biolegend-purple'} hover:bg-biolegend-yellow/30`}
                          >
                            {partner.specialty}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {partner.internalPath && (
                            <Link to={partner.internalPath} className="text-center border rounded-md py-2 text-sm hover:bg-biolegend-purple hover:text-white transition-colors">
                              Learn More
                            </Link>
                          )}
                          {partner.url && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(partner.url, '_blank')}
                              className="w-full group-hover:bg-biolegend-purple group-hover:text-white transition-colors"
                            >
                              Visit Site
                              <ExternalLink className="w-3 h-3 ml-2" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Partners */}
        <div className="mt-16">
          <div className="bg-gradient-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">
              Why Choose Our Partner Network?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Global Quality Standards</h4>
                <p className="text-white/90 text-sm">
                  All our partners meet international quality standards and certifications
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Comprehensive Support</h4>
                <p className="text-white/90 text-sm">
                  Technical support, training, and after-sales service for all partner products
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Competitive Pricing</h4>
                <p className="text-white/90 text-sm">
                  Direct partnerships ensure the best prices for premium laboratory equipment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-biolegend-purple mb-2">25+</div>
              <div className="text-muted-foreground">Trusted Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-biolegend-purple mb-2">15+</div>
              <div className="text-muted-foreground">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-biolegend-purple mb-2">1000+</div>
              <div className="text-muted-foreground">Products Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-biolegend-purple mb-2">10+</div>
              <div className="text-muted-foreground">Years of Partnership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
