import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const EnvironmentalSustainability = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Environmental Sustainability Policy - Biolegend Scientific Ltd"
        description="Policy outlining commitments and expectations for environmental sustainability"
      />
      <Header />
      <main className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Environmental Sustainability Policy</h1>
          </div>
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              <section>
                <p className="text-muted-foreground">Document Reference: HSE-ENV-001 • Version: 1.0</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
                <p className="text-muted-foreground">Biolegend Scientific Limited is committed to promoting environmental sustainability in all aspects of its operations. We aim to reduce our carbon footprint, conserve resources, minimize waste, and contribute positively to the protection of our planet. We recognize that our sustainability goals require collaboration with employees, suppliers, and customers.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">2. Purpose</h2>
                <p className="text-muted-foreground">This policy outlines our approach to environmental sustainability, sets measurable objectives, and guides employees, suppliers, and customers in supporting sustainable practices.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">3. Scope</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>All employees, contractors, and management.</li>
                  <li>All operations, facilities, and business activities.</li>
                  <li>Suppliers, vendors, and customers working with Biolegend Scientific Limited.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">4. Commitment to Environmental Sustainability</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">a) Ensure Compliance:</span> Adhere to relevant environmental regulations, standards, and best practices.</p>
                  <p><span className="font-semibold text-foreground">b) Reduce Waste:</span> Implement efficient waste management to minimize generation and maximize recycling and reuse.</p>
                  <p><span className="font-semibold text-foreground">c) Conserve Resources:</span> Use water, energy, and other resources efficiently to reduce consumption and carbon footprint.</p>
                  <p><span className="font-semibold text-foreground">d) Produce Eco-friendly Products:</span> Develop and supply products and solutions that conserve energy, reduce emissions, save lives, and protect ecosystems.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">5. Expectations from Suppliers and Customers</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">a) Compliance:</span> Adhere to applicable environmental laws, regulations, and standards.</p>
                  <p><span className="font-semibold text-foreground">b) Environmental Management Systems (EMS):</span> Implement and maintain an EMS for continuous improvement.</p>
                  <p><span className="font-semibold text-foreground">c) Resource Efficiency:</span> Optimize use of natural resources and prioritize renewable energy where possible.</p>
                  <p><span className="font-semibold text-foreground">d) Waste Reduction:</span> Promote reduction, reuse, and recycling of materials.</p>
                  <p><span className="font-semibold text-foreground">e) Sustainable Sourcing:</span> Source responsibly, prioritizing eco-friendly, recycled, and ethically produced items.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">6. Collaboration and Support</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">i. Regular Communication:</span> Maintain open dialogue on goals, best practices, and emerging challenges.</p>
                  <p><span className="font-semibold text-foreground">ii. Training and Development:</span> Provide guidance and resources to support adoption of sustainable practices.</p>
                  <p><span className="font-semibold text-foreground">iii. Performance Monitoring:</span> Establish processes to monitor, assess, and improve sustainability performance collaboratively.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">7. Continuous Improvement</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Review and update the policy regularly.</li>
                  <li>Set measurable objectives, track progress, and share results with stakeholders.</li>
                  <li>Explore innovative solutions and partnerships to improve outcomes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">8. Responsibilities</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Senior Management: Provide resources and leadership support.</li>
                  <li>Environmental Sustainability Officer: Oversee implementation, monitoring, and reporting.</li>
                  <li>Employees: Follow sustainable practices and report risks.</li>
                  <li>Suppliers and Customers: Collaborate to implement sustainable practices across the value chain.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">9. Review and Approval</h2>
                <p className="text-muted-foreground">This policy will be reviewed annually or as needed in response to regulatory changes, stakeholder feedback, or significant environmental developments. All revisions will be communicated to employees, suppliers, and customers.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">10. Approval & Sign-off</h2>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <p className="text-foreground font-semibold">Eng. Ndegwa Waithaka — Chief Executive Officer — 01/01/2025</p>
                  <p className="text-foreground font-semibold">Tabitha Nderitu — Environmental Sustainability Officer — 01/01/2025</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnvironmentalSustainability;
