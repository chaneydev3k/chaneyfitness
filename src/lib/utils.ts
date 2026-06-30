import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names with conditional logic, de-duplicating
 * conflicting utilities (the standard shadcn/ui helper).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
