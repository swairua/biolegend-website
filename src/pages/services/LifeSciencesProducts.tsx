import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Dna, TestTube2, Microscope, FlaskConical } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LifeSciencesProducts = () => {
  const categories = [
    {
      name: "Cell Culture",
      description: "Complete cell culture solutions for research and biotechnology applications",
      icon: <FlaskConical className="w-8 h-8 text-biolegend-purple" />,
      features: ["Cell Culture Media", "Plastics for Culture", "Tissue Grinders", "Serological Pipettes", "Cell Culture Caps"]
    },
    {
      name: "Molecular Biology",
      description: "Essential tools and reagents for molecular biology research and diagnostics",
      icon: <Dna className="w-8 h-8 text-biolegend-purple" />,
      features: ["PCR/qPCR Consumables", "Thermocyclers", "Electrophoresis Equipment", "Molecular Reagents", "Spin Columns"]
    },
    {
      name: "Microbiology & Pathology",
      description: "Comprehensive solutions for microbiological analysis and pathology studies",
      icon: <Microscope className="w-8 h-8 text-biolegend-purple" />,
      features: ["Petri Dishes", "Culture Media", "MicroMedica Dehydrated Medias", "Staining Reagents", "Microscope Slides", "Sterilization Loops"]
    },
    {
      name: "Biotechnology & PCR",
      description: "Advanced biotechnology products including PCR, ELISA, and protein analysis",
      icon: <TestTube2 className="w-8 h-8 text-biolegend-purple" />,
      features: ["ELISA Kits", "Antibodies", "Proteins & Peptides", "Cell Lines", "Multiplex Assays"]
    }
  ];

  const products = [
    {
      category: "Cell Culture Products",
      items: [
        "Cell Culture Media & Supplements",
        "Fetal Bovine Serum (FBS)",
        "Cell Culture Flasks & Plates",
        "Petri Dishes & Culture Vessels",
        "Serological Pipettes",
        "Cell Scrapers & Spreaders"
      ]
    },
    {
      category: "Molecular Biology",
      items: [
        "PCR & qPCR Reagents",
        "DNA/RNA Extraction Kits",
        "Thermocyclers & PCR Machines",
        "Gel Electrophoresis Systems",
        "Molecular Weight Markers",
        "Nucleic Acid Quantification"
      ]
    },
    {
      category: "Antibodies & Immunoassays",
      items: [
        "Primary Antibodies",
        "Secondary Antibodies", 
        "ELISA Kits",
        "Western Blot Reagents",
        "Immunofluorescence Reagents",
        "Flow Cytometry Antibodies"
      ]
    },
    {
      category: "Protein Analysis",
      items: [
        "Protein Expression Systems",
        "Purification Resins",
        "Protein Assay Kits",
        "SDS-PAGE Reagents",
        "Protease Inhibitors",
        "Protein Standards"
      ]
    },
    {
      category: "Microbiology",
      items: [
        "Agar & Broth Media",
        "MicroMedica laboratories - Dehydrated Medias",
        "Selective Media",
        "Identification Kits",
        "Antimicrobial Susceptibility",
        "Environmental Monitoring",
        "Food Safety Testing"
      ]
    },
    {
      category: "Refrigeration & Storage",
      items: [
        "Cryo-tubes & Accessories",
        "Freezer Racks",
        "Isothermal Boxes",
        "Liquid Nitrogen Containers",
        "Temperature Monitoring",
        "Sample Storage Systems"
      ]
    }
  ];

  const applications = [
    "Drug Discovery & Development",
    "Vaccine Research",
    "Cancer Research",
    "Immunology Studies",
    "Infectious Disease Research",
    "Stem Cell Research",
    "Protein Engineering",
    "Genomics & Proteomics"
  ];

  const services = [
    {
      name: "Protein Expression Services",
      description: "Custom protein expression and purification services for research applications"
    },
    {
      name: "Cell Line Development",
      description: "Stable cell line development for protein production and research"
    },
    {
      name: "Custom Antibody Production",
      description: "Monoclonal and polyclonal antibody development services"
    },
    {
      name: "Assay Development",
      description: "Custom assay development for specific research needs"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Life Sciences Products - Cell Culture, Molecular Biology & Biotechnology | Biolegend Scientific"
        description="Comprehensive life sciences products including cell culture, molecular biology reagents, antibodies, and biotechnology solutions for research and diagnostics."
        keywords="life sciences, cell culture, molecular biology, PCR, ELISA, antibodies, biotechnology, research reagents"
        url="https://biolegendscientific.co.ke/services/life-sciences-products"
      />
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-biolegend-purple hover:underline">Home</Link>
              <span className="text-gray-500">/</span>
              <Link to="/services" className="text-biolegend-purple hover:underline">Services</Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-700">Life Sciences Products</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link to="/services">
                <Button variant="ghost" className="text-white hover:bg-white/10 mr-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Button>
              </Link>
            </div>
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <Dna className="w-12 h-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Life Sciences Products
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Comprehensive solutions for cell culture, molecular biology, microbiology, and biotechnology research
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Product Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* MicroMedica Highlight */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:max-w-3xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">MicroMedica Dehydrated Culture Media</h3>
                <p className="text-blue-800 mb-3">Reliable agar, broths and selective media for clinical, food and environmental microbiology.</p>
                <div className="text-sm text-blue-900">Agar & Broths • Selective Media • Identification • QC</div>
              </div>
              <a href="/micromedica" className="mt-4 md:mt-0 inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">Explore MicroMedica <ChevronRight className="w-4 h-4 ml-2"/></a>
            </div>
          </div>
        </section>

        {/* Main Categories */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential products and reagents for life sciences research and biotechnology applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="h-full hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-biolegend-purple flex items-center">
                      {category.icon}
                      <span className="ml-3">{category.name}</span>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-biolegend-yellow flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Products */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Detailed Product Range
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive range of life sciences products and reagents
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-semibold text-biolegend-purple mb-4 text-lg">{product.category}</h3>
                  <ul className="space-y-2">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-biolegend-yellow flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Research Applications
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our life sciences products support a wide range of research applications across various fields of study.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {applications.map((app, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-biolegend-yellow mr-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-biolegend-purple/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-biolegend-purple mb-6">
                  Custom Services
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-1">{service.name}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-6 w-full">
                  Learn More About Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Compliance */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Quality & Compliance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                All our life sciences products meet the highest quality standards and regulatory requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">ISO Certified</h3>
                <p className="text-sm text-muted-foreground">Products from ISO certified manufacturers</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Research Grade</h3>
                <p className="text-sm text-muted-foreground">High-purity reagents for research applications</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TestTube2 className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Lot Testing</h3>
                <p className="text-sm text-muted-foreground">Comprehensive lot testing and documentation</p>
              </div>
              <div className="text-center">
                <div className="bg-biolegend-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dna className="w-8 h-8 text-biolegend-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Cold Chain</h3>
                <p className="text-sm text-muted-foreground">Temperature-controlled storage and shipping</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Leading Life Sciences Brands
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              We partner with renowned life sciences companies to provide the highest quality products
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[
                "ExcellGene", "Cytiva", "Abcam", "Bio-Rad", "Thermo Fisher",
                "Sigma-Aldrich", "Invitrogen", "ATCC", "Corning", "Eppendorf"
              ].map((brand, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border text-center">
                  <span className="font-medium text-biolegend-purple">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-biolegend-purple text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advance Your Research with Quality Products
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get access to premium life sciences products and expert technical support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Request Consultation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Product Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LifeSciencesProducts;
