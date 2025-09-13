import { Card, CardContent } from "@/components/ui/card";

const Map = () => {
  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">Find Us</h3>
        <p className="text-muted-foreground">
          Visit our office location in Nairobi, Kenya
        </p>
      </div>
      
      <Card className="overflow-hidden shadow-elegant">
        <CardContent className="p-0">
          <div className="relative w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9999823406374!2d36.941866999999995!3d-1.1604725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6b5904ecfc3b%3A0x20291550f2b8f1f4!2sBiolegend%20Scientific%20Ltd!5e0!3m2!1sen!2ske!4v1755976204753!5m2!1sen!2ske" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Biolegend Scientific Ltd Location"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Map;
