import { IconType } from "react-icons";

type LabelAmountType = "income" | "expense";

type LabelAmountProps = {
  status: LabelAmountType;
};

export default function LabelAmount({ status }: LabelAmountProps) {
  const statusStyles = {
    paid: "bg-[#87BE5E10] text-[#87BE5E]",
    overdue: "bg-[#EF444410] text-[#EF4444]",
    pending: "bg-[#FACC1510] text-[#FACC15]",
  };

  const statusLabels = {
    paid: "Pago",
    overdue: "Vencido",
    pending: "Pendente",
  };

  return (
    <div
      className={`
        inline-flex items-center gap-1.5 
        px-4 py-2.5 rounded-sm
        text-xs font-medium leading-none
        ${statusStyles[status]}
      `}
    >
      {statusLabels[status]}
    </div>
  );
}
