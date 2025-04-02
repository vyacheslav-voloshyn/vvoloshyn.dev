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
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        className="border-input peer w-full resize-none rounded-lg border-2 bg-transparent px-3 py-2 text-foreground placeholder-transparent transition-colors focus:border-primary focus:outline-none"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute -top-5 left-3 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/60 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}
