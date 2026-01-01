export function TableHeader({ children }: { children: ReactNode }) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

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
