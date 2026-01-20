import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

//---------------- Input --------------------------
interface InputProps extends ComponentProps<"input"> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        "bg-navy-900 border-[0.5px] border-navy-500 h-10 flex items-center placeholder-navy-200 px-3 rounded-lg text-sm", 
        "hover:bg-navy-700 transition-colors duration-100 ease-in-out",
        "outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
        className
      )} 
      {...props} 
    />
  );
}

