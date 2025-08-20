export interface BasicInputProps {
  id: string;
  name?: string; // ✅ keep name optional
  type?: "text" | "password" | "email" | "number";
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function BasicInput({
  id,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  className,
}: BasicInputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange} // ✅ critical for updates
      className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}
