import { BriefcaseBusiness, GraduationCap, Laptop } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

/**
 * About Section - Professional introduction and career goals
 */
export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Finance & Banking",
      description: "Studying business and finance at Government College of Commerce.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Team Operations",
      description: "Building practical experience as a team member at KFC Bangladesh.",
    },
    {
      icon: Laptop,
      title: "Digital Projects",
      description: "Exploring web development through independent projects.",
    },
  ];

  return (
    <section id="about" className="section bg-background-secondary">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Description */}
          <div className="text-center space-y-4">
            <p className="text-lg text-foreground-secondary leading-relaxed">
              I&apos;m a Finance and Banking student building a foundation in
              business, finance, and practical team operations.
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Alongside my studies, I work as a team member at KFC Bangladesh
              and explore web development through personal projects.
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              I&apos;m interested in entry-level opportunities where I can
              contribute, learn, and grow.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent-primary/10 rounded-lg">
                      <Icon className="w-8 h-8 text-accent-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground-secondary">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
