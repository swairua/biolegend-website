import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ExternalLink, Mail, Phone, MapPin, Calendar, Globe, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllSuppliers } from "@/data/enhancedSuppliers";

const PartnerPage = () => {
  const { partnerId } = useParams();
  const suppliers = getAllSuppliers();

  // Get partner ID from either URL parameter or pathname
  const currentPartnerId = partnerId || window.location.pathname.slice(1); // Remove leading slash
  const partner = suppliers.find(s => s.id === currentPartnerId);

  const [logoUrl, setLogoUrl] = useState<string | undefined>(undefined);
  const [heroUrl, setHeroUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!partner?.websiteUrl) {
      setLogoUrl(partner?.logo);
      setHeroUrl(partner?.image);
      return;
    }

    const origin = (() => {
      try { return new URL(partner.websiteUrl).origin; } catch { return undefined; }
    })();

    const tryLoad = (src: string, timeout = 2500) => new Promise<string | null>((resolve) => {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      const to = setTimeout(() => { resolve(null); }, timeout);
      img.onload = () => { clearTimeout(to); resolve(src); };
      img.onerror = () => { clearTimeout(to); resolve(null); };
      img.src = src;
    });

    const buildCandidates = (type: 'logo' | 'hero'): string[] => {
      if (!origin) return [];
      const logoNames = [
        'logo-1.png','logo.png','logo.svg','white-logo.png','logo-2.png','logo-black.png','logo-1.svg','logo.webp'
      ];
      const heroNames = [
        'banner-1.jpg','banner.jpg','hero.jpg','header.jpg','banner-1.png','hero.png','header.png','hero.webp','banner.webp'
      ];
      const names = type === 'logo' ? logoNames : heroNames;
      const months = ['01','03','05','07','09','11'];
      const year = new Date().getFullYear();
      const years = [year, year-1, year-2, year-3, year-4];

      const urls: string[] = [];
      // direct uploads root
      for (const n of names) urls.push(`${origin}/wp-content/uploads/${n}`);
      // year/month guess
      for (const y of years) {
        for (const m of months) {
          for (const n of names) urls.push(`${origin}/wp-content/uploads/${y}/${m}/${n}`);
        }
      }
      return urls;
    };

    const pickFirst = async (urls: string[], batchSize = 6): Promise<string | undefined> => {
      for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        const results = await Promise.all(batch.map(u => tryLoad(u)));
        const found = results.find((r): r is string => typeof r === 'string' && !!r);
        if (found) return found;
      }
      return undefined;
    };

    (async () => {
      const defaultLogo = partner.logo;
      const defaultHero = partner.image;
      setLogoUrl(defaultLogo);
      setHeroUrl(defaultHero);

      if (origin) {
        const [foundLogo, foundHero] = await Promise.all([
          pickFirst(buildCandidates('logo')),
          pickFirst(buildCandidates('hero'))
        ]);
        if (foundLogo) setLogoUrl(foundLogo);
        if (foundHero) setHeroUrl(foundHero);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPartnerId]);

  if (!partner) {
    return <Navigate to="/404" replace />;
  }

  // Treat stock photos as placeholders; avoid showing them as partner hero assets
  const isStockPlaceholder = (url?: string) =>
    !url ? false : /images\.(unsplash|pexels)\.com/i.test(url);

  const effectiveLogo = logoUrl || partner.logo;
  const effectiveHero = heroUrl || partner.image;
  const showHeroImage = !!effectiveHero && !isStockPlaceholder(effectiveHero);
  const isLogoPlaceholder = isStockPlaceholder(effectiveLogo);

  return (
    <>
      <Helmet>
        <title>{partner.name} - Official Partner | BioLegend Solutions</title>
        <meta name="description" content={partner.description} />
        <meta name="keywords" content={`${partner.name}, ${partner.specialties.join(", ")}, ${partner.category}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Header />
        <SEO
          title={`${partner.name} - Partner | Biolegend Scientific`}
          description={partner.description}
          keywords={`${partner.name} Kenya, ${partner.category}, ${partner.specialties.join(', ')}`}
          url={`https://biolegendscientific.co.ke/${partner.id}`}
          image={partner.image}
        />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-r from-biolegend-purple to-biolegend-purple-dark text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    {isLogoPlaceholder ? (
                      <div className="w-20 h-12 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center text-white/90 text-sm font-semibold">
                        {partner.name}
                      </div>
                    ) : (
                      <img
                        src={effectiveLogo}
                        alt={`${partner.name} logo`}
                        className="w-20 h-12 object-contain bg-white/10 backdrop-blur-sm rounded-lg p-2"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                      />
                    )}
                    {partner.isOfficialDistributor && (
                      <Badge variant="secondary" className="bg-biolegend-yellow text-biolegend-purple-dark font-semibold">
                        Official Distributor
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {partner.name}
                  </h1>
                  <p className="text-xl mb-8 text-white/90 leading-relaxed">
                    {partner.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-biolegend-yellow text-biolegend-purple-dark hover:bg-biolegend-yellow-light"
                      onClick={() => window.open(partner.websiteUrl, '_blank')}
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      Visit Website
                    </Button>
                    {partner.productCatalogUrl && (
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-white text-white hover:bg-white hover:text-biolegend-purple"
                        onClick={() => window.open(partner.productCatalogUrl, '_blank')}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Product Catalog
                      </Button>
                    )}
                  </div>
                </div>
                <div className="relative">
                  {showHeroImage && (
                    <>
                      <img
                        src={effectiveHero}
                        alt={partner.name}
                        className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Company Information */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Company Details */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-biolegend-purple">Company Overview</CardTitle>
                    <CardDescription>Learn more about {partner.name}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Specialties */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-biolegend-purple-dark">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {partner.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="bg-biolegend-purple/10 text-biolegend-purple">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Category */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-biolegend-purple-dark">Category</h3>
                      <Badge variant="outline" className="border-biolegend-purple text-biolegend-purple">
                        {partner.category}
                      </Badge>
                    </div>

                    {/* Certifications */}
                    {partner.certification && partner.certification.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-biolegend-purple-dark flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Certifications
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {partner.certification.map((cert, index) => (
                            <Badge key={index} variant="outline" className="border-green-500 text-green-700">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Countries */}
                    {partner.countries && partner.countries.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-biolegend-purple-dark flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Operating Countries
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {partner.countries.map((country, index) => (
                            <Badge key={index} variant="secondary">
                              {country}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-biolegend-purple">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {partner.established && (
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-biolegend-purple" />
                        <div>
                          <p className="font-medium">Established</p>
                          <p className="text-sm text-gray-600">{partner.established}</p>
                        </div>
                      </div>
                    )}

                    {partner.contactInfo.email && (
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-biolegend-purple" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a 
                            href={`mailto:${partner.contactInfo.email}`}
                            className="text-sm text-biolegend-purple hover:underline"
                          >
                            {partner.contactInfo.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {partner.contactInfo.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-biolegend-purple" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a 
                            href={`tel:${partner.contactInfo.phone}`}
                            className="text-sm text-biolegend-purple hover:underline"
                          >
                            {partner.contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {partner.contactInfo.address && (
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-biolegend-purple" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-sm text-gray-600">{partner.contactInfo.address}</p>
                        </div>
                      </div>
                    )}

                    <div className="pt-4 border-t">
                      <Button 
                        className="w-full bg-biolegend-purple hover:bg-biolegend-purple-dark"
                        onClick={() => window.open(partner.websiteUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Partner Website
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gradient-to-r from-biolegend-purple to-biolegend-purple-dark">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto text-white">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Work with {partner.name}?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Contact us to learn more about {partner.name} products and how they can benefit your laboratory.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-biolegend-yellow text-biolegend-purple-dark hover:bg-biolegend-yellow-light"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Us
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-biolegend-purple"
                    onClick={() => window.open(partner.websiteUrl, '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Partner Website
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PartnerPage;
