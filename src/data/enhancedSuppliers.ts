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
  // Plant Tissue Culture & Microbiology
  {
    id: "duchefa-biochemie",
    name: "Duchefa Biochemie",
    description: "Plant tissue culture media, growth regulators, and specialized biochemicals for plant biotechnology",
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
    category: "Biotechnology & Plant Tissue Culture"
  },
  {
    id: "micromedica",
    name: "MicroMedica Laboratories",
    description: "Dehydrated culture media and microbiology products for clinical, food, and environmental testing",
    specialties: ["Dehydrated Media", "Agar & Broths", "Selective Media"],
    logo: "https://micromedicalab.com/wp-content/uploads/2023/05/logo-1.png",
    image: "https://micromedicalab.com/wp-content/uploads/2023/05/banner-1.jpg",
    websiteUrl: "https://micromedicalab.com/",
    contactInfo: {},
    category: "Microbiology & Pathology"
  },
  {
    id: "lovibond",
    name: "Lovibond",
    description: "Precision color measurement and water analysis solutions",
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
    category: "Water Testing & Analysis"
  },
  {
    id: "hanna-instruments",
    name: "Hanna Instruments",
    description: "Analytical instrumentation for laboratory and field testing",
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
    category: "Water Testing & Analysis"
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
