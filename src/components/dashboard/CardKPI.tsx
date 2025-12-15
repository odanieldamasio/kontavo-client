interface CardData {
  label: string;
  value: string;
  description: string;
}

export default function CardKPI({ data }: { data?: CardData }) {
  return (
    <div className="p-6 border-[#EBEEEC] border bg-white rounded flex flex-col gap-2">
      <span className="text-sm text-gray-500">{data?.label}</span>
      <span className="text-2xl font-bold">{data?.value}</span>
      <span className="text-sm">{data?.description}</span>
    </div>
  );
}
