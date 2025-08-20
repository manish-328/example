// src/shared/components/atoms/BasicButton.tsx
import type { BasicButtonProps } from "../../types/buttonTypes";
import classNameMerge from "../../utils/classNameMerge";

export default function BasicButton({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  className,
  onClick,
  id,
  title,
}: BasicButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors";

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-5 text-lg",
  }[size];

  const variants = {
    primary: "bg-black text-white hover:opacity-90",
    outline: "border border-black text-black hover:bg-black/5",
    ghost: "text-black hover:bg-black/5",
  }[variant];

  return (
    <button
      type="button"
      disabled={disabled}
      id={id}
      title={title}
      onClick={onClick}
      className={classNameMerge([
        base,
        sizes,
        variants,
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      ])}
    >
      {children}
    </button>
  );
}
