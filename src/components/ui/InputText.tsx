import { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  containerClassName?: string;
}

export default function InputText({
  label,
  id,
  containerClassName = "",
  className,
  ...props
}: InputTextProps) {
  return (
    <div className={`flex flex-col gap-1 w-full ${containerClassName}`}>
      <label htmlFor={id} className="text-sm font-medium text-[#0F172A]">
        {label}
      </label>

      <input
        id={id}
        className={`
          h-10
          rounded-md
          border
          border-[#F1F1F1]
          px-4
          text-sm
          text-[#0F172A]
          placeholder:text-[#B7B7B7]
          focus:outline-none
          w-full
          ${className ?? ""}
        `}
        {...props}
      />
    </div>
  );
}
