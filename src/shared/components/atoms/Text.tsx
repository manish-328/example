import React from "react";
import classNameMerge from "../../utils/classNameMerge";

export type TextProps = {
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3";
  children?: React.ReactNode;
  className?: string;
};

export default function Text({
  as: Tag = "p",
  children,
  className,
}: TextProps) {
  return (
    <Tag className={classNameMerge("text-gray-900", className)}>{children}</Tag>
  );
}
