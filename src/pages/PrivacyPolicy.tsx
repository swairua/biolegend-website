import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy - Biolegend Scientific Ltd"
        description="Privacy policy and data protection information for Biolegend Scientific Ltd"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: August 2025
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  Biolegend Scientific Ltd ("we," "our," or "us") is committed to protecting your privacy and 
                  personal information. This Privacy Policy explains how we collect, use, disclose, and 
                  safeguard your information when you visit our website, use our services, or interact with us.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="text-muted-foreground mb-2">We may collect the following types of personal information:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Contact information (name, email address, phone number, postal address)</li>
                      <li>Company or institutional affiliation</li>
                      <li>Professional details relevant to your scientific work</li>
                      <li>Purchase history and preferences</li>
                      <li>Communication records with our team</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technical Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Website usage data and analytics</li>
                      <li>IP address and browser information</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-2">We use your information for the following purposes:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Processing and fulfilling your orders</li>
                  <li>Providing customer support and technical assistance</li>
                  <li>Communicating about products, services, and updates</li>
                  <li>Improving our website and services</li>
                  <li>Compliance with legal and regulatory requirements</li>
                  <li>Marketing communications (with your consent)</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-2">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>With trusted service providers who assist in our operations</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              {/* Payment Information */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Information</h2>
                <p className="text-muted-foreground">
                  Payment processing details and banking information are provided in our commercial 
                  documents, including invoices and purchase agreements. We maintain strict security 
                  measures for all financial transactions and comply with industry standards for 
                  payment data protection.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no method of transmission over the internet is 100% secure.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, unless a longer retention period is required or 
                  permitted by law.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-2">You have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground font-semibold">Biolegend Scientific Ltd</p>
                  <p className="text-muted-foreground">P.O. Box 85988-00200, Nairobi, Kenya</p>
                  <p className="text-muted-foreground">Email: biolegend@biolegendscientific.co.ke</p>
                  <p className="text-muted-foreground">Phone: +254 741 207 690 / +254 780 165 490</p>
                </div>
              </section>

              {/* Updates */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new Privacy Policy on this page with an updated 
                  "Last updated" date.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
