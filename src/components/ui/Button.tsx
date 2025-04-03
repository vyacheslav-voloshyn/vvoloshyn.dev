import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/40',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/40',
    outline:
      'border border-gray-300 bg-transparent text-foreground hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 focus:ring-gray-400/40',
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
