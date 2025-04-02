interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {title && <h2 className="mb-12 text-3xl font-bold text-foreground">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
