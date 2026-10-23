import { Code2, Sparkles, Target } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

/**
 * About Section - Professional introduction and career goals
 */
export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code is my priority.",
    },
    {
      icon: Sparkles,
      title: "Modern Tech",
      description: "Staying updated with latest technologies and best practices in web development.",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about solving complex problems with elegant solutions.",
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
              I&apos;m a passionate full stack developer with a strong foundation in modern web technologies.
              I specialize in building responsive, user-centric applications using React, Next.js, and Node.js.
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              With experience in both frontend and backend development, I enjoy creating end-to-end solutions
              that are not only functional but also deliver exceptional user experiences. I&apos;m constantly learning
              and exploring new technologies to stay ahead in this ever-evolving field.
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Currently seeking opportunities to contribute to innovative projects and collaborate with talented
              teams. I&apos;m particularly interested in roles that challenge me to grow as a developer and make a
              meaningful impact.
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

          {/* Fun Facts or Interests */}
          <div className="pt-8">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-6">
              When I&apos;m Not Coding
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Open Source', 'Tech Blogs', 'Hackathons', 'Teaching', 'Gaming'].map((interest, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-background-tertiary border border-border-primary rounded-full text-foreground-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
