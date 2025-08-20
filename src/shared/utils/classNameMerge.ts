import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";

export default function classNameMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
