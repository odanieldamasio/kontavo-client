import { ReactNode } from "react";

export function TableRow({ children }: { children: ReactNode }) {
  return <tr className="border-t border-[#EFEFEF] bg-white hover:bg-[#EFEFEF20] transition-colors">{children}</tr>;
}
