import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShieldAlert, LifeBuoy, Headset, Leaf, Scale, Megaphone, ScrollText } from "lucide-react";

const policies = [
  { name: "Anti-Bribery and Corruption Policy", slug: "anti-bribery", icon: <ShieldAlert className="w-5 h-5 text-red-600" /> },
  { name: "Business Continuity Plan (BCP)", slug: "business-continuity", icon: <LifeBuoy className="w-5 h-5 text-sky-600" /> },
  { name: "Customer Service Policy", slug: "customer-service", icon: <Headset className="w-5 h-5 text-purple-600" /> },
  { name: "Health, Safety & Environmental Policy", slug: "health-safety-environment", icon: <Leaf className="w-5 h-5 text-green-700" /> },
  { name: "Environmental Sustainability Policy", slug: "environmental-sustainability", icon: <Leaf className="w-5 h-5 text-emerald-700" /> },
  { name: "Ethical Policy", slug: "ethical-policy", icon: <Scale className="w-5 h-5 text-amber-700" /> },
  { name: "Grievance Mechanism Policy", slug: "grievance-mechanism", icon: <Megaphone className="w-5 h-5 text-pink-600" /> },
];

const Policies = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Policies - Biolegend Scientific Ltd"
        description="Company policies including anti-bribery, continuity, customer service, HSE, sustainability, ethics, and grievance mechanism"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Company Policies</h1>
            <p className="text-muted-foreground">Browse our policy documents</p>
          </div>
          <Card className="shadow-elegant">
            <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {policies.map((p) => (
                <Link key={p.slug} to={`/policies/${p.slug}`} className="flex items-center gap-3 p-4 rounded-lg border hover:bg-biolegend-yellow/10 hover:text-biolegend-purple transition-colors">
                  {p.icon}
                  <span className="font-medium">{p.name}</span>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policies;
