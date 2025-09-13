import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service - Biolegend Scientific Ltd"
        description="Terms of service and commercial conditions for Biolegend Scientific Ltd"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Terms of Service
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
                  These Terms of Service ("Terms") govern your use of our website and services provided by 
                  Biolegend Scientific Ltd ("Company," "we," "our," or "us"). By accessing our website or 
                  purchasing our products, you agree to be bound by these Terms.
                </p>
              </section>

              {/* Payment Terms */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Payment Terms</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Payment terms are cash on delivery, unless credit terms are established at the Company's 
                    sole discretion. Buyer agrees to pay Company cost of collection of overdue invoices, 
                    including reasonable attorney's fees.
                  </p>
                  <p className="text-muted-foreground">
                    Net 30 days on all credit invoices or "Month Following invoice". In addition, Buyer shall 
                    pay all sales, use, customs, excise or other taxes presently or hereafter payable in regards 
                    to this transaction, and Buyer shall reimburse Company for any such taxes or charges paid 
                    by Biolegend Scientific Ltd. Including all withholding taxes which should be remitted 
                    immediately upon payments.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">Payment Information</p>
                    <p className="text-muted-foreground text-sm">
                      Specific payment details including banking information are provided in commercial 
                      documents such as invoices and purchase orders. Please refer to your invoice for 
                      complete payment instructions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Credit Terms */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Credit Approval</h2>
                <p className="text-muted-foreground">
                  Company shall have the continuing right to approve Buyer's credit. Company may at any time 
                  demand advance payment, additional security or guarantee of prompt payment. If Buyer refuses 
                  to give the payment, security or guarantee demanded, Company may terminate the Agreement, 
                  refuse to deliver any undelivered goods and Buyer shall immediately become liable to Company 
                  for the unpaid price of all goods delivered and for damages.
                </p>
              </section>

              {/* Service Charges */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Charge and Interest</h2>
                <p className="text-muted-foreground">
                  A service charge of 3% of the total invoice cost per month will be made on past due accounts 
                  unless otherwise agreed in writing by both parties.
                </p>
              </section>

              {/* Force Majeure */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Force Majeure</h2>
                <p className="text-muted-foreground mb-2">
                  Company shall not be liable for any damages resulting from any delay or failure of 
                  performance arising from any cause not reasonably within Company's control, including but 
                  not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Accidents, breakdowns or mechanical failure of machinery or equipment</li>
                  <li>Strikes or other labor troubles, shortage of labor, transportation, raw materials</li>
                  <li>Energy sources, or failure of usual means of supply</li>
                  <li>Fire, flood, war (declared or undeclared), insurrection, riots</li>
                  <li>Acts of God or the public enemy</li>
                  <li>Government priorities, allocations, limitations or other regulatory acts</li>
                </ul>
                <p className="text-muted-foreground mt-2">
                  Company may, at its option, cancel this Agreement or delay performance for any period 
                  reasonably necessary due to any of the foregoing circumstances.
                </p>
              </section>

              {/* Indemnity */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Indemnity</h2>
                <p className="text-muted-foreground">
                  Buyer shall indemnify and hold Company harmless from and against any and all claims, 
                  demands, lawsuits, damages, liabilities, costs and expenses (including attorney's fees), 
                  incurred by reason of any injury to or death of any person, or damage to any property, 
                  resulting from or arising out of any act, error, omission, negligence, or misconduct by 
                  Buyer in connection with the goods sold hereunder.
                </p>
              </section>

              {/* Product Quality and Delivery */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Product Quality and Delivery</h2>
                <p className="text-muted-foreground">
                  We are committed to providing high-quality scientific products and equipment. All products 
                  are subject to our quality control standards. Delivery times are estimates and may vary 
                  due to product availability and shipping logistics.
                </p>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including but not limited to text, graphics, logos, images, 
                  and software, is the property of Biolegend Scientific Ltd and is protected by applicable 
                  copyright and trademark laws.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Company shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Privacy</h2>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs 
                  your use of our services, to understand our practices.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of Kenya. 
                  Any disputes arising under these Terms shall be subject to the exclusive jurisdiction 
                  of the courts of Kenya.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground font-semibold">Biolegend Scientific Ltd</p>
                  <p className="text-muted-foreground">P.O. Box 85988-00200, Nairobi, Kenya</p>
                  <p className="text-muted-foreground">Email: biolegend@biolegendscientific.co.ke</p>
                  <p className="text-muted-foreground">Phone: +254 741 207 690 / +254 780 165 490</p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. We will notify you of any 
                  material changes by posting the new Terms of Service on this page with an updated 
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

export default TermsOfService;
