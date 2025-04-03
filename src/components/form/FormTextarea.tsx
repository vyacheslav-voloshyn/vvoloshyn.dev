interface FormTextareaProps {
  id: string;
  name: string;
  label: string;
  rows?: number;
  required?: boolean;
}

export default function FormTextarea({
  id,
  name,
  label,
  rows = 4,
  required = false,
}: FormTextareaProps) {
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="absolute -top-5 left-1 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/60 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-primary"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        className="w-full rounded-lg border border-gray-300  px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 "
      />
    </div>
  );
}
