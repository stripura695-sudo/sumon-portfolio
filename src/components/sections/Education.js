import { GraduationCap, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

/**
 * Education Section - Academic qualifications and achievements
 */
export default function Education() {
  const education = [
    {
      degree: "Bachelor of Business Administration",
      school: "Government College of Commerce · National University",
      location: "Chattogram, Bangladesh",
      period: "May 2023 — Present",
    },
    {
      degree: "Higher Secondary Certificate · Business Studies",
      school: "Nizampur Government College",
      location: "Bangladesh",
      period: "2023",
      gpa: "3.83 / 5.00",
    },
    {
      degree: "Secondary School Certificate · Business Studies",
      school: "Mirsarai Government Model High School",
      location: "Bangladesh",
      period: "2021",
      gpa: "3.50 / 5.00",
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container-custom">
        <SectionHeading
          title="Education"
          subtitle="My academic background and achievements"
        />

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {education.map((edu, index) => (
            <Card key={index} hover className="relative">
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-6 bg-border-primary hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="p-4 bg-accent-primary/10 rounded-lg w-fit">
                    <GraduationCap className="w-8 h-8 text-accent-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-foreground-secondary font-medium">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-foreground-tertiary">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span>📍 {edu.location}</span>
                      {edu.gpa && (
                        <span className="font-semibold text-accent-primary">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
