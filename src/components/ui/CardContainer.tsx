type PageHeaderProps = {
  title: string | React.ReactNode;
  style?: string;
  children?: React.ReactNode;
};

export default function CardContainer({
  title,
  style,
  children,
}: PageHeaderProps) {
  return (
    <div className={`p-4 border-[#F1F1F1] border bg-white rounded flex flex-col ${style}`}>
      {title && (
        <div className="flex items-center justify-between pb-4 border-[#EFEFEF] border-b">
          <p className="text-[#626262] text-sm">{title}</p>
        </div>
      )}
      {children && (
        <div className={`flex items-center gap-2 shrink-0 mt-4`}>{children}</div>
      )}
    </div>
  );
}
