import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, FlaskConical, TestTube, Award } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
  
  const remoteBackgroundImages = [
    "https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/7639429/pexels-photo-7639429.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/8392542/pexels-photo-8392542.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  ];
  const localBackgroundImages = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
    "/images/hero-4.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % localBackgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [localBackgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {localBackgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Laboratory background ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = remoteBackgroundImages[index]; }}
            />
          </div>
        ))}
      </div>

      {/* More Transparent Purple Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-biolegend-purple/70 via-biolegend-purple/60 to-biolegend-purple-dark/70"></div>

      {/* Background Pattern with Icons */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 text-white/30">
          <Microscope className="w-32 h-32" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-white/30">
          <FlaskConical className="w-24 h-24" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-white/30">
          <TestTube className="w-28 h-28" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {localBackgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-biolegend-yellow shadow-glow' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="bg-biolegend-yellow text-biolegend-purple px-4 py-2 rounded-full text-sm font-semibold shadow-glow">
                🇰🇪 Official Palintest Supplier Kenya
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Delivering 
              <span className="block text-biolegend-yellow">Discoveries</span>
              <span className="text-3xl lg:text-4xl font-light">...and more</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Leading supplier of laboratory equipment, scientific instruments, chemicals, and supplies in Kenya. 
              We provide affordable, flexible, reliable, and high-quality scientific solutions to our esteemed clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90 font-semibold px-8 py-4 shadow-glow"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-biolegend-purple px-8 py-4"
              >
                Contact Us Today
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-biolegend-yellow mb-2">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-biolegend-yellow mb-2">1000+</div>
                <div className="text-white/80 text-sm">Products Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-biolegend-yellow mb-2">500+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-elegant">
              <img
                src="/images/hero-main.webp"
                alt="Biolegend Scientific Ltd - Laboratory Equipment and Scientific Solutions"
                className="w-full h-auto rounded-2xl shadow-lg"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://cdn.builder.io/api/v1/image/assets%2Fbac2cd3a1ca7463f8cc340d371458e7f%2F86b9c9bd0a79426d837d2c2897e64a27?format=webp&width=800'; }}
              />

              {/* Additional overlay images */}
              <div className="absolute -top-2 -right-2 w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="/images/overlay-1.jpg"
                  alt="Water testing equipment"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/8392542/pexels-photo-8392542.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'; }}
                />
              </div>

              <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="/images/overlay-2.jpg"
                  alt="Laboratory analysis"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'; }}
                />
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-biolegend-yellow text-biolegend-purple p-4 rounded-xl shadow-glow">
              <div className="text-sm font-semibold">ISO Certified</div>
              <div className="text-xs opacity-80">Quality Assured</div>
            </div>

            <div className="absolute top-1/2 -right-6 bg-blue-600 text-white p-3 rounded-xl shadow-elegant">
              <div className="text-xs font-semibold">Official Palintest</div>
              <div className="text-xs opacity-90">Distributor</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white text-biolegend-purple p-4 rounded-xl shadow-elegant">
              <div className="text-sm font-semibold">24/7 Support</div>
              <div className="text-xs opacity-80">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
