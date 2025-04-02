import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
}: ButtonProps) {
  const baseStyles = 'rounded-lg px-6 py-3 transition-colors';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20',
  };

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
