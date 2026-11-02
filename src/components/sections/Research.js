import { BookOpen } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

/**
 * Research Section - Optional section for research interests or publications
 */
export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container-custom">
        <SectionHeading
          title="Research & Publications"
          subtitle="My academic contributions and research interests"
        />

        <div className="max-w-4xl mx-auto">
          <Card className="flex items-center gap-4">
            <BookOpen className="w-6 h-6 text-accent-primary" />
            <p className="text-foreground-secondary">
              Research and publications will be listed here when available.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
