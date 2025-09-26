import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

const SEO = ({
  title = "Biolegend Scientific Ltd | Laboratory & Life Sciences Products in Kenya",
  description = "Laboratory equipment, water testing, life sciences, microbiology and biotechnology products in Kenya. Authorized partnerships, expert support, and nationwide delivery.",
  keywords = "laboratory supplier Kenya, water testing equipment, life sciences products, microbiology media, Duchefa, MicroMedica, Palintest, scientific instruments, chemicals and reagents",
  image = "https://cdn.builder.io/api/v1/image/assets%2Fcbe5d68584504715befd11df22888633%2F7ae1ac41b01644408c45b8bf1c19b281?format=webp&width=800",
  url = "https://biolegendscientific.co.ke",
  type = "website",
  schema
}: SEOProps) => {
  const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://biolegendscientific.co.ke');
  const absoluteImage = image.startsWith('http') ? image : (() => { try { return new URL(image, canonicalUrl).toString(); } catch { return image; } })();
  const is404 = /404|not found/i.test(title);
  // Enhanced structured data based on page type
  const getEnhancedSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Biolegend Scientific Ltd",
      "url": canonicalUrl,
      "logo": absoluteImage,
      "description": description,
      "alternateName": ["Biolegend Scientific", "Laboratory Supplier Kenya", "Palintest Supplier Kenya", "MicroMedica Supplier Kenya", "Loba Chemie Distributor Kenya"],
      "knowsAbout": ["Water Testing", "Plant Tissue Culture", "Microbiology Media", "Dehydrated Culture Media", "Laboratory Chemicals", "Chemical Analysis"],
      "serviceArea": {
        "@type": "Country",
        "name": "Kenya"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alpha Center, Eastern Bypass, Membley",
        "addressLocality": "Nairobi",
        "postalCode": "00200",
        "addressCountry": "KE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254741207690",
        "contactType": "Customer Service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/biolegendscientific.co.ke",
        "https://www.linkedin.com/in/biolegend-scientific-934b1937b",
        "https://x.com/BIOLEGENDSLTD?t=bsDNtEINWzlYbUk0fv-AqA&s=08",
        "https://wa.me/254741207690"
      ]
    };

    // Add breadcrumb for service/industry pages
    if (canonicalUrl.includes('/services/') || url.includes('/industries/')) {
      const pathParts = canonicalUrl.split('/');
      const breadcrumbList = {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://biolegendscientific.co.ke"
          }
        ]
      };

      if (pathParts.includes('services')) {
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://biolegendscientific.co.ke/services"
        });
        if (pathParts.length > 3) {
          breadcrumbList.itemListElement.push({
            "@type": "ListItem",
            "position": 3,
            "name": title.split(' - ')[0],
            "item": canonicalUrl
          });
        }
      }

      if (pathParts.includes('industries')) {
        breadcrumbList.itemListElement.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://biolegendscientific.co.ke/industries"
        });
        if (pathParts.length > 3) {
          breadcrumbList.itemListElement.push({
            "@type": "ListItem",
            "position": 3,
            "name": title.split(' - ')[0],
            "item": canonicalUrl
          });
        }
      }

      return [baseSchema, breadcrumbList];
    }

    // Enhanced product catalog for specific service pages
    if (canonicalUrl.includes('/services/water-testing')) {
      baseSchema.hasOfferCatalog = {
        "@type": "OfferCatalog",
        "name": "Palintest Water Testing Equipment",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Palintest Photometers",
              "description": "Professional photometers for water analysis and testing",
              "brand": { "@type": "Brand", "name": "Palintest" },
              "category": "Water Testing Equipment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Water Testing Kits",
              "description": "Complete test kits for various water quality parameters",
              "brand": { "@type": "Brand", "name": "Palintest" },
              "category": "Water Testing Kits"
            }
          }
        ]
      };
    } else if (canonicalUrl.includes('/micromedica')) {
      baseSchema.hasOfferCatalog = {
        "@type": "OfferCatalog",
        "name": "MicroMedica Dehydrated Culture Media",
        "itemListElement": [
          {"@type":"Offer","itemOffered":{"@type":"Product","name":"Agar & Broths","category":"Microbiology Media","brand":{"@type":"Brand","name":"MicroMedica"}}},
          {"@type":"Offer","itemOffered":{"@type":"Product","name":"Selective Media","category":"Microbiology Media","brand":{"@type":"Brand","name":"MicroMedica"}}}
        ]
      };
    } else if (canonicalUrl.includes('/loba-chemie')) {
      baseSchema.hasOfferCatalog = {
        "@type": "OfferCatalog",
        "name": "Loba Chemie Laboratory Chemicals",
        "itemListElement": [
          {"@type":"Offer","itemOffered":{"@type":"Product","name":"Analytical Reagents","category":"Laboratory Chemicals","brand":{"@type":"Brand","name":"Loba Chemie"}}},
          {"@type":"Offer","itemOffered":{"@type":"Product","name":"Solvents","category":"Laboratory Chemicals","brand":{"@type":"Brand","name":"Loba Chemie"}}}
        ]
      };
    } else if (canonicalUrl.includes('/services/laboratory-chemicals')) {
      baseSchema.hasOfferCatalog = {
        "@type": "OfferCatalog",
        "name": "Laboratory Chemicals and Reagents",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "High-Purity Chemicals",
              "description": "Ultra-pure chemicals for research and analytical applications",
              "brand": { "@type": "Brand", "name": "Merck" },
              "category": "Laboratory Chemicals"
            }
          }
        ]
      };
    } else {
      baseSchema.hasOfferCatalog = {
        "@type": "OfferCatalog",
        "name": "Laboratory Equipment and Life Sciences Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Laboratory Equipment",
              "description": "Complete range of laboratory instruments and equipment",
              "category": "Laboratory Equipment"
            }
          }
        ]
      };
    }

    return baseSchema;
  };

  const defaultSchema = getEnhancedSchema();

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Biolegend Scientific Ltd" />
      <meta name="robots" content={is404 ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage}/>
      <meta property="og:site_name" content="Biolegend Scientific Ltd" />
      
     
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="KE-30" />
      <meta name="geo.placename" content="Nairobi" />
      <meta name="geo.position" content="-1.286389;36.817223" />
      <meta name="ICBM" content="-1.286389, 36.817223" />

      {/* Enhanced SEO for better discovery */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="google-site-verification" content="verify-with-google-search-console" />

      {/* Mobile and responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#6366f1" />

      {/* Additional supplier-specific meta tags */}
      {url.includes('/services/water-testing') && (
        <>
          <meta name="product" content="Palintest Water Testing Equipment" />
          <meta name="supplier" content="Official Palintest Distributor Kenya" />
        </>
      )}
      {url.includes('/services/plant-tissue-culture') && (
        <>
          <meta name="product" content="Duchefa Biochemie Plant Tissue Culture Media" />
          <meta name="supplier" content="Duchefa Biochemie" />
        </>
      )}
      {(url.includes('/partner/micromedica') || url.includes('/micromedica') || url.includes('/services/life-sciences-products')) && (
        <>
          <meta name="product" content="MicroMedica Dehydrated Culture Media" />
          <meta name="supplier" content="MicroMedica Laboratories" />
        </>
      )}
      {(url.includes('/partner/loba-chemie') || url.includes('/loba-chemie') || url.includes('/services/laboratory-chemicals')) && (
        <>
          <meta name="product" content="Loba Chemie Laboratory Chemicals" />
          <meta name="supplier" content="Loba Chemie" />
        </>
      )}
      {url.includes('/services/laboratory-chemicals') && (
        <>
          <meta name="product" content="Laboratory Chemicals and Reagents" />
          <meta name="supplier" content="Merck, Fisher Scientific, Loba Chemie" />
        </>
      )}
      {url.includes('/industries/healthcare') && (
        <>
          <meta name="industry" content="Healthcare and Medical Laboratory" />
          <meta name="application" content="Clinical Diagnostics, Hospital Laboratory" />
        </>
      )}

      {/* Business Info */}
      <meta name="business:contact_data:locality" content="Nairobi" />
      <meta name="business:contact_data:country_name" content="Kenya" />
      <meta name="business:contact_data:phone_number" content="+254741207690" />
      <meta name="business:contact_data:email" content="biolegend@biolegendscientific.co.ke" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* JSON-LD Schema */}
      {Array.isArray(finalSchema) ? (
        finalSchema.map((schemaItem, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schemaItem)}
          </script>
        ))
      ) : (
        <script type="application/ld+json">
          {JSON.stringify(finalSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
