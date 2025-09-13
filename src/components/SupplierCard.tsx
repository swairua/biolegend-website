import { ExternalLink, MapPin, Calendar, Award, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Supplier } from "@/data/suppliers";

interface SupplierCardProps {
  supplier: Supplier;
  onViewProducts?: (supplierId: string) => void;
  showProductCount?: boolean;
}

const SupplierCard = ({ supplier, onViewProducts, showProductCount = true }: SupplierCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-blue-500/20 overflow-hidden">
      {/* Supplier Header Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={supplier.image} 
          alt={`${supplier.name} facilities`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center space-x-3">
          <img 
            src={supplier.logo} 
            alt={`${supplier.name} logo`}
            className="w-12 h-12 rounded-lg bg-white p-1 shadow-md"
          />
          <div>
            <h3 className="text-white font-bold text-lg">{supplier.name}</h3>
            {supplier.established && (
              <div className="flex items-center text-white/80 text-sm">
                <Calendar className="w-3 h-3 mr-1" />
                Est. {supplier.established}
              </div>
            )}
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardDescription className="text-muted-foreground text-sm line-clamp-2">
          {supplier.description}
        </CardDescription>
        
        {/* Specialties */}
        <div className="flex flex-wrap gap-1 mt-2">
          {supplier.specialties.slice(0, 3).map((specialty, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
          {supplier.specialties.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{supplier.specialties.length - 3} more
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Countries */}
        {supplier.countries && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{supplier.countries.join(", ")}</span>
          </div>
        )}

        {/* Certifications */}
        {supplier.certification && supplier.certification.length > 0 && (
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-blue-600" />
            <div className="flex flex-wrap gap-1">
              {supplier.certification.slice(0, 2).map((cert, idx) => (
                <Badge key={idx} className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {cert}
                </Badge>
              ))}
              {supplier.certification.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{supplier.certification.length - 2}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Product Count */}
        {showProductCount && (
          <div className="text-sm text-muted-foreground">
            <strong>{supplier.products.length}</strong> products available
          </div>
        )}

        {/* Contact Info */}
        <div className="space-y-1 text-xs text-muted-foreground">
          {supplier.contactInfo.phone && (
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>{supplier.contactInfo.phone}</span>
            </div>
          )}
          {supplier.contactInfo.email && (
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>{supplier.contactInfo.email}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(supplier.websiteUrl, '_blank')}
              className="w-full"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Website
            </Button>
            {supplier.productCatalogUrl && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open(supplier.productCatalogUrl!, '_blank')}
                className="w-full"
              >
                Catalog
              </Button>
            )}
          </div>
          {onViewProducts && (
            <Button 
              size="sm"
              onClick={() => onViewProducts(supplier.id)}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              View Products ({supplier.products.length})
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierCard;
