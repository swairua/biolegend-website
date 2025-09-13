import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import Map from "@/components/Map";

const ContactSection = () => {
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
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background Image */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <img
              src="https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
              alt="Professional laboratory team ready to assist"
              className="w-full max-w-4xl mx-auto h-48 object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-semibold">Expert Laboratory Consultants</h3>
              <p className="text-white/90 text-sm">Ready to help you find the perfect solutions</p>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to enhance your laboratory capabilities? Contact our experts for personalized solutions
            and competitive quotes on all your scientific equipment needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Our team is here to help you find the right scientific solutions for your specific needs. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-biolegend-yellow text-biolegend-purple p-3 rounded-xl mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Visit Our Office</h4>
                      <p className="text-muted-foreground">
                        Alpha Center, Eastern Bypass<br />
                        Membley, Nairobi<br />
                        P.O. Box 85988-00200, Kenya
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/hgvMb4c9aiWBjqY59" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-biolegend-purple hover:text-biolegend-purple-dark transition-colors font-medium"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-biolegend-yellow text-biolegend-purple p-3 rounded-xl mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">
                          <a href="tel:+254741207690" className="hover:text-biolegend-purple transition-colors">
                            +254 741 207 690
                          </a>
                        </p>
                        <p className="text-muted-foreground">
                          <a href="tel:+254780165490" className="hover:text-biolegend-purple transition-colors">
                            +254 780 165 490
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-biolegend-yellow text-biolegend-purple p-3 rounded-xl mr-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                      <p className="text-muted-foreground">
                        <a 
                          href="mailto:biolegend@biolegendscientific.co.ke" 
                          className="hover:text-biolegend-purple transition-colors"
                        >
                          biolegend@biolegendscientific.co.ke
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-biolegend-yellow text-biolegend-purple p-3 rounded-xl mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form with Background */}
          <Card className="shadow-elegant overflow-hidden">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=600&h=200&fit=crop"
                alt="Laboratory contact background"
                className="w-full h-32 object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-biolegend-purple/80 to-biolegend-purple/60"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <h3 className="text-xl font-bold">Professional Support Team</h3>
                <p className="text-white/90 text-sm">Get expert advice and personalized solutions</p>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-biolegend-purple text-white p-3 rounded-xl mr-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
              </div>

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
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
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
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your email"
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
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your phone number"
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
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your organization"
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
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Tell us about your requirements, specific products you need, or any questions you have..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-biolegend-purple hover:bg-biolegend-purple-dark text-white font-semibold py-4 shadow-elegant"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Need immediate assistance?</strong> Call us directly at 
                  <a href="tel:+254741207690" className="text-biolegend-purple font-medium hover:underline ml-1">
                    +254 741 207 690
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <Map />
      </div>
    </section>
  );
};

export default ContactSection;
