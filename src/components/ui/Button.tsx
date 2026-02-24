import Link from "next/link";
import { IconType } from "react-icons";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  icon?: IconType;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  href,
  onClick,
  icon: Icon,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  
  const variants = {
    primary: "bg-[#0F172A] text-white hover:bg-[#0F172A]",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent hover:bg-zinc-100",
  };

  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}
