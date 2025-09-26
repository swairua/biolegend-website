import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const EthicalPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Ethical Policy - Biolegend Scientific Ltd"
        description="Policy outlining ethical principles guiding conduct with employees, customers, suppliers, and stakeholders"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Ethical Policy</h1>
          </div>
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. Purpose</h2>
                <p className="text-muted-foreground">Biolegend Scientific Limited is committed to supplying scientific research products responsibly, ethically, and in full compliance with applicable standards. This policy sets out the principles guiding our conduct with employees, customers, suppliers, and stakeholders.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. Core Values</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Integrity & Honesty</li>
                  <li>Product Quality & Safety</li>
                  <li>Respect & Inclusion</li>
                  <li>Accountability</li>
                  <li>Sustainability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. Compliance with Laws & Industry Standards</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Comply with import, export, and customs regulations, and relevant biosafety and quality standards.</li>
                  <li>Maintain accurate records of sourcing, shipping, and distribution.</li>
                  <li>Partner only with reputable suppliers whose products meet applicable safety, quality, and ethical standards.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. Product Integrity & Traceability</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Ensure authenticity and traceability of all items supplied.</li>
                  <li>Storage and handling must protect product integrity and conform to requirements.</li>
                  <li>Documentation (certificates, MSDS, lot numbers, etc.) must be complete and accurate.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. Conflicts of Interest</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Avoid situations where personal interests interfere with duties.</li>
                  <li>Disclose potential conflicts promptly to management.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Fair Business & Anti-Corruption</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Prohibit bribery, facilitation payments, and corrupt practices.</li>
                  <li>Gifts or hospitality must be modest, declared, and never intended to gain unfair advantage.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. Confidentiality & Data Protection</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Protect customer, supplier, and employee information.</li>
                  <li>Handle data responsibly in line with privacy regulations.</li>
                  <li>Never share confidential supplier specifications or pricing inappropriately.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">8. Health, Safety & Environment</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Maintain safe workplaces, storage facilities, and delivery practices.</li>
                  <li>Adopt eco-friendly packaging and transport solutions where practical and encourage recycling or reuse.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">9. Supplier & Partner Responsibility</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Work with suppliers who respect ethical sourcing, human rights, fair labour, and environmental care.</li>
                  <li>Where appropriate, review supplier compliance with applicable standards.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">10. Human Rights & Labour Practices</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Respect human rights and comply with employment laws.</li>
                  <li>Prohibit discrimination, harassment, forced labour, or child labour.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">11. Reporting Concerns</h2>
                <p className="text-muted-foreground">Encourage reporting of suspected breaches or unethical practices. Investigate reports promptly and protect those who raise concerns in good faith.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">12. Monitoring & Review</h2>
                <p className="text-muted-foreground">Management will promote awareness of this policy, ensure adherence, and review it annually or when regulations or industry standards change.</p>
                <p className="text-muted-foreground mt-2">Approved by: Eng. Ndegwa Waithaka — Director — 01/01/2025.</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EthicalPolicy;
