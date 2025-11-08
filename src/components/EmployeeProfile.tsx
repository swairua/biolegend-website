import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Certification {
  title: string;
  issuer?: string;
}

interface EmployeeProfileProps {
  name: string;
  title: string;
  specialization: string;
  email: string;
  phone: string;
  address: string;
  profileSummary: string;
  coreCompetencies: string[];
  valueProposition?: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  membershipsCertifications?: string[];
  professionalAttributes?: string[];
  selectedProjects?: string[];
}

const EmployeeProfile: React.FC<EmployeeProfileProps> = ({
  name,
  title,
  specialization,
  email,
  phone,
  address,
  profileSummary,
  coreCompetencies,
  valueProposition,
  experiences,
  education,
  certifications,
  membershipsCertifications,
  professionalAttributes,
  selectedProjects,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-biolegend-purple to-biolegend-purple/80 text-white p-8">
        <h2 className="text-3xl font-bold mb-2">{name}</h2>
        <p className="text-lg text-biolegend-yellow font-semibold mb-1">{title}</p>
        <p className="text-white/90 mb-4">{specialization}</p>
        
        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href={`tel:${phone}`} className="hover:text-biolegend-yellow transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${email}`} className="hover:text-biolegend-yellow transition-colors">
              {email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{address}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 space-y-8">
        {/* Profile Summary */}
        <section>
          <h3 className="text-xl font-bold text-biolegend-purple mb-3">Professional Profile</h3>
          <p className="text-gray-700 leading-relaxed">{profileSummary}</p>
        </section>

        {/* Value Proposition */}
        {valueProposition && (
          <section>
            <h3 className="text-xl font-bold text-biolegend-purple mb-3">Value Proposition</h3>
            <p className="text-gray-700 leading-relaxed">{valueProposition}</p>
          </section>
        )}

        {/* Core Competencies */}
        <section>
          <h3 className="text-xl font-bold text-biolegend-purple mb-3">Core Competencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {coreCompetencies.map((competency, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-biolegend-yellow mt-1">•</span>
                <span className="text-gray-700">{competency}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <h3 className="text-xl font-bold text-biolegend-purple mb-4">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-biolegend-purple pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{exp.title}</h4>
                    <p className="text-biolegend-purple font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap ml-2">{exp.period}</span>
                </div>
                <ul className="space-y-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex gap-2">
                      <span className="text-biolegend-yellow">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-xl font-bold text-biolegend-purple mb-4">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-biolegend-purple/5 rounded-lg p-4">
                <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                <p className="text-biolegend-purple font-semibold text-sm">{edu.institution}</p>
                <p className="text-gray-600 text-sm">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Memberships */}
        {(certifications.length > 0 || membershipsCertifications) && (
          <section>
            <h3 className="text-xl font-bold text-biolegend-purple mb-3">Certifications & Memberships</h3>
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-biolegend-yellow mt-1">✓</span>
                  <span className="text-gray-700">
                    {cert.issuer ? `${cert.title} - ${cert.issuer}` : cert.title}
                  </span>
                </div>
              ))}
              {membershipsCertifications && (
                <div className="mt-3">
                  {membershipsCertifications.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-biolegend-yellow mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Professional Attributes */}
        {professionalAttributes && professionalAttributes.length > 0 && (
          <section>
            <h3 className="text-xl font-bold text-biolegend-purple mb-3">Professional Attributes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {professionalAttributes.map((attr, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-biolegend-yellow mt-1">★</span>
                  <span className="text-gray-700">{attr}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Selected Projects & Achievements */}
        {selectedProjects && selectedProjects.length > 0 && (
          <section>
            <h3 className="text-xl font-bold text-biolegend-purple mb-3">Selected Projects & Achievements</h3>
            <ul className="space-y-2">
              {selectedProjects.map((project, index) => (
                <li key={index} className="text-gray-700 text-sm flex gap-2">
                  <span className="text-biolegend-yellow">▪</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default EmployeeProfile;
