import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Footer = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  return (
    <footer className="bg-biolegend-purple text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/images/biolegend-logo.png"
                alt="Biolegend Scientific Ltd"
                className="h-20 w-auto mb-4"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://cdn.builder.io/api/v1/image/assets%2F6a1f9014ca2549378a149859cedc5ead%2F3a08b35e4e8c4762a6ef27dc2e13d16f'; }}
              />
              <h3 className="text-2xl font-bold mb-2">BIOLEGEND SCIENTIFIC LTD</h3>
              <p className="text-biolegend-yellow font-medium italic">Delivering Discoveries..... and more</p>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              Leading supplier of laboratory equipment, scientific instruments, chemicals, and supplies in Kenya. 
              We provide affordable, flexible, reliable, and high-quality scientific solutions.
            </p>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 text-biolegend-yellow flex-shrink-0" />
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-white/90 text-sm">
                    Alpha Center, Eastern Bypass<br />
                    Membley, Nairobi<br />
                    P.O. Box 85988-00200
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-biolegend-yellow" />
                <div>
                  <p className="font-medium">Phone:</p>
                  <p className="text-white/90 text-sm">0741 207 690 / 0780 165 490</p>
                </div>
              </div>

              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-biolegend-yellow" />
                <div>
                  <p className="font-medium">WhatsApp:</p>
                  <a href="https://wa.me/254741207690" target="_blank" rel="noopener noreferrer" className="text-white/90 text-sm hover:text-biolegend-yellow transition-colors">
                    +254 741 207 690
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-biolegend-yellow" />
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-white/90 text-sm">biolegend@biolegendscientific.co.ke</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-biolegend-yellow" />
                <div>
                  <p className="font-medium">Business Hours:</p>
                  <p className="text-white/90 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-white/90 hover:text-biolegend-yellow transition-colors">
                Home
              </a>
              <a href="#about" className="block text-white/90 hover:text-biolegend-yellow transition-colors">
                About Us
              </a>
              <a href="#services" className="block text-white/90 hover:text-biolegend-yellow transition-colors">
                Products & Services
              </a>
              <a href="#contact" className="block text-white/90 hover:text-biolegend-yellow transition-colors">
                Contact Us
              </a>
              <button type="button" onClick={() => setQuoteOpen(true)} className="block text-white/90 hover:text-biolegend-yellow transition-colors text-left w-full">
                Request Quote
              </button>
              <button type="button" onClick={() => setCatalogOpen(true)} className="block text-white/90 hover:text-biolegend-yellow transition-colors text-left w-full">
                Product Catalogue
              </button>
            </div>

            {/* Dialogs for footer actions */}
            <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Request a Quote</DialogTitle>
                  <DialogDescription>Fill in your details and we will contact you with pricing.</DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget as HTMLFormElement);
                    const name = (fd.get('name') as string) || '';
                    const email = (fd.get('email') as string) || '';
                    const phone = (fd.get('phone') as string) || '';
                    const company = (fd.get('company') as string) || '';
                    const details = (fd.get('details') as string) || '';
                    const subject = `Quote Request from ${name || 'Website Visitor'}`;
                    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nDetails:\n${details}`;
                    window.location.href = `mailto:biolegend@biolegendscientific.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    setQuoteOpen(false);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="rq-name">Name</Label>
                      <Input id="rq-name" name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="rq-email">Email</Label>
                      <Input id="rq-email" type="email" name="email" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="rq-phone">Phone</Label>
                      <Input id="rq-phone" name="phone" placeholder="+254..." />
                    </div>
                    <div>
                      <Label htmlFor="rq-company">Company</Label>
                      <Input id="rq-company" name="company" placeholder="Company name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="rq-details">Details</Label>
                    <Textarea id="rq-details" name="details" placeholder="Tell us what you need a quote for..." className="min-h-28" />
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setQuoteOpen(false)}>Cancel</Button>
                    <Button type="submit" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">Send Request</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={catalogOpen} onOpenChange={setCatalogOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Request Product Catalogue</DialogTitle>
                  <DialogDescription>Let us know which catalogue or product range you’re interested in.</DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget as HTMLFormElement);
                    const name = (fd.get('name') as string) || '';
                    const email = (fd.get('email') as string) || '';
                    const interest = (fd.get('interest') as string) || '';
                    const notes = (fd.get('notes') as string) || '';
                    const subject = `Product Catalogue Request from ${name || 'Website Visitor'}`;
                    const body = `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nNotes:\n${notes}`;
                    window.location.href = `mailto:biolegend@biolegendscientific.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    setCatalogOpen(false);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pc-name">Name</Label>
                      <Input id="pc-name" name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="pc-email">Email</Label>
                      <Input id="pc-email" type="email" name="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="pc-interest">Catalogue / Interest</Label>
                    <Input id="pc-interest" name="interest" placeholder="e.g., Palintest, Glassware, Reagents" />
                  </div>
                  <div>
                    <Label htmlFor="pc-notes">Notes</Label>
                    <Textarea id="pc-notes" name="notes" placeholder="Any additional details..." className="min-h-28" />
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setCatalogOpen(false)}>Cancel</Button>
                    <Button type="submit" className="bg-biolegend-yellow text-biolegend-purple hover:bg-biolegend-yellow/90">Send Request</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/biolegendscientific" target="_blank" rel="noopener noreferrer" className="text-white hover:text-biolegend-yellow transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-biolegend-yellow transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © 2024 Biolegend Scientific Ltd. All rights reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
              <a href="/privacy-policy" className="text-white/80 hover:text-biolegend-yellow text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-white/80 hover:text-biolegend-yellow text-sm transition-colors">
                Terms of Service
              </a>
              <a href="https://maps.app.goo.gl/hgvMb4c9aiWBjqY59" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-biolegend-yellow text-sm transition-colors">
                Find Us on Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
