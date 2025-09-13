import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Trophy, Shield, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <img
              src="https://images.pexels.com/photos/9574411/pexels-photo-9574411.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
              alt="Modern laboratory facility"
              className="w-full max-w-4xl mx-auto h-64 object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-semibold">State-of-the-art Laboratory Facilities</h3>
              <p className="text-white/90 text-sm">Supporting Kenya's Scientific Community</p>
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Biolegend Scientific Ltd, we are committed to providing the most compelling scientific experience possible
            to our valued clients across Kenya and East Africa.
          </p>
        </div>

        {/* Mission, Vision, Why Us Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-red-500 text-white p-3 rounded-xl mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">MISSION</h3>
              </div>
              <p className="text-red-700 leading-relaxed">
                Our mission is to provide affordable, flexible, reliable and high quality scientific solutions 
                to our esteemed clients.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 text-white p-3 rounded-xl mr-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Our Vision</h3>
              </div>
              <p className="text-green-700 leading-relaxed">
                To give customers the most compelling scientific experience possible through innovative solutions 
                and exceptional service delivery.
              </p>
            </CardContent>
          </Card>

          {/* Why Us */}
          <Card className="bg-gradient-to-br from-biolegend-purple/10 to-biolegend-purple/20 border-biolegend-purple/30 shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-biolegend-purple text-white p-3 rounded-xl mr-4">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-biolegend-purple">Why Us</h3>
              </div>
              <ul className="text-biolegend-purple-dark space-y-2 text-sm">
                <li>• Successful experiences</li>
                <li>• Multi-vendor experiences</li>
                <li>• Ability to beat quick deadlines</li>
                <li>• Direct importers advantage</li>
                <li>• Price competitive</li>
                <li>• Highly qualified certified staff</li>
                <li>• International security standards</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Goals and Objectives with Images */}
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 shadow-elegant overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Goals And Objectives</h3>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Our primary objective is to serve our customers in a way that is remarkably different from our
                    competitors so that we do not just supply the orders but do it in a way that leaves a positive
                    impression on them.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    By so doing, we intend to make ourselves the company of choice to any client we come across.
                    Our long-term objective is to build a market that is not entirely based on price but on customer
                    satisfaction, the ultimate goal being to enhance value for money.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Scientific team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-100/20"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Customers with Visual Elements */}
        <Card className="mt-8 bg-gradient-to-r from-red-50 to-red-100 border-red-200 shadow-elegant overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-2 p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-red-500 text-white p-4 rounded-xl mr-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-red-800">Our Customers</h3>
                </div>
                <p className="text-red-700 leading-relaxed text-lg">
                  Customers form the heart of all service industries activities and every action. This originates from
                  our quest to satisfy our customers' expectations and give them more value for their money.
                </p>

                {/* Customer Icons */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl mb-2">🏥</div>
                    <div className="text-sm font-medium text-red-800">Healthcare</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl mb-2">🎓</div>
                    <div className="text-sm font-medium text-red-800">Education</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="text-2xl mb-2">🔬</div>
                    <div className="text-sm font-medium text-red-800">Research</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                  alt="Laboratory professionals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-red-100/30"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-biolegend-yellow text-biolegend-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Shield className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Quality Assurance</h4>
            <p className="text-muted-foreground">
              All our products meet international standards and undergo rigorous quality control processes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-biolegend-yellow text-biolegend-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Clock className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Fast Delivery</h4>
            <p className="text-muted-foreground">
              Quick turnaround times and efficient logistics ensure your laboratory operations never stop.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-biolegend-yellow text-biolegend-purple w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3">Expert Support</h4>
            <p className="text-muted-foreground">
              Our certified professionals provide technical support and consultation for all your scientific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
