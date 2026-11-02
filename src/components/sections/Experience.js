import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

/**
 * Experience Section - Work experience and internships
 */
export default function Experience() {
  const experiences = [
    {
      title: "Team Member",
      company: "KFC Bangladesh",
      location: "Chattogram, Bangladesh",
      period: "August 2025 — August 2026",
      type: "Current role",
      responsibilities: [
        "Support daily operations and prepare documentation and reports.",
        "Help coordinate with team members and maintain official records.",
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-background-secondary">
      <div className="container-custom">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and achievements"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} hover className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-6 bg-border-primary hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="p-4 bg-accent-primary/10 rounded-lg w-fit">
                    <Briefcase className="w-8 h-8 text-accent-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-lg text-foreground-secondary font-medium mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-foreground-tertiary text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="text-foreground-secondary flex items-start gap-2">
                          <span className="text-accent-primary mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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
