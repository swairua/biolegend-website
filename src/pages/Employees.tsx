import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmployeeProfile from "@/components/EmployeeProfile";
import SEO from "@/components/SEO";

const Employees = () => {
  const drCharlesKireru = {
    name: "Dr. Charles Kireru, PhD",
    title: "Practitioner & Consultant",
    specialization: "Human Capital & Organizational Development",
    email: "ckireru@gmail.com",
    phone: "+254 736 616 716",
    address: "P.O. Box 660-00232, Ruiru, Nairobi, Kenya",
    profileSummary:
      "Accomplished strategic leader with over 25 years of experience in human capital development, organizational transformation, strategic planning, and culture change within both public and private sectors. Renowned for aligning human capital strategies with long-term business objectives, enhancing human capacity, and driving transformational change for sustainable growth. Dynamic and trusted board-level leader and advisor with a commitment to integrity, professionalism, diversity, equity, inclusion, and engagement to create long-term value for shareholders and stakeholders.",
    coreCompetencies: [
      "Strategic Leadership & Team building",
      "Employee Experience design",
      "Corporate Governance and compliance",
      "Policy Formulation & Strategy Planning",
      "Change Management & Organizational Transformation",
      "Talent acquisition and Workforce Alignment",
      "Performance Management & Productivity Enhancement",
      "Social capital and relationships development",
      "Diversity, Equity & Inclusion (DEI) / Executive Coaching",
      "HR Digitization & Operational excellence",
      "Enterprise Risk Management & Skills Alignment",
      "Organizational Restructuring & Excellence",
      "Financial Stewardship & Resource Optimization",
      "Public Sector Reform & Institutional Strengthening",
      "Sustainability Coach / Ethics & Integrity driver",
      "Mental Health, Psychosocial wellbeing, adaptability",
    ],
    valueProposition:
      "Value anchored on end-to-end advice and expertise on priorities and C-suite decision-making, using in-depth industry knowledge to drive business growth, commercial viability, and strategic direction",
    experiences: [
      {
        title: "Group General Manager - Human Resources & Administration",
        company: "Kenya Tea Development Agency",
        period: "Previous Role",
        description: [
          "Led strategic HR initiatives across organizational units",
          "Drove organizational transformation and change management",
          "Enhanced workforce capacity and performance management",
        ],
      },
      {
        title: "Director – Human Resources",
        company: "Mount Kenya University",
        period: "Previous Role",
        description: [
          "Directed comprehensive HR strategy and organizational development",
          "Implemented talent management and employee engagement programs",
          "Led institutional strengthening and governance initiatives",
        ],
      },
      {
        title: "County Secretary and Head of the Public Service",
        company: "County Government of Nyandarua",
        period: "Previous Role",
        description: [
          "Provided strategic leadership in public sector transformation",
          "Implemented policy formulation and institutional strengthening",
          "Led organizational restructuring and excellence initiatives",
        ],
      },
      {
        title: "General Manager: Corporate Services",
        company: "National Housing Corporation",
        period: "Previous Role",
        description: [
          "Oversaw corporate services and organizational development",
          "Managed institutional change and strategic planning",
          "Enhanced operational efficiency and resource optimization",
        ],
      },
      {
        title: "Head of Relationships Management and Culture Change",
        company: "Kenya Ports Authority",
        period: "Previous Role",
        description: [
          "Led organizational culture transformation initiatives",
          "Managed stakeholder relationships and engagement",
          "Implemented change management strategies",
        ],
      },
      {
        title: "Head of Social Capital Investment and Relationship Management",
        company: "Kenya Airways",
        period: "Previous Role",
        description: [
          "Directed social capital development and employee engagement",
          "Managed strategic stakeholder relationships",
          "Enhanced organizational effectiveness through relationship building",
        ],
      },
      {
        title: "Head Of Human Resources",
        company: "Aga Khan Health Services East Africa",
        period: "Previous Role",
        description: [
          "Led comprehensive HR strategy in healthcare sector",
          "Implemented talent management and organizational development",
          "Enhanced institutional capacity and excellence",
        ],
      },
      {
        title: "Manager - Human Resources & Administration",
        company: "Numerical Machining Complex Ltd",
        period: "Previous Role",
        description: [
          "Managed HR operations and organizational development",
          "Implemented performance management systems",
          "Enhanced operational efficiency",
        ],
      },
      {
        title: "HR Manager",
        company: "Securicor Security Services (Currently G4S)",
        period: "Previous Role",
        description: [
          "Directed human resources management and employee relations",
          "Implemented talent acquisition and development programs",
          "Managed organizational performance systems",
        ],
      },
      {
        title: "University Lecturer",
        company: "JKUAT, Cooperative University, & Kenya Methodist University",
        period: "Previous Role",
        description: [
          "Taught Human Capital, Policy, Strategy, and Consultancy",
          "Conducted research in Mental Health, Sustainability, and ESG",
          "Mentored students in organizational development",
        ],
      },
      {
        title: "Management and Strategy Consultant",
        company: "Career Directions Limited and Favour World International",
        period: "Current",
        description: [
          "Provide strategic advisory on HR and organizational transformation",
          "Consult on policy, strategy, emotional intelligence, and HR technology",
          "Drive sustainability, learning organization, and mental health initiatives",
        ],
      },
    ],
    education: [
      {
        degree: "Doctor of Philosophy - Human Capital Management, Policy, Strategy, and Consultancy",
        institution: "JKUAT Juja",
        year: "PhD",
      },
      {
        degree: "Master of Science in Human Resource Management",
        institution: "JKUAT Juja",
        year: "MSc",
      },
      {
        degree: "Bachelor of Arts in Social Sciences (Sociology)",
        institution: "Egerton University",
        year: "BA",
      },
      {
        degree: "Higher National Diploma in Human Resources Management & Development",
        institution: "Kenya National Examination Council",
        year: "HND",
      },
    ],
    certifications: [
      { title: "Conflict Arbitration and Mediation", issuer: "Certified" },
      { title: "Training of Trainers, Culture and Change Management, and Customer Service Leadership", issuer: "Certified" },
    ],
    membershipsCertifications: [
      "Practitioner and Full Member – IHRM-Kenya",
      "Member – Kenya Institute of Management",
      "Member – African Association for Public Administration & Management (AAPAM)",
    ],
  };

  const samuelWaithaka = {
    name: "Samuel Ndegwa Waithaka",
    title: "Director – Engineering & Laboratory Systems",
    specialization: "Biomedical Engineering & Laboratory Systems Professional",
    email: "ndegwawaithaka@gmail.com",
    phone: "0722 165 490",
    address: "P.O. Box 89588 – 00200, Nairobi",
    profileSummary:
      "A dynamic and results-oriented Engineering and Laboratory Systems Professional with proven expertise in biomedical, analytical, food processing, water analysis, and pharmaceutical laboratory systems. Over ten years of experience providing strategic and technical leadership in equipment installation, calibration, maintenance, and laboratory infrastructure development. Demonstrated capability in managing multi-sector engineering projects, from healthcare technology to WASH and industrial laboratory setups, ensuring quality assurance, operational efficiency, and compliance with global standards. Adept at bridging technical, managerial, and client relations aspects to deliver innovative, cost-effective, and sustainable laboratory and engineering solutions.",
    coreCompetencies: [
      "Laboratory design, installation, and commissioning (Food, Analytical, Water, Research, and Pharma Labs)",
      "Preventive and corrective maintenance of medical and scientific instruments",
      "Equipment validation, calibration, and compliance (ISO, WHO, GMP, GLP standards)",
      "Project planning, monitoring, and evaluation (M&E)",
      "WASH project implementation and technical supervision",
      "Procurement planning and contract management",
      "Quality management systems and audits",
      "Research and development (R&D) support and technical documentation",
      "Capacity building, technical training, and team leadership",
      "Client relationship management and stakeholder coordination",
    ],
    experiences: [
      {
        title: "Director – Engineering & Laboratory Systems",
        company: "Biolegend Scientific Limited, Nairobi",
        period: "2018 – Present",
        description: [
          "Provide overall leadership and strategic direction in the design, setup, and management of laboratory and engineering projects across biomedical, analytical, and food sectors.",
          "Supervise multidisciplinary technical teams in equipment installation, commissioning, and after-sales service.",
          "Lead WASH-related engineering interventions, including water quality testing labs, sanitation projects, and environmental monitoring programs.",
          "Oversee procurement, supplier relations, and contract administration for laboratory and industrial engineering projects.",
          "Advise clients on project design, regulatory compliance, and infrastructure optimization.",
          "Implement quality control and safety standards aligned with ISO, GMP, and GLP frameworks.",
          "Foster innovation and research collaborations with universities, research institutions, and private laboratories.",
        ],
      },
      {
        title: "Biomedical Engineer / Technical Lead",
        company: "Various Institutions & Partner Organizations",
        period: "2014 – 2018",
        description: [
          "Conducted installation, calibration, and maintenance of biomedical, analytical, and research lab equipment.",
          "Supported food and pharmaceutical companies in establishing and validating production and testing facilities.",
          "Provided technical support for water analysis laboratories and environmental monitoring programs.",
          "Trained end-users and laboratory personnel in equipment operation and preventive maintenance.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Biomedical Engineering",
        institution: "Mount Kenya University",
        year: "2015",
      },
      {
        degree: "Diploma in Project Management",
        institution: "Kenya Institute of Management",
        year: "2014",
      },
      {
        degree: "International Technical Certification – Italy & China",
        institution: "International Training Programs",
        year: "2015",
      },
    ],
    certifications: [
      { title: "Certified Calibration Engineer", issuer: "International" },
      { title: "Production Management Systems – Kaizen and 5S", issuer: "Kenya Institute of Business Training (2022)" },
      { title: "Customer Centric Leadership Training", issuer: "Marketing Society of Kenya (2022)" },
    ],
    professionalAttributes: [
      "Strategic thinker with a balance of technical and managerial acumen",
      "Effective communicator and mentor across diverse professional teams",
      "Committed to innovation, quality, and sustainable engineering practices",
      "Integrity-driven leader with a focus on results and continuous improvement",
    ],
    selectedProjects: [
      "Spearheaded the establishment of multidisciplinary laboratories across Kenya and East Africa, including food microbiology, analytical chemistry, and pharmaceutical testing labs.",
      "Oversaw national-scale biomedical and WASH projects enhancing public health systems and water quality management.",
      "Led calibration and validation programs, ensuring regulatory compliance for multiple private and government laboratories.",
      "Implemented quality management systems that improved equipment uptime, data integrity, and operational efficiency.",
      "Developed in-house training modules for engineers and laboratory technologists to strengthen local technical capacity.",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Our Team - Biolegend Scientific Ltd"
        description="Meet our experienced team of professionals in human capital development and laboratory systems engineering."
        canonical="https://biolegendscientific.co.ke/employees"
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-biolegend-purple to-biolegend-purple/80 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership Team</h1>
            <p className="text-lg text-biolegend-yellow max-w-2xl">
              Meet the expert professionals driving innovation, excellence, and sustainable growth across our organization.
            </p>
          </div>
        </section>

        {/* Employees Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <EmployeeProfile
                name={samuelWaithaka.name}
                title={samuelWaithaka.title}
                specialization={samuelWaithaka.specialization}
                email={samuelWaithaka.email}
                phone={samuelWaithaka.phone}
                address={samuelWaithaka.address}
                profileSummary={samuelWaithaka.profileSummary}
                coreCompetencies={samuelWaithaka.coreCompetencies}
                experiences={samuelWaithaka.experiences}
                education={samuelWaithaka.education}
                certifications={samuelWaithaka.certifications}
                professionalAttributes={samuelWaithaka.professionalAttributes}
                selectedProjects={samuelWaithaka.selectedProjects}
              />

              <EmployeeProfile
                name={drCharlesKireru.name}
                title={drCharlesKireru.title}
                specialization={drCharlesKireru.specialization}
                email={drCharlesKireru.email}
                phone={drCharlesKireru.phone}
                address={drCharlesKireru.address}
                profileSummary={drCharlesKireru.profileSummary}
                coreCompetencies={drCharlesKireru.coreCompetencies}
                valueProposition={drCharlesKireru.valueProposition}
                experiences={drCharlesKireru.experiences}
                education={drCharlesKireru.education}
                certifications={drCharlesKireru.certifications}
                membershipsCertifications={drCharlesKireru.membershipsCertifications}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Employees;
