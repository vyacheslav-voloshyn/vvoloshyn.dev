interface FormInputProps {
  id: string;
  name: string;
  type?: 'text' | 'email';
  label: string;
  required?: boolean;
}

export default function FormInput({
  id,
  name,
  type = 'text',
  label,
  required = false,
}: FormInputProps) {
  return (
    <div className="group relative">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className="border-input peer w-full border-b-2 bg-transparent px-1 py-2 text-foreground placeholder-transparent transition-colors focus:border-primary focus:outline-none"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute -top-5 left-1 text-sm text-muted-foreground transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/60 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}
