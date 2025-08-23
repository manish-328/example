// src/shared/components/molecules/PasswordInput.tsx
import BasicInput from "../atoms/BasicInput";

export interface PasswordInputProps {
  id: string;
  name?: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export default function PasswordInput({
  id,
  name,
  label,
  value,
  placeholder,
  onChange,
  error,
  className,
}: PasswordInputProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Label */}
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {/* Input */}
      <div className="relative">
        <BasicInput
          id={id}
          name={name}
          type="password"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={error ? "border-red-500 focus:ring-red-500" : ""}
        />
      </div>

      {/* Error */}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
