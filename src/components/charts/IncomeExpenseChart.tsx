"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IncomeExpenseChartProps {
  data?: {
    month: string;
    income: number;
    expense: number;
  }[];
}

export default function IncomeExpenseChart({
  data = [],
}: IncomeExpenseChartProps) {
  const labels = data.map((item) => item.month);

  const series = [
    {
      name: "Receitas",
      data: data.map((item) => item.income),
    },
    {
      name: "Despesas",
      data: data.map((item) => item.expense),
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
      fontFamily: "Poppins, sans-serif",
      background: "transparent",
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      show: false,
    },

    xaxis: {
      categories: labels,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          fontFamily: "Poppins",
          fontSize: "12px",
          colors: "#6b7280",
        },
      },
    },

    yaxis: {
      labels: {
        formatter: (val: number) => `R$ ${val.toLocaleString("pt-BR")}`,
        style: {
          fontFamily: "Poppins",
          fontSize: "12px",
          colors: "#6b7280",
        },
      },
    },

    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },

    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontFamily: "Poppins",
      labels: {
        colors: "#6b7280",
      },
    },

    tooltip: {
      theme: "light",
      y: {
        formatter: (val: number) => `R$ ${val.toLocaleString("pt-BR")}`,
      },
    },

    colors: [
      "#9ACD7F", // Receitas (verde)
      "#F87171", // Despesas (vermelho)
    ],
  };

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 rounded-2xl border border-dashed border-[#DADDDB] p-6">
        <div className="mb-4 text-muted-foreground/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-6h6v6m2 0h-10a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <p className="text-muted-foreground font-semibold text-lg">
          Nenhum dado disponível
        </p>
        <p className="mt-1 text-sm text-muted-foreground/70 text-center">
          Registre novas movimentações para acompanhar seu desempenho mensal.
        </p>
      </div>
    );
  }

  return <Chart options={options} series={series} type="bar" height={350} />;
}
