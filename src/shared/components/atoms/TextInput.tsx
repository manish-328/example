import React from "react";
import classNameMerge from "../../utils/classNameMerge";

export type TextInputProps = {
  id?: string;
  name?: string;
  type?: "text" | "password" | "email" | "number" | "search";
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /** visually hidden label text for a11y (if you don’t render your own label) */
  "aria-label"?: string;
};

export default function TextInput({
  id,
  name,
  type = "text",
  value,
  placeholder,
  disabled,
  required,
  autoComplete,
  className,
  onChange,
  onBlur,
  onKeyDown,
  ...rest
}: TextInputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className={classNameMerge(
        "w-full h-11 rounded-xl border border-gray-300 px-4 outline-none",
        "focus:ring-2 focus:ring-black/30 focus:border-black",
        "placeholder:text-gray-400",
        disabled && "bg-gray-100 cursor-not-allowed",
        className
      )}
      {...rest}
    />
  );
}
