import { ReactNode } from "react";

export function TableCell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td
      className={`px-4 py-5 border-t border-[#EFEFEF] text-sm text-[#0f172a] ${className}`}
    >
      {children}
    </td>
  );
}
