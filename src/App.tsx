import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HTMLRedirect from "@/components/HTMLRedirect";
import Index from "./pages/Index";
import ServicesUpdated from "./pages/ServicesUpdated";
import IndustriesUpdated from "./pages/IndustriesUpdated";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ChemicalReferenceStandards from "./pages/services/ChemicalReferenceStandards";
import ChromatographySolutions from "./pages/services/ChromatographySolutions";
import LaboratoryInstruments from "./pages/services/LaboratoryInstruments";
import LifeSciencesProducts from "./pages/services/LifeSciencesProducts";
import ScientificEquipment from "./pages/services/ScientificEquipment";
import WaterTesting from "./pages/services/WaterTesting";
import PlantTissueCulture from "./pages/services/PlantTissueCulture";
import DairyTesting from "./pages/services/DairyTesting";
import SoilTesting from "./pages/services/SoilTesting";
import ChemicalsReagents from "./pages/services/ChemicalsReagents";
import WeighingBalances from "./pages/services/WeighingBalances";
import Microscopy from "./pages/services/Microscopy";
import LaboratoryGlassware from "./pages/services/LaboratoryGlassware";
import Education from "./pages/industries/Education";
import Healthcare from "./pages/industries/Healthcare";
import Pharmaceutical from "./pages/industries/Pharmaceutical";
import FoodBeverages from "./pages/industries/FoodBeverages";
import ResearchInstitutions from "./pages/industries/ResearchInstitutions";
import Environmental from "./pages/industries/Environmental";
import MedicalRefrigerators from "./pages/services/MedicalRefrigerators";
import Filtration from "./pages/services/Filtration";
import DiagnosticMedical from "./pages/services/DiagnosticMedical";
import LaboratoryChemicals from "./pages/services/LaboratoryChemicals";
import SafetySolutions from "./pages/services/SafetySolutions";
import GlasswareConsumables from "./pages/services/GlasswareConsumables";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PartnerPage from "./pages/PartnerPage";
import Policies from "./pages/Policies";
import Employees from "./pages/Employees";
import AntiBribery from "./pages/policies/AntiBribery";
import BusinessContinuity from "./pages/policies/BusinessContinuity";
import CustomerServicePolicy from "./pages/policies/CustomerService";
import HealthSafetyEnvironment from "./pages/policies/HealthSafetyEnvironment";
import EnvironmentalSustainability from "./pages/policies/EnvironmentalSustainability";
import EthicalPolicy from "./pages/policies/EthicalPolicy";
import GrievanceMechanism from "./pages/policies/GrievanceMechanism";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <HTMLRedirect />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesUpdated />} />
            <Route path="/services/chemical-reference-standards" element={<ChemicalReferenceStandards />} />
            <Route path="/services/chromatography-solutions" element={<ChromatographySolutions />} />
            <Route path="/services/laboratory-instruments" element={<LaboratoryInstruments />} />
            <Route path="/services/life-sciences-products" element={<LifeSciencesProducts />} />
            <Route path="/services/scientific-equipment" element={<ScientificEquipment />} />
            <Route path="/services/water-testing" element={<WaterTesting />} />
            <Route path="/services/plant-tissue-culture" element={<PlantTissueCulture />} />
            <Route path="/services/dairy-testing" element={<DairyTesting />} />
            <Route path="/services/soil-testing" element={<SoilTesting />} />
            <Route path="/services/chemicals-reagents" element={<ChemicalsReagents />} />
            <Route path="/services/weighing-balances" element={<WeighingBalances />} />
            <Route path="/services/microscopy" element={<Microscopy />} />
            <Route path="/services/laboratory-glassware" element={<LaboratoryGlassware />} />
            <Route path="/services/medical-refrigerators" element={<MedicalRefrigerators />} />
            <Route path="/services/filtration" element={<Filtration />} />
            <Route path="/services/diagnostic-medical" element={<DiagnosticMedical />} />
            <Route path="/services/laboratory-chemicals" element={<LaboratoryChemicals />} />
            <Route path="/services/safety-solutions" element={<SafetySolutions />} />
            <Route path="/services/glassware-consumables" element={<GlasswareConsumables />} />
            <Route path="/industries" element={<IndustriesUpdated />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/pharmaceutical" element={<Pharmaceutical />} />
            <Route path="/industries/food-beverages" element={<FoodBeverages />} />
            <Route path="/industries/research-institutions" element={<ResearchInstitutions />} />
            <Route path="/industries/environmental" element={<Environmental />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* Policies */}
            <Route path="/policies" element={<Policies />} />
            <Route path="/policies/anti-bribery" element={<AntiBribery />} />
            <Route path="/policies/business-continuity" element={<BusinessContinuity />} />
            <Route path="/policies/customer-service" element={<CustomerServicePolicy />} />
            <Route path="/policies/health-safety-environment" element={<HealthSafetyEnvironment />} />
            <Route path="/policies/environmental-sustainability" element={<EnvironmentalSustainability />} />
            <Route path="/policies/ethical-policy" element={<EthicalPolicy />} />
            <Route path="/policies/grievance-mechanism" element={<GrievanceMechanism />} />
            {/* Partner Pages */}
            <Route path="/palintest" element={<PartnerPage />} />
            <Route path="/lovibond" element={<PartnerPage />} />
            <Route path="/hanna-instruments" element={<PartnerPage />} />
            <Route path="/merck-millipore" element={<PartnerPage />} />
            <Route path="/fisher-scientific" element={<PartnerPage />} />
            <Route path="/loba-chemie" element={<PartnerPage />} />
            <Route path="/pyrex" element={<PartnerPage />} />
            <Route path="/glassco" element={<PartnerPage />} />
            <Route path="/labtron" element={<PartnerPage />} />
            <Route path="/biobase" element={<PartnerPage />} />
            <Route path="/duchefa-biochemie" element={<PartnerPage />} />
            <Route path="/micromedica" element={<PartnerPage />} />
            {/* Generic partner route for dynamic access */}
            <Route path="/partner/:partnerId" element={<PartnerPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
