export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: 'Service' | 'Industry' | 'Policy' | 'Partner';
  url: string;
  icon?: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  // Services
  {
    id: 'service-scientific-equipment',
    title: 'Scientific Equipment',
    description: 'Advanced laboratory equipment and instrumentation for scientific research',
    category: 'Service',
    url: '/services/scientific-equipment',
    keywords: ['equipment', 'laboratory', 'instrumentation', 'apparatus', 'devices'],
    icon: '🔬'
  },
  {
    id: 'service-water-testing',
    title: 'Water Testing Solutions',
    description: 'Comprehensive water quality testing kits and equipment',
    category: 'Service',
    url: '/services/water-testing',
    keywords: ['water', 'testing', 'analysis', 'quality', 'photometer', 'palintest'],
    icon: '💧'
  },
  {
    id: 'service-plant-tissue-culture',
    title: 'Plant Tissue Culture',
    description: 'Plant tissue culture media and specialized biochemicals',
    category: 'Service',
    url: '/services/plant-tissue-culture',
    keywords: ['plant', 'tissue', 'culture', 'media', 'growth', 'botanist'],
    icon: '🌱'
  },
  {
    id: 'service-dairy-testing',
    title: 'Dairy Testing & Equipment',
    description: 'Dairy analysis equipment and testing solutions',
    category: 'Service',
    url: '/services/dairy-testing',
    keywords: ['dairy', 'milk', 'testing', 'analysis', 'equipment'],
    icon: '🥛'
  },
  {
    id: 'service-soil-testing',
    title: 'Soil Testing Solutions',
    description: 'Soil analysis and testing equipment for agriculture',
    category: 'Service',
    url: '/services/soil-testing',
    keywords: ['soil', 'testing', 'agriculture', 'analysis', 'nutrients'],
    icon: '🌾'
  },
  {
    id: 'service-weighing-balances',
    title: 'Weighing Balances',
    description: 'Analytical balances and precision weighing equipment',
    category: 'Service',
    url: '/services/weighing-balances',
    keywords: ['weighing', 'balances', 'scales', 'precision', 'measurement', 'radwag'],
    icon: '⚖️'
  },
  {
    id: 'service-microscopy',
    title: 'Microscopy Solutions',
    description: 'Microscopes and microscopy equipment for laboratory analysis',
    category: 'Service',
    url: '/services/microscopy',
    keywords: ['microscopy', 'microscope', 'optical', 'magnification', 'slides'],
    icon: '🔍'
  },
  {
    id: 'service-laboratory-glassware',
    title: 'Laboratory Glassware',
    description: 'High-quality laboratory glassware and volumetric equipment',
    category: 'Service',
    url: '/services/laboratory-glassware',
    keywords: ['glassware', 'glass', 'beakers', 'flasks', 'volumetric', 'pyrex'],
    icon: '🧫'
  },
  {
    id: 'service-medical-refrigerators',
    title: 'Medical Refrigerators',
    description: 'Temperature-controlled refrigeration systems for medical storage',
    category: 'Service',
    url: '/services/medical-refrigerators',
    keywords: ['refrigerator', 'cooling', 'storage', 'temperature', 'medical'],
    icon: '❄️'
  },
  {
    id: 'service-filtration',
    title: 'Filtration Solutions',
    description: 'Advanced filtration systems and filters for laboratory use',
    category: 'Service',
    url: '/services/filtration',
    keywords: ['filtration', 'filters', 'purification', 'separation', 'membrane'],
    icon: '🔽'
  },
  {
    id: 'service-diagnostic-medical',
    title: 'Diagnostic & Medical Solutions',
    description: 'Medical diagnostic equipment and healthcare solutions',
    category: 'Service',
    url: '/services/diagnostic-medical',
    keywords: ['diagnostic', 'medical', 'healthcare', 'testing', 'analysis'],
    icon: '🏥'
  },
  {
    id: 'service-laboratory-chemicals',
    title: 'Laboratory Chemicals',
    description: 'Chemicals and reagents for laboratory analysis and research',
    category: 'Service',
    url: '/services/laboratory-chemicals',
    keywords: ['chemicals', 'reagents', 'compounds', 'substances', 'analytical'],
    icon: '⚗️'
  },
  {
    id: 'service-safety-solutions',
    title: 'Safety Solutions',
    description: 'Laboratory safety equipment and protective solutions',
    category: 'Service',
    url: '/services/safety-solutions',
    keywords: ['safety', 'protection', 'hazard', 'protective', 'equipment'],
    icon: '🛡️'
  },
  {
    id: 'service-glassware-consumables',
    title: 'Glassware & Consumables',
    description: 'Laboratory consumables and disposable glassware supplies',
    category: 'Service',
    url: '/services/glassware-consumables',
    keywords: ['consumables', 'disposable', 'supplies', 'glassware', 'items'],
    icon: '🧪'
  },
  {
    id: 'service-chemicals-reagents',
    title: 'Chemicals & Reagents',
    description: 'Comprehensive range of chemicals and reagents for analysis',
    category: 'Service',
    url: '/services/chemicals-reagents',
    keywords: ['reagents', 'chemicals', 'analytical', 'compounds', 'materials'],
    icon: '🧬'
  },
  {
    id: 'service-chemical-standards',
    title: 'Chemical Reference Standards',
    description: 'High-purity chemical reference standards for calibration',
    category: 'Service',
    url: '/services/chemical-reference-standards',
    keywords: ['standards', 'reference', 'calibration', 'purity', 'chemical'],
    icon: '📐'
  },
  {
    id: 'service-chromatography',
    title: 'Chromatography Solutions',
    description: 'Chromatography equipment and systems for separation analysis',
    category: 'Service',
    url: '/services/chromatography-solutions',
    keywords: ['chromatography', 'separation', 'analysis', 'HPLC', 'GC'],
    icon: '📊'
  },
  {
    id: 'service-laboratory-instruments',
    title: 'Laboratory Instruments & Equipment',
    description: 'Complete range of laboratory instruments and equipment',
    category: 'Service',
    url: '/services/laboratory-instruments',
    keywords: ['instruments', 'equipment', 'apparatus', 'devices', 'laboratory'],
    icon: '🔬'
  },
  {
    id: 'service-life-sciences',
    title: 'Life Sciences Products',
    description: 'Products and solutions for life sciences research',
    category: 'Service',
    url: '/services/life-sciences-products',
    keywords: ['life sciences', 'biology', 'biotechnology', 'research', 'products'],
    icon: '🧬'
  },

  // Industries
  {
    id: 'industry-education',
    title: 'Education',
    description: 'Laboratory solutions for educational institutions',
    category: 'Industry',
    url: '/industries/education',
    keywords: ['education', 'schools', 'universities', 'colleges', 'learning'],
    icon: '📚'
  },
  {
    id: 'industry-healthcare',
    title: 'Healthcare & Medical',
    description: 'Healthcare and medical laboratory solutions',
    category: 'Industry',
    url: '/industries/healthcare',
    keywords: ['healthcare', 'medical', 'hospitals', 'clinics', 'health'],
    icon: '🏥'
  },
  {
    id: 'industry-pharmaceutical',
    title: 'Pharmaceutical & Biopharmaceutical',
    description: 'Solutions for pharmaceutical and biopharmaceutical industries',
    category: 'Industry',
    url: '/industries/pharmaceutical',
    keywords: ['pharmaceutical', 'pharma', 'biopharmaceutical', 'drugs', 'medicines'],
    icon: '💊'
  },
  {
    id: 'industry-food-beverages',
    title: 'Food and Beverages',
    description: 'Testing and analysis solutions for food and beverage industry',
    category: 'Industry',
    url: '/industries/food-beverages',
    keywords: ['food', 'beverages', 'drinks', 'quality', 'analysis', 'testing'],
    icon: '🍔'
  },
  {
    id: 'industry-research',
    title: 'Research Institutions',
    description: 'Equipment and solutions for research institutions',
    category: 'Industry',
    url: '/industries/research-institutions',
    keywords: ['research', 'institutions', 'laboratories', 'institutes', 'studies'],
    icon: '🔬'
  },
  {
    id: 'industry-environmental',
    title: 'Environmental & Water',
    description: 'Environmental monitoring and water analysis solutions',
    category: 'Industry',
    url: '/industries/environmental',
    keywords: ['environmental', 'water', 'ecology', 'conservation', 'monitoring'],
    icon: '🌍'
  },

  // Policies
  {
    id: 'policy-anti-bribery',
    title: 'Anti-Bribery & Corruption',
    description: 'Company policy on anti-bribery and corruption prevention',
    category: 'Policy',
    url: '/policies/anti-bribery',
    keywords: ['anti-bribery', 'corruption', 'ethics', 'integrity', 'compliance'],
    icon: '⚖️'
  },
  {
    id: 'policy-business-continuity',
    title: 'Business Continuity Plan',
    description: 'Business continuity and disaster recovery planning',
    category: 'Policy',
    url: '/policies/business-continuity',
    keywords: ['business', 'continuity', 'disaster', 'recovery', 'planning'],
    icon: '🛟'
  },
  {
    id: 'policy-customer-service',
    title: 'Customer Service',
    description: 'Customer service policy and standards',
    category: 'Policy',
    url: '/policies/customer-service',
    keywords: ['customer', 'service', 'support', 'quality', 'satisfaction'],
    icon: '📞'
  },
  {
    id: 'policy-hse',
    title: 'HSE Policy',
    description: 'Health, Safety and Environment policy',
    category: 'Policy',
    url: '/policies/health-safety-environment',
    keywords: ['health', 'safety', 'environment', 'HSE', 'wellness'],
    icon: '🛡️'
  },
  {
    id: 'policy-environmental',
    title: 'Environmental Sustainability',
    description: 'Environmental sustainability and green initiatives',
    category: 'Policy',
    url: '/policies/environmental-sustainability',
    keywords: ['environmental', 'sustainability', 'green', 'eco-friendly', 'carbon'],
    icon: '🌱'
  },
  {
    id: 'policy-ethical',
    title: 'Ethical Policy',
    description: 'Ethical conduct and business principles',
    category: 'Policy',
    url: '/policies/ethical-policy',
    keywords: ['ethical', 'ethics', 'conduct', 'principles', 'values'],
    icon: '✨'
  },
  {
    id: 'policy-grievance',
    title: 'Grievance Mechanism',
    description: 'Employee and customer grievance resolution mechanism',
    category: 'Policy',
    url: '/policies/grievance-mechanism',
    keywords: ['grievance', 'complaints', 'resolution', 'appeal', 'mechanism'],
    icon: '📢'
  },

  // Partners
  {
    id: 'partner-palintest',
    title: 'Palintest',
    description: '🇰🇪 Official Distributor - Global leader in water testing',
    category: 'Partner',
    url: '/palintest',
    keywords: ['palintest', 'water testing', 'photometer', 'official distributor'],
    icon: '🌍'
  },
  {
    id: 'partner-radwag',
    title: 'Radwag',
    description: '🇰🇪 Official Distributor - Analytical balances and weighing equipment',
    category: 'Partner',
    url: '/radwag',
    keywords: ['radwag', 'weighing', 'balances', 'scales', 'official distributor'],
    icon: '⚖️'
  },
  {
    id: 'partner-lovibond',
    title: 'Lovibond',
    description: '🇰🇪 Official Distributor - Precision color measurement and water analysis',
    category: 'Partner',
    url: '/lovibond',
    keywords: ['lovibond', 'color measurement', 'water analysis', 'official distributor'],
    icon: '💧'
  },
  {
    id: 'partner-hanna',
    title: 'Hanna Instruments',
    description: '🇰🇪 Official Distributor - Analytical instrumentation',
    category: 'Partner',
    url: '/hanna-instruments',
    keywords: ['hanna', 'instruments', 'pH meters', 'analytical', 'official distributor'],
    icon: '📊'
  },
  {
    id: 'partner-duchefa',
    title: 'Duchefa Biochemie',
    description: '🇰🇪 Official Distributor - Plant tissue culture media',
    category: 'Partner',
    url: '/duchefa-biochemie',
    keywords: ['duchefa', 'plant tissue culture', 'media', 'official distributor'],
    icon: '🧪'
  },
  {
    id: 'partner-micromedica',
    title: 'MicroMedica',
    description: '🇰🇪 Official Distributor - Dehydrated culture media',
    category: 'Partner',
    url: '/micromedica',
    keywords: ['micromedica', 'culture media', 'microbiology', 'official distributor'],
    icon: '🧬'
  },
  {
    id: 'partner-bioendo',
    title: 'Bioendo',
    description: '🇰🇪 Official Distributor - Medical and laboratory equipment',
    category: 'Partner',
    url: '/bioendo',
    keywords: ['bioendo', 'medical equipment', 'laboratory', 'official distributor'],
    icon: '🔬'
  },
  {
    id: 'partner-microlab',
    title: 'MicroLab Scientific',
    description: '🇰🇪 Official Distributor - Laboratory equipment and instruments',
    category: 'Partner',
    url: '/microlab-scientific',
    keywords: ['microlab', 'scientific equipment', 'laboratory', 'official distributor'],
    icon: '🔭'
  }
];

export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase().trim();
  
  return searchData
    .filter(item => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const descriptionMatch = item.description.toLowerCase().includes(lowerQuery);
      const keywordMatch = item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery));
      
      return titleMatch || descriptionMatch || keywordMatch;
    })
    .sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      
      if (aTitle.startsWith(lowerQuery) && !bTitle.startsWith(lowerQuery)) return -1;
      if (!aTitle.startsWith(lowerQuery) && bTitle.startsWith(lowerQuery)) return 1;
      
      return aTitle.localeCompare(bTitle);
    });
}

export function getSearchItemsByCategory(category: SearchItem['category']): SearchItem[] {
  return searchData.filter(item => item.category === category);
}
