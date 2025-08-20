import React from "react";
import classNameMerge from "../../utils/classNameMerge";

export type CheckboxProps = {
  id?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
  id,
  name,
  checked,
  defaultChecked,
  disabled,
  label,
  className,
  onChange,
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={classNameMerge(
        "inline-flex items-center gap-2 select-none cursor-pointer",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black/30"
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
}
