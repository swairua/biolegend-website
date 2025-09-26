import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const HealthSafetyEnvironment = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Health, Safety & Environmental Policy - Biolegend Scientific Ltd"
        description="Policy for safeguarding health, safety, and the environment across operations"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Health, Safety & Environmental Policy</h1>
          </div>
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. Purpose</h2>
                <p className="text-muted-foreground">Biolegend Scientific Limited is committed to protecting the health, safety, and welfare of our employees, customers, contractors, visitors, and the communities in which we operate. We aim to build sustainable communities through our people, products, and partnerships, while minimizing our environmental footprint and improving operational efficiency.</p>
                <p className="text-muted-foreground mt-2">This policy is aligned with ISO 14001, ISO 50001, and OHSAS 18001 standards. Where local legislation sets higher requirements, we will comply with those laws.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. Scope</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>All employees (permanent, temporary, or contract) of Biolegend Scientific Limited.</li>
                  <li>All sites, facilities, and operations under the Company’s control.</li>
                  <li>Vendors, contractors, and other third parties engaged on behalf of the Company.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. Policy Statement</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Comply with all applicable HSE legislation, codes of practice, and standards.</li>
                  <li>Minimize environmental impact and pursue continual improvement.</li>
                  <li>Establish measurable HSE objectives (including a carbon action plan) and review regularly.</li>
                  <li>Provide resources to implement HSE initiatives and maintain safe equipment and facilities.</li>
                  <li>Identify and assess risks, implement effective controls, and review them periodically.</li>
                  <li>Provide information, training, and supervision to Personnel on HSE matters.</li>
                  <li>Communicate HSE responsibilities clearly to employees, visitors, and contractors.</li>
                  <li>Monitor incidents, near misses, and safety performance, and implement lessons learned.</li>
                  <li>Review this policy at least annually or when significant changes occur.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. Roles and Responsibilities</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Chief Operations Director:</span> Provide leadership and resources; ensure HSE standards are integrated into strategy and operations.</p>
                  <p><span className="font-semibold text-foreground">Health, Safety & Environmental Advisor (HSEA):</span> Develop and maintain HSE policies, conduct audits, coordinate training, and advise on compliance.</p>
                  <p><span className="font-semibold text-foreground">Site Managers:</span> Implement HSE policies on-site, conduct inspections, ensure training, and investigate incidents.</p>
                  <p><span className="font-semibold text-foreground">Employees:</span> Take reasonable care, follow HSE instructions, report hazards, and participate in training and investigations.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. Continuous Improvement</h2>
                <p className="text-muted-foreground">We will regularly review HSE performance through audits, inspections, and feedback, updating policies and procedures as needed to maintain the highest standards.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Communication</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Displayed at all Company sites and offices.</li>
                  <li>Communicated to all employees, vendors, and contractors.</li>
                  <li>Made available to stakeholders upon request.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. Approval</h2>
                <p className="text-muted-foreground">Approved by: Management Team, Biolegend Scientific Limited. Effective immediately.</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HealthSafetyEnvironment;
