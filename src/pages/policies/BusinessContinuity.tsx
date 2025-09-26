import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const BusinessContinuity = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Business Continuity Plan (BCP) - Biolegend Scientific Ltd"
        description="Plan to ensure continuity of operations and services during disruptions"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Business Continuity Plan (BCP)</h1>
          </div>
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. Purpose</h2>
                <p className="text-muted-foreground">The purpose of this Business Continuity Plan (BCP) is to ensure that Biolegend Scientific Ltd. can continue critical operations and services in the event of disruptions, such as natural disasters, supply chain interruptions, pandemics, cyberattacks, or other emergencies. This plan provides strategies and procedures to minimize downtime, safeguard employees and assets, and ensure reliable delivery of products and services to our customers.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. Scope</h2>
                <p className="text-muted-foreground">This BCP applies to all departments, employees, facilities, systems, suppliers, and stakeholders associated with Biolegend Scientific Ltd’s operations.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. Objectives</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Safeguard the health and safety of employees, clients, and stakeholders.</li>
                  <li>Protect company assets, records, and essential information.</li>
                  <li>Ensure continuity of supply and timely delivery of scientific research items.</li>
                  <li>Provide effective communication channels during and after a disruption.</li>
                  <li>Restore normal operations within the shortest possible time.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. Risk Assessment</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Supply Chain Disruptions – delays in importation, logistics breakdowns, or vendor failure.</li>
                  <li>Operational Risks – power outages, IT system failures, or warehouse incidents.</li>
                  <li>External Risks – pandemics, political instability, natural disasters, or regulatory changes.</li>
                  <li>Cybersecurity Risks – data breaches, ransomware, or system hacking.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. Business Impact Analysis (BIA)</h2>
                <p className="text-muted-foreground mb-2">Critical Functions: Procurement, warehousing, distribution, invoicing, and customer service.</p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground font-semibold mb-2">Maximum Tolerable Downtime</p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    <li>Customer order processing – 24 hours</li>
                    <li>Warehousing and distribution – 48 hours</li>
                    <li>Communication systems – 12 hours</li>
                    <li>Finance & invoicing – 48 hours</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Business Continuity Strategies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">1. Supply Chain Continuity</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Maintain relationships with multiple suppliers.</li>
                      <li>Keep a safety stock of high-demand items.</li>
                      <li>Use alternative logistics partners where necessary.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">2. IT & Data Protection</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Daily backups of company data stored securely (cloud & off-site).</li>
                      <li>Cybersecurity protocols, including firewalls, antivirus, and staff awareness.</li>
                      <li>Remote working capability for critical staff in case of office inaccessibility.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">3. Facilities & Operations</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Backup generators and alternative energy sources.</li>
                      <li>Fire safety equipment and regular drills.</li>
                      <li>Alternative warehouse arrangements in case of primary facility disruption.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">4. Human Resources</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Cross-training of staff to ensure role redundancy.</li>
                      <li>Employee safety protocols during emergencies.</li>
                      <li>Remote work policy in case of health or access disruptions.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">5. Finance & Administration</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Emergency funds to sustain operations during a crisis.</li>
                      <li>Insurance coverage for key risks (property, inventory, liability, cyber).</li>
                      <li>Flexible payment arrangements with suppliers/customers during disruptions.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. Communication Plan</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Internal: WhatsApp groups, emails, and emergency contacts for staff.</li>
                  <li>External: Customers and suppliers will be notified of any disruption and given updates.</li>
                  <li>Spokesperson: The Managing Director (or appointed deputy) will handle official communications.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">8. Roles & Responsibilities</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>BCP Team Leader (Managing Director): Overall coordination and decision-making.</li>
                  <li>Department Heads: Implement continuity strategies within their units.</li>
                  <li>IT Officer: Ensure data backup, system security, and restore functions.</li>
                  <li>HR Officer: Employee safety, welfare, and staffing adjustments.</li>
                  <li>Logistics Officer: Ensure alternative transport and distribution channels.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">9. Recovery & Resumption Procedures</h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                  <li>Assess the extent of disruption.</li>
                  <li>Activate relevant continuity strategies.</li>
                  <li>Communicate with employees, customers, and suppliers.</li>
                  <li>Restore critical functions in order of priority.</li>
                  <li>Conduct post-incident review and improvements.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">10. Plan Testing & Review</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>The BCP will be tested annually through simulations and reviewed regularly to address new risks.</li>
                  <li>Staff will receive training and awareness sessions to ensure readiness.</li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessContinuity;
