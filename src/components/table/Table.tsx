import { ReactNode } from "react";

type TableProps = {
  title?: string;
  children: ReactNode;
};

// Componente principal (Export padrão)
export default function Table({ title, children }: TableProps) {
  return (
    <div className="p-4 border-[#F1F1F1] border bg-white rounded flex flex-col overflow-x-auto">
      <table className="w-full text-left table-auto min-w-max border-collapse">
        {children}
      </table>
    </div>
  );
}

// ADICIONE 'export' AQUI
export function TableHeader({ children }: { children: ReactNode }) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

// ADICIONE 'export' AQUI
export function ColumnHeader({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <th className={`pb-4 px-4 border-b border-slate-100 text-left ${className}`}>
      <span className="text-sm font-semibold text-[#0f172a]">{label}</span>
    </th>
  );
}