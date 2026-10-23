import { cn } from '@/lib/utils';

/**
 * Consistent Section Heading Component
 * @param {Object} props
 * @param {string} props.title - Main heading text
 * @param {string} props.subtitle - Optional subtitle
 * @param {string} props.className - Additional classes
 */
export default function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground-secondary bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-accent-primary mx-auto mt-6 rounded-full"></div>
    </div>
  );
}
