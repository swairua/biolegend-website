export interface EnhancedSupplier {
  id: string;
  name: string;
  description: string;
  specialties: string[];
  logo: string;
  image: string;
  websiteUrl: string;
  productCatalogUrl?: string;
  contactInfo: {
    email?: string;
    phone?: string;
    address?: string;
  };
  certification?: string[];
  established?: number;
  countries?: string[];
  category: string;
  isOfficialDistributor?: boolean;
  products?: {
    name: string;
    category: string;
    description: string;
    models: string[];
    specifications: string[];
  }[];
}

export const actualSuppliers: EnhancedSupplier[] = [
  // Water Testing & Analysis Partners
  {
    id: "palintest",
    name: "Palintest",
    description: "🇰🇪 Official Distributor in Kenya - Global leader in water testing with over 75 years of experience",
    specialties: ["Photometers", "Test Kits", "Pool Testing", "Environmental Monitoring"],
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=100&fit=crop&crop=center",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=400&fit=crop&crop=center",
    websiteUrl: "https://www.palintest.com",
    productCatalogUrl: "https://www.palintest.com/products",
    contactInfo: {
      email: "info@palintest.com",
      phone: "+44 (0)191 491 0808"
    },
    certification: ["ISO 9001", "ISO 14001", "CE Marking"],
    established: 1947,
    countries: ["UK", "USA", "Germany", "Kenya"],
    category: "Water Testing & Analysis",
    isOfficialDistributor: true
  },
  {
    id: "radwag",
    name: "Radwag",
    description: "🇰🇪 Official Distributor in Kenya - Leading manufacturer of analytical balances and weighing equipment for laboratory and industrial applications",
    specialties: ["Analytical Balances", "Precision Weighing", "Laboratory Scales", "Industrial Balances"],
    logo: "https://radwag.com/en/logo.svg",
    image: "https://radwag.com/images/hero.jpg",
    websiteUrl: "https://radwag.com",
    productCatalogUrl: "https://radwag.com/en/products",
    contactInfo: {
      email: "info@radwag.com"
    },
    certification: ["ISO 9001", "CE Marking"],
    established: 1981,
    countries: ["Poland", "Kenya", "Global"],
    category: "Scientific Equipment",
    isOfficialDistributor: true
  },
  {
    id: "bioendo",
    name: "Bioendo",
    description: "🇰🇪 Official Distributor in Kenya - Specialized supplier of medical, dental, and laboratory equipment",
    specialties: ["Medical Equipment", "Dental Equipment", "Laboratory Supplies", "Sterilization Equipment"],
    logo: "https://images.pexels.com/photos/9243571/pexels-photo-9243571.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/9243571/pexels-photo-9243571.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://bioendo.com",
    contactInfo: {
      email: "info@bioendo.com"
    },
    certification: ["ISO 9001"],
    established: 2005,
    countries: ["Kenya", "East Africa"],
    category: "Scientific Equipment",
    isOfficialDistributor: true
  },
  {
    id: "microlab-scientific",
    name: "MicroLab Scientific",
    description: "🇰🇪 Official Distributor in Kenya - Comprehensive supplier of laboratory equipment and scientific instruments",
    specialties: ["Microscopes", "Laboratory Equipment", "Analytical Instruments", "Consumables"],
    logo: "https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://microlabscientific.com",
    contactInfo: {
      email: "info@microlabscientific.com"
    },
    certification: ["ISO 9001"],
    established: 2008,
    countries: ["Kenya"],
    category: "Scientific Equipment",
    isOfficialDistributor: true
  },
  // Plant Tissue Culture & Microbiology
  {
    id: "duchefa-biochemie",
    name: "Duchefa Biochemie",
    description: "🇰🇪 Official Distributor in Kenya - Plant tissue culture media, growth regulators, and specialized biochemicals for plant biotechnology",
    specialties: ["Culture Media", "Growth Regulators", "Plant Biotechnology"],
    logo: "https://images.unsplash.com/photo-1583484963880-5ec7c86d69d4?w=200&h=100&fit=crop&crop=center",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=400&fit=crop&crop=center",
    websiteUrl: "https://www.duchefa-biochemie.com",
    productCatalogUrl: "https://www.duchefa-biochemie.com/en/products",
    contactInfo: {
      email: "info@duchefa-biochemie.com"
    },
    certification: ["ISO 9001"],
    established: 1960,
    countries: ["Netherlands", "Global"],
    category: "Biotechnology & Plant Tissue Culture",
    isOfficialDistributor: true
  },
  {
    id: "micromedica",
    name: "MicroMedica Laboratories",
    description: "🇰🇪 Official Distributor in Kenya - Dehydrated culture media and microbiology products for clinical, food, and environmental testing",
    specialties: ["Dehydrated Media", "Agar & Broths", "Selective Media"],
    logo: "https://micromedicalab.com/wp-content/uploads/2023/05/logo-1.png",
    image: "https://micromedicalab.com/wp-content/uploads/2023/05/banner-1.jpg",
    websiteUrl: "https://micromedicalab.com/",
    contactInfo: {},
    category: "Microbiology & Pathology",
    isOfficialDistributor: true
  },
  {
    id: "lovibond",
    name: "Lovibond",
    description: "🇰🇪 Official Distributor in Kenya - Precision color measurement and water analysis solutions",
    specialties: ["Color Measurement", "Water Analysis", "Portable Equipment"],
    logo: "https://images.pexels.com/photos/6823493/pexels-photo-6823493.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/6823493/pexels-photo-6823493.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://www.lovibond.com",
    productCatalogUrl: "https://www.lovibond.com/en/products",
    contactInfo: {
      email: "info@lovibond.com",
      phone: "+49 (0)231 94510-0"
    },
    certification: ["ISO 9001", "ISO 14001"],
    established: 1885,
    countries: ["Germany", "UK", "USA", "China"],
    category: "Water Testing & Analysis",
    isOfficialDistributor: true
  },
  {
    id: "hanna-instruments",
    name: "Hanna Instruments",
    description: "🇰🇪 Official Distributor in Kenya - Analytical instrumentation for laboratory and field testing",
    specialties: ["pH Meters", "EC Meters", "Multi-parameter Testers"],
    logo: "https://images.pexels.com/photos/8392542/pexels-photo-8392542.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/8392542/pexels-photo-8392542.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://www.hannainst.com",
    productCatalogUrl: "https://www.hannainst.com/products",
    contactInfo: {
      email: "info@hannainst.com"
    },
    established: 1978,
    countries: ["Italy", "USA", "Global"],
    category: "Water Testing & Analysis",
    isOfficialDistributor: true
  },

  // Chemicals & Reagents Partners
  {
    id: "merck-millipore",
    name: "Merck Millipore",
    description: "Global leader in life science chemicals and materials",
    specialties: ["HPLC Solvents", "Cell Culture", "Molecular Biology", "Analytical Reagents"],
    logo: "https://images.pexels.com/photos/9243571/pexels-photo-9243571.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/9243571/pexels-photo-9243571.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://www.merck.com",
    productCatalogUrl: "https://www.sigmaaldrich.com",
    contactInfo: {
      email: "info@merck.com"
    },
    established: 1668,
    countries: ["Germany", "USA", "Global"],
    category: "Chemicals & Reagents"
  },
  {
    id: "fisher-scientific",
    name: "Fisher Scientific",
    description: "Comprehensive range of chemicals for research and analysis",
    specialties: ["Organic Chemicals", "Inorganic Salts", "Buffer Solutions"],
    logo: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://www.fishersci.com",
    productCatalogUrl: "https://www.fishersci.com/us/en/products.html",
    contactInfo: {
      email: "info@fishersci.com"
    },
    established: 1902,
    countries: ["USA", "Global"],
    category: "Chemicals & Reagents"
  },
  {
    id: "loba-chemie",
    name: "Loba Chemie",
    description: "High-quality laboratory chemicals and reagents from India",
    specialties: ["Analytical Reagents", "Indicators", "Solvents"],
    logo: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://www.lobachemie.com",
    productCatalogUrl: "https://www.lobachemie.com/products",
    contactInfo: {
      email: "info@lobachemie.com"
    },
    established: 1975,
    countries: ["India", "Global"],
    category: "Chemicals & Reagents"
  },

  // Laboratory Glassware Partners
  {
    id: "pyrex",
    name: "Pyrex",
    description: "World-renowned brand for high-quality laboratory glass",
    specialties: ["Heat Resistant Glass", "Chemical Resistant", "Precision Volumetric"],
    logo: "https://images.pexels.com/photos/8471963/pexels-photo-8471963.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/8471963/pexels-photo-8471963.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://www.pyrex.com",
    contactInfo: {
      email: "info@pyrex.com"
    },
    established: 1915,
    countries: ["USA", "Global"],
    category: "Laboratory Glassware"
  },
  {
    id: "glassco",
    name: "Glassco",
    description: "Premium laboratory glassware manufacturer from India",
    specialties: ["Borosilicate Glass", "Volumetric Glassware", "General Purpose"],
    logo: "https://images.pexels.com/photos/8471963/pexels-photo-8471963.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/8471963/pexels-photo-8471963.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://glasscolabs.com",
    contactInfo: {
      email: "info@glasscolabware.com"
    },
    established: 1985,
    countries: ["India", "Global"],
    category: "Laboratory Glassware"
  },

  // Scientific Equipment Partners
  {
    id: "labtron",
    name: "Labtron",
    description: "Advanced laboratory equipment and instrumentation",
    specialties: ["Centrifuges", "Incubators", "Autoclaves"],
    logo: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://www.labtron.com",
    productCatalogUrl: "https://www.labtron.com/products",
    contactInfo: {
      email: "info@labtron.com"
    },
    category: "Scientific Equipment"
  },
  {
    id: "biobase",
    name: "Biobase",
    description: "Comprehensive laboratory equipment and biosafety solutions",
    specialties: ["Biosafety Cabinets", "PCR Equipment", "Laboratory Equipment"],
    logo: "https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop",
    image: "https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    websiteUrl: "https://www.biobase.cc",
    productCatalogUrl: "https://www.biobase.cc/products",
    contactInfo: {
      email: "info@biobase.cc"
    },
    established: 1999,
    countries: ["China", "Global"],
    category: "Scientific Equipment"
  },
  {
    id: "scientz",
    name: "SCIENTZ",
    description: "Life science instruments for sample preparation, microbial research, temperature control, freeze-drying, and laboratory workflows.",
    specialties: ["Ultrasonic homogenizers", "Freeze dryers", "Microbial analysis", "Sample preparation", "Laboratory temperature control"],
    logo: "",
    image: "",
    websiteUrl: "https://www.scientzbio.com",
    contactInfo: {
      email: "service.global@scientz.com",
      phone: "+86 181 0665 0612",
      address: "No. 65 Mujin Road, Ningbo National High-Tech Park, China"
    },
    established: 1989,
    countries: ["China", "Global"],
    category: "Scientific Equipment",
    products: [
      {
        name: "Ultrasonic Homogenizers & Dispersers",
        category: "Sample preparation",
        description: "Probe, multi-channel, integrated, portable, industrial, and continuous-flow ultrasonic systems for homogenization, disruption, emulsification, extraction, and dispersion.",
        models: ["Digital JY92-IIN / JY92-IIDN / SCIENTZ-IID / JY98-IIIDN / JY99-IIDN", "SCIENTZ-F 750F / 1500F / 2400F / 3000F", "SCIENTZ-TD 4TD / 6TD / 8TD / 16TD / 24TD / 48TD / 96TD", "UP-250 / UP-250S", "SCIENTZ-650J / 650L / 2000J / 650E / 950E / 1200E", "SCIENTZ-08 industrial", "CFU-750W-M1 / CFU-750W-M2"],
        specifications: ["Processing volumes from 100 μL to 5 L depending on model", "Multi-stage, pulse, and continuous operating options", "Temperature monitoring and control available on selected models", "Probe and soundproof enclosure options"]
      },
      {
        name: "Ultrasonic DNA Shearing Systems",
        category: "DNA shearing & non-contact processing",
        description: "Non-contact systems for DNA fragmentation, sample mixing, and pretreatment for next-generation sequencing and chromatin immunoprecipitation workflows.",
        models: ["SCIENTZ08-IIIA", "SCIENTZ08-IIIB", "SCIENTZ08-IIID", "SCIENTZ08-IIIC", "SCIENTZ08-II", "SCIENTZ08-III"],
        specifications: ["Model-dependent capacity up to 60 samples", "Adjustable ultrasonic power and timing", "Temperature-controlled operation on selected models", "Sealed tubes support low sample loss and reduce cross-contamination"]
      },
      {
        name: "High-Throughput Tissuelysers",
        category: "Sample preparation",
        description: "Bead-mill tissue homogenizers for simultaneous wet, dry, or pre-frozen grinding of biological, plant, environmental, food, and material samples.",
        models: ["SCIENTZ-12", "SCIENTZ-24", "SCIENTZ-48", "SCIENTZ-96", "SCIENTZ-192"],
        specifications: ["Throughput configurations from 12 to 192 samples", "Speed up to 2,100 rpm on selected models", "Adapters for microtubes, deep-well plates, and grinding jars", "Optional freezer adapters and zirconia grinding balls"]
      },
      {
        name: "MGC-200 Microbial Growth Curve Analyzers",
        category: "Microbial analysis",
        description: "Automated microbial growth monitoring and incubation with real-time absorbance readings and growth-curve generation.",
        models: ["MGC-200", "MGC-200pro"],
        specifications: ["Up to 192 channels", "300–850 nm detection wavelength", "15–60 °C temperature control at 25 °C room temperature", "Shaking speed 200–1,250 rpm", "5–360 minute detection interval"]
      },
      {
        name: "Ultrasonic Bacterial Turbidimeter",
        category: "Microbial analysis",
        description: "SCIENTZ-CFS combines ultrasonic dispersion, McFarland turbidity measurement, and dilution-volume calculation for bacterial suspension preparation.",
        models: ["SCIENTZ-CFS"],
        specifications: ["Turbidity measurement range 0.00–6.00 MCF", "Linear detection range 0.20–4.00 MCF", "Multi-point calibration up to 6 points", "Sample tube capacity 1.5–4 mL"]
      },
      {
        name: "Gene Electroporator",
        category: "Molecular biology",
        description: "Programmable electroporation instrument for introducing nucleic acids and other molecules into microbial and eukaryotic cells.",
        models: ["GP-3000"],
        specifications: ["Exponential decay and square-wave pulse types", "High-voltage output 401–3,000 V", "Low-voltage output 50–400 V", "1–9 continuous discharges", "Adjustable resistance and capacitance settings"]
      },
      {
        name: "Ultrasonic Cleaners",
        category: "Cleaning equipment",
        description: "Heated and adjustable-power ultrasonic cleaners for laboratory and precision cleaning applications.",
        models: ["DT heated series", "DTD adjustable heated series"],
        specifications: ["40 kHz operating frequency", "Heating range: room temperature to 80 °C", "Timer up to 999 minutes on selected models", "Tank capacities from 3 to 30 L"]
      },
      {
        name: "Constant Temperature Baths",
        category: "Temperature control",
        description: "Heating-only and heating-and-cooling circulating baths for laboratory temperature control.",
        models: ["SC single-heating series", "DC heating-and-cooling series"],
        specifications: ["SC models: 5–30 L; temperature ranges up to 200 °C", "DC models: 6–30 L; temperature ranges down to -40 °C", "Temperature stability ±0.1 °C", "Internal and external circulation on selected models"]
      },
      {
        name: "Automatic Snow Ice Machines",
        category: "General laboratory equipment",
        description: "Automatic snowflake ice makers for laboratories, medical research, food service, and industrial applications.",
        models: ["XB-20II", "XB-30II", "XB-40II", "XB-50II", "XB-70II", "XB-85II", "XB-130II", "XB-150II"],
        specifications: ["Ice production capacity 20–150 kg per 24 hours", "Ice storage capacity 15–32 kg", "Automatic water filling, ice making, and release cycles"]
      },
      {
        name: "Freeze Dryers",
        category: "Freeze drying",
        description: "Laboratory, pilot-scale, and production freeze dryers with multiple chamber and shelf configurations.",
        models: ["N / ND: SCIENTZ-10, -12, -18", "YG: SCIENTZ-10YG, -30YG, -50YG, -100YG, -200YG", "F: SCIENTZ-20F, -30F, -50F, -100F, -200F", "S production series: 1–50 m² dryer area"],
        specifications: ["N-series water capture: 3–6 kg per batch", "ND electric-heating shelf temperature up to 60 °C", "YG in-situ pre-freezing and silicone-oil temperature control", "F-series cold trap down to -80 °C on selected models", "Production models available up to 1,000 kg water capture per batch"]
      },
      {
        name: "Vacuum Centrifugal Concentrators",
        category: "Sample concentration",
        description: "Integrated centrifugal concentrators with a built-in cold trap for solvent evaporation and sample concentration.",
        models: ["SCIENTZ-1LS", "SCIENTZ-10LS"],
        specifications: ["Maximum speed 2,000 rpm", "Temperature range: room temperature to 70 °C", "Cold trap temperature below -45 °C", "Rotor options for tubes, 50 mL samples, and microplates"]
      },
      {
        name: "Laboratory Blenders",
        category: "Sample preparation",
        description: "Paddle-style laboratory homogenizers for microbiological testing of food, drugs, animal tissues, and biological samples.",
        models: ["SCIENTZ-02", "SCIENTZ-04", "SCIENTZ-09", "SCIENTZ-11"],
        specifications: ["Sample volume 3–400 mL", "Adjustable homogenization speed and timing on selected models", "Quick-release paddles and optional UV sterilization", "Sealed disposable bags help prevent cross-contamination"]
      }
    ]
  }
];

export const getSuppliersByCategory = (category: string): EnhancedSupplier[] => {
  return actualSuppliers.filter(supplier => supplier.category === category);
};

export const getOfficialDistributors = (): EnhancedSupplier[] => {
  return actualSuppliers.filter(supplier => supplier.isOfficialDistributor);
};

export const getAllSuppliers = (): EnhancedSupplier[] => {
  return actualSuppliers;
};
