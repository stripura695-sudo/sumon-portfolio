import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { SKILLS_DATA } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <SectionHeading
          title="Skills"
          subtitle="Business, operations, and digital skills"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS_DATA).map(([category, skills]) => (
            <Card key={category} hover className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-b border-border-primary pb-3">
                {category}
              </h3>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="text-foreground-secondary">
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
