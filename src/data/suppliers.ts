export interface Supplier {
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
  products: Product[];
  certification?: string[];
  established?: number;
  countries?: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  specifications?: string[];
  applications?: string[];
  datasheet?: string;
  price?: string;
}

export const waterTestingSuppliers: Supplier[] = [
  {
    id: "palintest",
    name: "Palintest",
    description: "Global leader in water testing with over 75 years of experience",
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
    products: [
      {
        id: "pooltest-1",
        name: "Pooltest 1 Photometer",
        description: "Portable photometer for swimming pool and spa water testing",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center",
        category: "Photometers",
        specifications: ["Free & Total Chlorine", "pH", "Total Alkalinity", "Cyanuric Acid"],
        applications: ["Swimming Pools", "Spas", "Hot Tubs"],
        datasheet: "/datasheets/pooltest-1.pdf",
        price: "Contact for pricing"
      },
      {
        id: "pooltest-6",
        name: "Pooltest 6 Photometer",
        description: "Advanced multi-parameter photometer for comprehensive pool testing",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop&crop=center",
        category: "Photometers",
        specifications: ["Free & Total Chlorine", "pH", "Total Alkalinity", "Cyanuric Acid", "Calcium Hardness", "Bromine"],
        applications: ["Commercial Pools", "Water Parks", "Aquatic Centers"],
        datasheet: "/datasheets/pooltest-6.pdf"
      },
      {
        id: "dpt-test-kit",
        name: "DPD Test Kit",
        description: "Complete test kit for chlorine testing in water",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop&crop=center",
        category: "Test Kits",
        specifications: ["DPD No.1 Tablets", "DPD No.3 Tablets", "Phenol Red Tablets"],
        applications: ["Drinking Water", "Pool Water", "Process Water"]
      }
    ]
  },
  {
    id: "lovibond",
    name: "Lovibond",
    description: "Precision color measurement and water analysis solutions",
    specialties: ["Color Measurement", "Water Analysis", "Portable Equipment", "Laboratory Systems"],
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=400&fit=crop&crop=center",
    websiteUrl: "https://www.lovibond.com",
    productCatalogUrl: "https://www.lovibond.com/en/products",
    contactInfo: {
      email: "info@lovibond.com",
      phone: "+49 (0)231 94510-0"
    },
    certification: ["ISO 9001", "ISO 14001", "DIN EN ISO/IEC 17025"],
    established: 1885,
    countries: ["Germany", "UK", "USA", "China"],
    products: [
      {
        id: "af230",
        name: "AF230 Portable Colorimeter",
        description: "Portable colorimeter for water analysis",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop&crop=center",
        category: "Colorimeters",
        specifications: ["LED Technology", "Waterproof", "Pre-programmed Methods"],
        applications: ["Water Treatment", "Environmental Monitoring", "Laboratory Analysis"]
      }
    ]
  },
  {
    id: "delagua",
    name: "Delagua",
    description: "Water quality testing solutions for developing regions",
    specialties: ["Field Testing", "Emergency Response", "Remote Monitoring", "Training Programs"],
    logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=100&fit=crop&crop=center",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=400&fit=crop&crop=center",
    websiteUrl: "https://www.delagua.org",
    contactInfo: {
      email: "info@delagua.org"
    },
    certification: ["WHO Approved"],
    established: 1985,
    countries: ["UK", "Kenya", "Tanzania", "Uganda"],
    products: [
      {
        id: "delaqua-kit",
        name: "DelAgua Water Testing Kit",
        description: "Portable water testing kit for field use",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop&crop=center",
        category: "Test Kits",
        specifications: ["pH", "Turbidity", "Chlorine", "Bacteria"],
        applications: ["Emergency Response", "Remote Areas", "Development Projects"]
      }
    ]
  },
  {
    id: "wagtech",
    name: "Wagtech",
    description: "Portable water testing technology for field applications",
    specialties: ["Portable Kits", "Digital Testing", "Field Analysis", "Emergency Testing"],
    logo: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=100&fit=crop&crop=center",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop&crop=center",
    websiteUrl: "https://www.wagtech.co.uk",
    productCatalogUrl: "https://www.wagtech.co.uk/products",
    contactInfo: {
      email: "info@wagtech.co.uk",
      phone: "+44 (0)1942 676144"
    },
    certification: ["ISO 9001", "CE Marking"],
    established: 1996,
    countries: ["UK", "Global Distribution"],
    products: [
      {
        id: "wag-wp300",
        name: "WagTech WP300 Photometer",
        description: "Portable photometer for water quality analysis",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop&crop=center",
        category: "Photometers",
        specifications: ["50+ Parameters", "Rechargeable Battery", "Data Logging"],
        applications: ["Field Testing", "Environmental Monitoring", "Quality Control"]
      }
    ]
  }
];

export const getSupplierById = (id: string): Supplier | undefined => {
  return waterTestingSuppliers.find(supplier => supplier.id === id);
};

export const getProductsBySupplier = (supplierId: string): Product[] => {
  const supplier = getSupplierById(supplierId);
  return supplier ? supplier.products : [];
};
