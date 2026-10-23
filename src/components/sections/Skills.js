import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { SKILLS_DATA } from '@/data/skills';

/**
 * Skills Section - Display technical skills organized by categories
 */
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS_DATA).map(([category, skills]) => (
            <Card key={category} hover className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-b border-border-primary pb-3">
                {category}
              </h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground-secondary font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-foreground-tertiary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-background-tertiary rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-primary to-accent-primary-light rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['TypeScript', 'GraphQL', 'PostgreSQL', 'AWS', 'CI/CD', 'Jest', 'Redux', 'Sass'].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-background-secondary border border-border-primary rounded-lg text-foreground-secondary hover:border-accent-primary hover:text-accent-primary transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
