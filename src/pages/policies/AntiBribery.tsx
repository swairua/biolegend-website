import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const AntiBribery = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Anti-Bribery and Corruption Policy - Biolegend Scientific Ltd"
        description="Policy outlining Biolegend Scientific Ltd's zero-tolerance approach to bribery and corruption"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Anti-Bribery and Corruption Policy</h1>
          </div>
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. Purpose</h2>
                <p className="text-muted-foreground">This policy sets out the rules and principles that all employees, consultants, shareholders, and third parties of Biolegend Scientific Limited ("the Company") must adhere to. It explains the measures we take to maintain high ethical standards and our commitment to lawful, honest, and transparent business practices.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. Commitment to Integrity</h2>
                <p className="text-muted-foreground mb-2">Integrity is one of our core values. We are committed to conducting all business lawfully, ethically, and with integrity. All forms of bribery and corruption are unacceptable and will not be tolerated. No one working for or on behalf of the Company may act corruptly in dealings with any person.</p>
                <p className="text-muted-foreground">Bribery and corruption are illegal. Individuals found engaging in such activities may face disciplinary action, dismissal, significant fines, and/or imprisonment.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. Scope</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>All operations, functions, and geographic locations of Biolegend Scientific Limited.</li>
                  <li>All subsidiary companies.</li>
                  <li>All officers, employees (full-time, part-time, or temporary), consultants, and contractors ("Personnel").</li>
                  <li>All third parties acting for or on behalf of the Company, including agents, suppliers, distributors, and business partners.</li>
                </ul>
                <p className="text-muted-foreground mt-2">All Personnel must confirm that they have read, understood, and will comply with this policy. Third parties will be required to undertake to observe its provisions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. What Constitutes Bribery and Corruption</h2>
                <p className="text-muted-foreground mb-2">Bribery occurs when:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>A financial or other advantage is offered, given, or promised to induce or reward someone to perform their duties improperly.</li>
                  <li>A financial or other advantage is requested, agreed to, or accepted to induce or reward improper performance.</li>
                </ul>
                <p className="text-muted-foreground mt-2">Bribes may include cash, gifts, entertainment, kickbacks, excessive commissions, facilitation ("grease") payments, political or charitable donations made to secure an advantage, or anything else of value.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. General Prohibition</h2>
                <p className="text-muted-foreground">Biolegend Scientific Limited operates a zero-tolerance approach to bribery and corruption. Offering, promising, giving, requesting, or accepting a bribe directly or through third parties is strictly prohibited. This applies to dealings with both public officials and private individuals.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Gifts and Hospitality</h2>
                <p className="text-muted-foreground mb-2">Reasonable gifts or hospitality given or received in good faith and for legitimate business purposes may be acceptable, provided they are modest and proportionate, and not intended to influence decisions or secure an improper advantage. Lavish or unreasonable gifts or hospitality are prohibited.</p>
                <div className="bg-muted/50 p-4 rounded-lg mt-2">
                  <p className="text-foreground font-semibold">Gifts & Hospitality Register thresholds</p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                    <li>USD 75 (or local equivalent) for gifts.</li>
                    <li>USD 150 (or local equivalent) for hospitality.</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-2">Cash gifts are never permitted.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. Facilitation Payments</h2>
                <p className="text-muted-foreground">Facilitation ("grease") payments, small unofficial payments to expedite routine actions, are illegal and prohibited. Personnel and third parties acting on behalf of the Company must not offer or make such payments.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">8. Third Parties (Agents, Distributors, Suppliers, Partners)</h2>
                <p className="text-muted-foreground">The Company may be held liable for corrupt actions by those acting on its behalf. Before engaging third parties, appropriate due diligence must be carried out, and contracts must include anti-bribery clauses. We will not work with anyone we know or reasonably suspect engages in bribery or corruption.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">9. Compliance and Training</h2>
                <p className="text-muted-foreground">Personnel will receive training to understand and comply with this policy. Confirmation of compliance may be required annually.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">10. Whistleblowing</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Reports will be treated confidentially.</li>
                  <li>Retaliation against anyone who reports a concern in good faith will not be tolerated.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">11. Breach of Policy</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Disciplinary action, up to and including dismissal.</li>
                  <li>Termination of contracts with third parties.</li>
                  <li>Referral to law-enforcement authorities, where appropriate.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">12. Review</h2>
                <p className="text-muted-foreground">This policy will be reviewed regularly and updated as necessary to reflect changes in law or best practice.</p>
                <p className="text-muted-foreground mt-2">Approved by: Management Team, Biolegend Scientific Limited</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AntiBribery;
