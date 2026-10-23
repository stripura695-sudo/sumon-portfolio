import { cn } from '@/lib/utils';

/**
 * Reusable Card Component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional classes
 * @param {boolean} props.hover - Enable hover effect
 */
export default function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        'bg-background-secondary border border-border-primary rounded-lg p-6',
        hover && 'transition-all duration-300 hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/10 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
