import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const GrievanceMechanism = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Grievance Mechanism Policy - Biolegend Scientific Ltd"
        description="Policy providing a structured, confidential, and fair process for resolving workplace concerns"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Grievance Mechanism Policy</h1>
          </div>
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-3">1. Purpose</h2>
                <p className="text-muted-foreground">We are committed to fostering a respectful, fair, and inclusive workplace where employees feel safe to raise concerns and have them addressed in a timely and impartial manner. This mechanism provides a clear, structured process for resolving workplace concerns while protecting against retaliation.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. Scope</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>All employees (permanent, temporary, or contract), interns, apprentices, and other workers under Company supervision.</li>
                </ul>
                <p className="text-muted-foreground mt-2">Covers grievances related to interpersonal conflicts, working conditions, management practices, compensation, workload, harassment, discrimination, bullying, or unfair treatment.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. Principles</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Fairness and impartiality</li>
                  <li>Confidentiality</li>
                  <li>Non-retaliation</li>
                  <li>Timeliness</li>
                  <li>Right to representation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. Grievance Procedure</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Step 1: Informal Resolution</span> — Raise concerns with immediate supervisor/line manager; if involved, approach next level or HR.</p>
                  <p><span className="font-semibold text-foreground">Step 2: Formal Complaint</span> — Submit a written grievance to HR/Grievance Officer with details and evidence.</p>
                  <p><span className="font-semibold text-foreground">Step 3: Investigation</span> — Acknowledge within 3 working days; conduct a thorough, impartial investigation.</p>
                  <p><span className="font-semibold text-foreground">Step 4: Decision and Outcome</span> — Communicate outcome in writing within 10–15 working days; may include corrective action, mediation, or other remedies.</p>
                  <p><span className="font-semibold text-foreground">Step 5: Appeal</span> — Appeal to Managing Director or Appeals Panel within 5 working days; decision is final.</p>
                  <p><span className="font-semibold text-foreground">Step 6: Follow-Up</span> — HR follows up to ensure effectiveness and prevent recurrence; lessons inform improvements.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. Roles and Responsibilities</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Employees: Raise concerns promptly and cooperate with investigations.</li>
                  <li>Supervisors/Managers: Address issues fairly, escalate concerns, and encourage open communication.</li>
                  <li>HR/Grievance Officer: Oversee the process, maintain records, and ensure confidentiality.</li>
                  <li>Senior Management: Provide resources, ensure non-retaliation, and support resolution.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Confidentiality and Records</h2>
                <p className="text-muted-foreground">All grievance-related information will be treated as confidential and stored securely by HR. Records include the grievance, investigation notes, correspondence, and outcomes, retained per Company policy and privacy requirements.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. Monitoring and Review</h2>
                <p className="text-muted-foreground">HR will monitor grievances to identify trends and report to senior management. This policy will be reviewed annually or when significant changes occur.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">8. Communication</h2>
                <p className="text-muted-foreground">This policy will be shared during induction and made available on notice boards or the Company's website. Training may be provided to managers and staff.</p>
              </section>

              <section>
                <p className="text-muted-foreground">Approved by: Management Team, Biolegend Scientific Limited</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GrievanceMechanism;
