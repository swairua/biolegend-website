import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TrustedPartnersSection = () => {
  const officialDistributors = [
    { name: "Palintest", id: "palintest", color: "bg-blue-600", icon: "🌍" },
    { name: "Radwag", id: "radwag", color: "bg-purple-600", icon: "⚖️" },
    { name: "Lovibond", id: "lovibond", color: "bg-cyan-600", icon: "💧" },
    { name: "Hanna Instruments", id: "hanna-instruments", color: "bg-indigo-600", icon: "📊" },
    { name: "Duchefa Biochemie", id: "duchefa-biochemie", color: "bg-green-600", icon: "🧪" },
    { name: "MicroMedica", id: "micromedica", color: "bg-rose-600", icon: "🧬" },
    { name: "Bioendo", id: "bioendo", color: "bg-orange-600", icon: "🔬" },
    { name: "MicroLab Scientific", id: "microlab-scientific", color: "bg-teal-600", icon: "🔭" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="w-5 h-5 text-biolegend-yellow" />
            <span className="text-biolegend-yellow font-semibold">Official Distributors</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Trusted Partners in Kenya
          </h2>
          <p className="text-foreground/80 text-sm">
            Authorized distributors of world-leading laboratory equipment and scientific solutions
          </p>
        </div>

        {/* Distributors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
          {officialDistributors.map((distributor) => (
            <Link
              key={distributor.id}
              to={`/${distributor.id}`}
              className="group relative"
            >
              <div className={`${distributor.color} h-20 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden`}>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all"></div>
                <div className="relative text-center z-10">
                  <div className="text-2xl mb-1">{distributor.icon}</div>
                  <div className="text-xs font-semibold px-2 truncate">{distributor.name}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Supporting Text */}
        <div className="text-center">
          <p className="text-foreground/70 text-sm max-w-2xl mx-auto mb-4">
            Each official distributor is carefully selected to ensure quality, reliability, and dedicated support for your laboratory needs.
          </p>
          <Link to="/partners">
            <Button
              size="sm"
              variant="outline"
              className="border-biolegend-purple text-biolegend-purple hover:bg-biolegend-purple hover:text-white"
            >
              View All Partners
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
