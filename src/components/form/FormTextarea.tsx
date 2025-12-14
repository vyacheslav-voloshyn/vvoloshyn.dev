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
        className="text-muted-foreground peer-placeholder-shown:text-muted-foreground/60 peer-focus:text-primary absolute -top-5 left-1 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        className="focus:border-primary focus:ring-primary/50 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none dark:border-gray-700"
      />
    </div>
  );
}
