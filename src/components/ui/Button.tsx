import Link from "next/link";
import { IconType } from "react-icons";

type buttonProps = {
  href: string;
  icon: IconType;
  children?: React.ReactNode;
  style: string;
};

export default function Button({
  href,
  icon: Icon,
  children,
  style,
}: buttonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex flex-none items-center justify-center gap-3 rounded-md text-sm font-medium transition-colors [&_svg]:size-4 [&_svg]:shrink-0  h-10 px-4 py-2 ${style}`}
      >
        <Icon className="w-5 h-5" />
        {children}
      </Link>
    );
  }
}
