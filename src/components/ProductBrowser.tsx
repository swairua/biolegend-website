import { useState } from "react";
import { ExternalLink, Download, Info, X, ShoppingCart, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Product, Supplier } from "@/data/suppliers";

interface ProductBrowserProps {
  supplier: Supplier;
  onClose?: () => void;
}

const ProductBrowser = ({ supplier, onClose }: ProductBrowserProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleRequestQuote = (product: Product) => {
    const subject = `Quote Request: ${product.name} - ${supplier.name}`;
    const body = `Dear ${supplier.name} Team,

I would like to request a quote for the following product:

Product: ${product.name}
Description: ${product.description}
Category: ${product.category}

Please provide pricing, availability, and delivery information.

Thank you for your assistance.

Best regards,`;
    
    const mailtoLink = `mailto:${supplier.contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
        <div className="flex items-center space-x-4">
          <img 
            src={supplier.logo} 
            alt={`${supplier.name} logo`}
            className="w-12 h-12 rounded-lg bg-white p-2 shadow-md"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-900">{supplier.name} Products</h2>
            <p className="text-blue-700">{supplier.products.length} products available</p>
          </div>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supplier.products.map((product) => (
          <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-blue-500/20 overflow-hidden">
            {/* Product Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-blue-600 text-white">
                  {product.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-3">
              <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
                {product.name}
              </CardTitle>
              <CardDescription className="text-sm line-clamp-2">
                {product.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Specifications */}
              {product.specifications && product.specifications.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm text-blue-600 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {product.specifications.slice(0, 3).map((spec, idx) => (
                      <div key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {spec}
                      </div>
                    ))}
                    {product.specifications.length > 3 && (
                      <div className="text-xs text-muted-foreground">
                        +{product.specifications.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm text-green-600 mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.slice(0, 3).map((app, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-green-100 text-green-800">
                        {app}
                      </Badge>
                    ))}
                    {product.applications.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.applications.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              )}

              {/* Price */}
              {product.price && (
                <div className="text-sm font-semibold text-blue-600">
                  Price: {product.price}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="grid grid-cols-2 gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full">
                        <Info className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <img src={product.image} alt={product.name} className="w-8 h-8 rounded" />
                          <span>{product.name}</span>
                        </DialogTitle>
                        <DialogDescription>{product.description}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                        
                        {product.specifications && (
                          <div>
                            <h4 className="font-semibold mb-2">Specifications:</h4>
                            <ul className="space-y-1">
                              {product.specifications.map((spec, idx) => (
                                <li key={idx} className="text-sm bg-gray-50 p-2 rounded">• {spec}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {product.applications && (
                          <div>
                            <h4 className="font-semibold mb-2">Applications:</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.applications.map((app, idx) => (
                                <Badge key={idx} className="bg-green-100 text-green-800">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button onClick={() => handleRequestQuote(product)} className="flex-1">
                            <Mail className="w-4 h-4 mr-2" />
                            Request Quote
                          </Button>
                          {product.datasheet && (
                            <Button variant="outline" onClick={() => window.open(product.datasheet!, '_blank')}>
                              <Download className="w-4 h-4 mr-2" />
                              Datasheet
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {product.datasheet && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(product.datasheet!, '_blank')}
                      className="w-full"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Sheet
                    </Button>
                  )}
                </div>

                <Button 
                  size="sm"
                  onClick={() => handleRequestQuote(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <ShoppingCart className="w-3 h-3 mr-1" />
                  Request Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Supplier Contact Info */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Contact {supplier.name} for More Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Get in touch for:</p>
            <ul className="text-sm space-y-1">
              <li>• Custom product configurations</li>
              <li>• Bulk pricing and discounts</li>
              <li>• Technical support and training</li>
              <li>• Product demonstrations</li>
            </ul>
          </div>
          <div className="space-y-2">
            {supplier.contactInfo.email && (
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => window.open(`mailto:${supplier.contactInfo.email}`)}
              >
                <Mail className="w-4 h-4 mr-2" />
                {supplier.contactInfo.email}
              </Button>
            )}
            {supplier.websiteUrl && (
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => window.open(supplier.websiteUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBrowser;
