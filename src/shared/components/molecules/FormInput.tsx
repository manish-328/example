import BasicInput from "../../components/atoms/BasicInput";

export interface FormInputProps {
  id: string;
  name?: string; // ✅ add name here
  label: string;
  type?: "text" | "password" | "email" | "number";
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export default function FormInput({
  id,
  name,
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  error,
  className,
}: FormInputProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Label */}
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Input */}
      <BasicInput
        id={id}
        name={name} // ✅ forward name
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={error ? "border-red-500 focus:ring-red-500" : ""}
      />

      {/* Error message */}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
