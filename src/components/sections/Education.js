import { GraduationCap, Award, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

/**
 * Education Section - Academic qualifications and achievements
 */
export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      location: "City, State",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "First Place in University Hackathon 2023",
        "Published research paper on Machine Learning applications",
      ],
    },
    {
      degree: "High School Diploma",
      school: "High School Name",
      location: "City, State",
      period: "2016 - 2020",
      gpa: "3.9/4.0",
      achievements: [
        "Valedictorian",
        "National Merit Scholar",
        "Computer Science Club President",
      ],
    },
  ];

  const certifications = [
    "AWS Certified Developer Associate",
    "MongoDB Certified Developer",
    "Meta Front-End Developer Professional Certificate",
    "Google UX Design Certificate",
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
                      <span className="font-semibold text-accent-primary">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-foreground-secondary flex items-start gap-2">
                          <span className="text-accent-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Certifications & Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="flex items-center gap-4">
                <div className="p-3 bg-accent-primary/10 rounded-lg">
                  <Award className="w-6 h-6 text-accent-primary" />
                </div>
                <p className="text-foreground-secondary font-medium">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
