import { HiPlus } from "react-icons/hi";
import Button from "./Button";

type PageHeaderProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
};

export default function PageHeader({
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
      <div className="min-w-0">
        <h1 className="text-lg font-bold text-[#0F172A]">{title}</h1>

        {description && (
          <p className="text-[#626262]">{description}</p>
        )}
      </div>

      {children && (
        <div className="flex items-center gap-2 shrink-0">{children}</div>
      )}
    </header>
  );
}
