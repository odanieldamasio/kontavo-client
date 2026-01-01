import { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface InputSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  id: string;
  options: SelectOption[];
}

export default function InputSelect({
  label,
  id,
  options,
  ...props
}: InputSelectProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={id}
        className="text-sm font-medium text-[#0F172A]"
      >
        {label}
      </label>

      <select
        id={id}
        className="
          h-10
          rounded-md
          border
          border-[#F1F1F1]
          px-4
          text-sm
          text-[#0F172A]
          focus:outline-none
          w-full
          bg-white
        "
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.value === ""}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
