import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Trophy, Quote, BadgeCheck, ShieldCheck, PackageCheck, TrendingUp, CheckCircle2 } from "lucide-react";

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
                <h3 className="text-2xl font-bold text-red-800">Our Mission</h3>
              </div>
              <p className="text-red-700 leading-relaxed">
                To provide quality laboratory equipment, reagents, and consumables that support
                accurate testing, research, innovation, and industrial growth.
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
                To be a trusted partner in advancing science, research, and industry through
                reliable laboratory solutions.
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

        {/* Our Promise */}
        <div className="mb-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-10 text-white shadow-elegant flex flex-col md:flex-row items-center gap-6">
            <div className="bg-biolegend-yellow text-biolegend-purple w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
              <Quote className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Our Promise</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                Biolegend Scientific Limited is more than a supplier. We are a partner in science and industry
                committed to providing quality products, practical solutions, and dependable support to help
                our customers achieve their goals.
              </p>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">Our Core Values</h3>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Quality", description: "We provide reliable products that meet our customers' expectations.", icon: BadgeCheck },
              { name: "Integrity", description: "We believe in honesty, transparency and keeping our promises.", icon: ShieldCheck },
              { name: "Reliability", description: "We are committed to delivering what our customers need, when they need it.", icon: PackageCheck },
              { name: "Customer Focus", description: "We listen, understand, and work towards meeting our customers' needs.", icon: Users },
              { name: "Growth and Innovation", description: "We continuously seek better solutions to support science and industry.", icon: TrendingUp },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow border-biolegend-purple/10">
                <CardContent className="p-6">
                  <div className="bg-biolegend-purple text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-biolegend-purple mb-2">{value.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Objectives with Images */}
        <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 shadow-elegant overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Objectives</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To achieve these goals, we are committed to:
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Continuously expanding our product portfolio to cover diverse laboratory and industrial requirements.",
                    "Establishing partnerships with reputable manufacturers and international suppliers.",
                    "Maintaining adequate stock of fast-moving products to improve availability and reduce customer waiting times.",
                    "Providing timely quotations, deliveries, and after-sales technical support.",
                    "Supporting customers in equipment installation, maintenance, servicing, and calibration.",
                    "Offering practical and cost-effective solutions without compromising product quality.",
                    "Expanding our distribution network into Uganda, Tanzania, Rwanda, DRC and other African markets.",
                    "Investing in technical knowledge, staff development and improved customer service.",
                    "Maintaining ethical business practices and meeting all applicable regulatory and statutory requirements.",
                    "Building a sustainable business that delivers value to customers, employees, suppliers and other stakeholders.",
                  ].map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-biolegend-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-snug">{objective}</span>
                    </li>
                  ))}
                </ul>
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
      </div>
    </section>
  );
};

export default AboutSection;
