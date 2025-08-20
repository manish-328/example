import type { BasicTextProps } from "../../types/textTypes";
import classNameMerge from "../../utils/classNameMerge";

export default function BasicText({
  children,
  variant = "body",
  className,
}: BasicTextProps) {
  const variants = {
    heading: "text-2xl font-bold",
    subheading: "text-xl font-semibold",
    body: "text-base text-gray-700",
    label: "text-sm text-gray-600",
  }[variant];

  return <p className={classNameMerge([variants, className])}>{children}</p>;
}
