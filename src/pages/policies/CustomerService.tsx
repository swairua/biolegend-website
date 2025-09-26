import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const CustomerServicePolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Customer Service Policy - Biolegend Scientific Ltd"
        description="Policy outlining our commitment to professional, ethical, and timely customer service"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Customer Service Policy</h1>
          </div>
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. Purpose</h2>
                <p className="text-muted-foreground">This policy outlines Biolegend Scientific Ltd’s commitment to providing exceptional, ethical, and professional customer service. We strive to meet and exceed client expectations by ensuring reliable, timely, and affordable delivery of quality products and services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. Scope</h2>
                <p className="text-muted-foreground">This policy applies to all employees, management, and representatives in interactions with customers, suppliers, and partners.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. Policy Statement</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Delivering quality scientific products that meet global standards.</li>
                  <li>Ensuring timely and accurate deliveries to support customer needs.</li>
                  <li>Offering fair and competitive pricing with integrity and transparency.</li>
                  <li>Providing professional, courteous interactions at all times.</li>
                  <li>Handling inquiries, feedback, and complaints promptly and effectively.</li>
                  <li>Maintaining strict compliance with ethical standards and values.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. Customer Rights</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Receive safe, high-quality, and authentic scientific products.</li>
                  <li>Be treated with dignity, respect, and fairness.</li>
                  <li>Access timely and accurate information regarding our products and services.</li>
                  <li>Have feedback acknowledged and resolved within a reasonable timeframe.</li>
                  <li>Confidential handling of sensitive information and business dealings.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. Service Standards</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Respond to inquiries within 24 business hours.</li>
                  <li>Process and deliver orders within agreed timelines.</li>
                  <li>Provide accurate invoices, delivery notes, and supporting documentation.</li>
                  <li>Offer technical support and product knowledge where necessary.</li>
                  <li>Review customer feedback regularly to improve service delivery.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Complaint Resolution</h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                  <li>Acknowledgment within 24 hours.</li>
                  <li>Investigation conducted fairly and professionally.</li>
                  <li>Resolution or solution communicated within a reasonable timeframe.</li>
                  <li>Escalation to senior management if unresolved.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. Responsibilities</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Management: Ensure implementation and continuous training.</li>
                  <li>Employees: Adhere to the policy and deliver services with professionalism.</li>
                  <li>Customers: Provide feedback to help improve services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">8. Review of Policy</h2>
                <p className="text-muted-foreground">This policy will be reviewed annually to ensure effectiveness and alignment with company values, industry best practices, and customer needs.</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerServicePolicy;
