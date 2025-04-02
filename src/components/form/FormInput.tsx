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
        className="peer w-full border-b-2 border-gray-600 bg-transparent px-1 py-2 text-gray-200 placeholder-transparent transition-colors focus:border-blue-500 focus:outline-none"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className="absolute -top-5 left-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {label}
      </label>
    </div>
  );
}
