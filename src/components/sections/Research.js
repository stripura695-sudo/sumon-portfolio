import { BookOpen, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

/**
 * Research Section - Optional section for research interests or publications
 */
export default function Research() {
  const publications = [
    {
      title: "Machine Learning Applications in Web Development",
      authors: "Your Name, Co-Author Name",
      venue: "International Conference on Web Technologies",
      year: "2023",
      abstract: "This paper explores the integration of machine learning algorithms in modern web applications...",
      link: "#",
    },
    {
      title: "Optimizing React Performance in Large-Scale Applications",
      authors: "Your Name",
      venue: "Journal of Software Engineering",
      year: "2023",
      abstract: "A comprehensive study on performance optimization techniques for React-based applications...",
      link: "#",
    },
  ];

  const researchInterests = [
    "Artificial Intelligence & Machine Learning",
    "Web Performance Optimization",
    "User Experience Design",
    "Cloud Computing",
    "Cybersecurity",
  ];

  return (
    <section id="research" className="section">
      <div className="container-custom">
        <SectionHeading
          title="Research & Publications"
          subtitle="My academic contributions and research interests"
        />

        {/* Publications */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {publications.map((pub, index) => (
            <Card key={index} hover>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-primary/10 rounded-lg">
                    <BookOpen className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-foreground-tertiary text-sm">
                      {pub.venue}, {pub.year}
                    </p>
                  </div>
                </div>
                <p className="text-foreground-secondary pl-14">
                  {pub.abstract}
                </p>
                <div className="pl-14">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(pub.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read Paper
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Research Interests */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Research Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {researchInterests.map((interest, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-background-secondary border border-border-primary rounded-lg text-foreground-secondary hover:border-accent-primary hover:text-accent-primary transition-all duration-200"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
