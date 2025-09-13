import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Biolegend Scientific Ltd",
    "description": "Get in touch with Biolegend Scientific Ltd for laboratory equipment, scientific instruments, and technical support in Kenya.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Biolegend Scientific Ltd",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alpha Center, Eastern Bypass, Membley",
        "addressLocality": "Nairobi",
        "postalCode": "00200",
        "addressCountry": "KE"
      },
      "telephone": "+254741207690",
      "email": "biolegend@biolegendscientific.co.ke"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - Biolegend Scientific Ltd | Laboratory Equipment Kenya"
        description="Contact Biolegend Scientific Ltd for laboratory equipment, scientific instruments, and technical support. Located in Nairobi, Kenya. Call +254741207690 or email us."
        keywords="contact biolegend scientific, laboratory equipment kenya, scientific instruments nairobi, lab equipment support, biolegend contact"
        url="https://biolegendscientific.co.ke/contact"
        schema={schema}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Get in touch for laboratory solutions, technical support, or partnership opportunities
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to enhance your laboratory capabilities? Our team of experts is here to help you find the perfect scientific solutions.
                </p>

                <div className="space-y-8">
                  <Card className="border-l-4 border-l-biolegend-purple">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <MapPin className="w-6 h-6 mr-3 text-biolegend-purple" />
                        Our Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Alpha Center, Eastern Bypass<br />
                        Membley, Nairobi<br />
                        P.O. Box 55988-00200<br />
                        Kenya
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/hgvMb4c9aiWBjqY59" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-biolegend-purple hover:text-biolegend-purple/80 transition-colors"
                      >
                        View on Google Maps →
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-biolegend-purple">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <Phone className="w-6 h-6 mr-3 text-biolegend-purple" />
                        Phone & WhatsApp
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-muted-foreground">
                        <strong>Phone:</strong> 0741 207 690 / 0780 165 490
                      </p>
                      <p className="text-muted-foreground">
                        <strong>WhatsApp:</strong> 
                        <a href="https://wa.me/254741207690" target="_blank" rel="noopener noreferrer" className="ml-2 text-biolegend-purple hover:text-biolegend-purple/80 transition-colors">
                          +254 741 207 690
                        </a>
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-biolegend-purple">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <Mail className="w-6 h-6 mr-3 text-biolegend-purple" />
                        Email Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        <a href="mailto:biolegend@biolegendscientific.co.ke" className="text-biolegend-purple hover:text-biolegend-purple/80 transition-colors">
                          biolegend@biolegendscientific.co.ke
                        </a>
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-biolegend-purple">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <Clock className="w-6 h-6 mr-3 text-biolegend-purple" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday & Sunday: Closed
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+254 700 000 000"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Company/Institution
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your organization"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tell us about your laboratory needs or ask any questions..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-biolegend-purple hover:bg-biolegend-purple/90"
                      >
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Quick Contact Buttons */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <a href="https://wa.me/254741207690" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+254741207690">
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
              <p className="text-muted-foreground">
                Located at Alpha Center, Eastern Bypass, Membley - Nairobi
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-elegant overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8178307196967!2d36.8148!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OCc1My4zIkU!5e0!3m2!1sen!2ske!4v1234567890!5m2!1sen!2ske"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Biolegend Scientific Ltd Location"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
