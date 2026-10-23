import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

/**
 * Experience Section - Work experience and internships
 */
export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Company Name",
      location: "City, State",
      period: "Jun 2023 - Aug 2023",
      type: "Internship",
      responsibilities: [
        "Developed responsive web applications using React and Next.js",
        "Collaborated with design team to implement UI/UX improvements",
        "Optimized application performance, reducing load time by 40%",
        "Participated in code reviews and agile development processes",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Web Development Volunteer",
      company: "Non-Profit Organization",
      location: "Remote",
      period: "Jan 2023 - May 2023",
      type: "Volunteer",
      responsibilities: [
        "Built and maintained the organization's website using modern web technologies",
        "Implemented donation system and event registration features",
        "Trained staff members on content management system",
        "Increased website traffic by 60% through SEO optimization",
      ],
      technologies: ["WordPress", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Teaching Assistant - Web Development",
      company: "University Name",
      location: "City, State",
      period: "Sep 2022 - Dec 2022",
      type: "Part-time",
      responsibilities: [
        "Assisted professor in teaching Web Development course to 50+ students",
        "Conducted weekly lab sessions and office hours",
        "Graded assignments and provided constructive feedback",
        "Developed supplementary learning materials and coding exercises",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship':
        return 'bg-accent-primary/10 text-accent-primary';
      case 'Volunteer':
        return 'bg-success/10 text-success';
      case 'Part-time':
        return 'bg-warning/10 text-warning';
      default:
        return 'bg-foreground-tertiary/10 text-foreground-tertiary';
    }
  };

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
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(exp.type)}`}>
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

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-background-tertiary border border-border-primary rounded text-sm text-foreground-secondary"
                      >
                        {tech}
                      </span>
                    ))}
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
