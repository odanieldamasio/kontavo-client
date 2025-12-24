import { IconType } from "react-icons";

type CardData = {
  label: string;
  value: string;
  icon: IconType;
  style: string;
};

export default function CardKPI({ label, value, style, icon: Icon }: CardData) {
  return (
    <div className="p-4 border-[#F1F1F1] border bg-white rounded flex gap-4">
      <div className={`p-4 rounded-sm ${style}`}>{Icon && <Icon className="w-5 h-5" />}</div>
      <div>
        <h2 className="text-sm text-gray-500">{label}</h2>
        <p className="text-2xl font-semibold text-[#0F172A]">{value}</p>
      </div>
    </div>
  );
}
