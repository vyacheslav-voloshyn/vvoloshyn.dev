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
        className="peer w-full resize-none rounded-lg border-2 border-gray-600 bg-transparent px-3 py-2 text-gray-200 placeholder-transparent transition-colors focus:border-blue-500 focus:outline-none"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute -top-5 left-3 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {label}
      </label>
    </div>
  );
}
