import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Check if the current path suggests Palintest-related content
  const isPalintestRelated = location.pathname.toLowerCase().includes('palintest') ||
                             location.pathname.toLowerCase().includes('water') ||
                             location.pathname.endsWith('.html');

  const popularPages = [
    { name: "Our Services", path: "/services" },
    { name: "Industries We Serve", path: "/industries" },
    { name: "Contact Us", path: "/contact" },
    { name: "Water Testing", path: "/services/water-testing" },
    { name: "Scientific Equipment", path: "/services/scientific-equipment" },
    { name: "Laboratory Chemicals", path: "/services/chemicals-reagents" }
  ];

  const palintestSuggestions = [
    { name: "🇰🇪 Palintest Supplier Kenya", path: "/services/water-testing", description: "Official Palintest distributor in Kenya" },
    { name: "Water Testing Equipment", path: "/services/water-testing", description: "Photometers, test kits, and analysis equipment" },
    { name: "Pool Testing Solutions", path: "/services/water-testing", description: "Swimming pool and spa water testing" },
    { name: "Environmental Monitoring", path: "/services/water-testing", description: "Environmental water quality testing" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Page Not Found - 404 Error - Biolegend Scientific Ltd"
        description="The page you're looking for cannot be found. Browse our laboratory equipment and scientific services or return to the homepage."
        url="https://biolegendscientific.co.ke/404"
      />
      <Header />

      <main className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-biolegend-purple/20 leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Oops! Page not found
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track to finding the laboratory equipment you need.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button size="lg" className="bg-biolegend-purple hover:bg-biolegend-purple/90 text-white">
                <Home className="w-5 h-5 mr-2" />
                Return to Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="border-biolegend-purple text-biolegend-purple hover:bg-biolegend-purple/10"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Palintest Specific Suggestions (if relevant) */}
          {isPalintestRelated && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  Looking for Palintest Products?
                </h3>
              </div>
              <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
                We're the official Palintest supplier and distributor in Kenya.
                {location.pathname.endsWith('.html') ?
                  ' It looks like you followed an old link with .html extension.' :
                  ' Here are our Palintest-related pages:'}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {palintestSuggestions.map((suggestion, index) => (
                  <Link
                    key={index}
                    to={suggestion.path}
                    className="bg-white rounded-lg p-4 hover:shadow-elegant transition-all duration-300 border-2 hover:border-blue-500/20 group text-left"
                  >
                    <div className="font-medium text-blue-900 group-hover:text-blue-600 transition-colors mb-1">
                      {suggestion.name}
                    </div>
                    <div className="text-sm text-blue-700">
                      {suggestion.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Popular Pages */}
          <div className="bg-muted/50 rounded-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-biolegend-purple mr-2" />
              <h3 className="text-xl font-semibold text-foreground">
                Popular Pages
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="bg-white rounded-lg p-4 hover:shadow-elegant transition-all duration-300 border-2 hover:border-biolegend-purple/20 group"
                >
                  <span className="text-foreground group-hover:text-biolegend-purple font-medium transition-colors">
                    {page.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-12 p-6 bg-biolegend-yellow/10 rounded-lg border border-biolegend-yellow/20">
            <h4 className="text-lg font-semibold text-biolegend-purple mb-2">
              Need Help Finding Something?
            </h4>
            <p className="text-muted-foreground mb-4">
              Our team is here to help you find the right laboratory equipment and solutions.
            </p>
            <Link to="/contact">
              <Button className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                Contact Our Experts
              </Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
