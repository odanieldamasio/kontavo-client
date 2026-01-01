import React from "react";

export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* PageHeader Skeleton */}
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="min-w-0 space-y-2">
          {/* Título */}
          <div className="h-7 w-40 bg-gray-200 rounded"></div>
          {/* Descrição */}
          <div className="h-5 w-80 bg-gray-100 rounded"></div>
        </div>
        {/* Botão */}
        <div className="h-10 w-44 bg-gray-200 rounded-md shrink-0"></div>
      </header>

      {/* KPI Cards Grid */}
      <div className="grid gap-6 grid-cols-1 mb-6 pb-6 border-b border-[#F1F1F1] md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-4 border-[#F1F1F1] border bg-white rounded flex gap-4">
            {/* Ícone Square */}
            <div className="p-4 rounded-sm bg-gray-100 w-[52px] h-[52px]"></div>
            <div className="space-y-2">
              {/* Label */}
              <div className="h-4 w-20 bg-gray-100 rounded"></div>
              {/* Value */}
              <div className="h-8 w-28 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        
        {/* Últimas Movimentações */}
        <div className="p-4 border-[#F1F1F1] border bg-white rounded flex flex-col">
          <div className="flex items-center justify-between pb-4">
            <div className="h-4 w-32 bg-gray-100 rounded"></div>
            <div className="h-4 w-16 bg-gray-100 rounded"></div>
          </div>
          
          <div className="flex flex-col h-full gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between border-t border-[#EBEEEC] pt-4">
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="h-3 w-48 bg-gray-100 rounded"></div>
                </div>
                <div className="space-y-2 flex flex-col items-end">
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  <div className="h-3 w-16 bg-gray-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico ApexChart */}
        <div className="p-4 border-[#F1F1F1] border bg-white rounded flex flex-col">
          <div className="flex items-center justify-between pb-4">
            <div className="h-4 w-32 bg-gray-100 rounded"></div>
          </div>
          
          {/* Container do Gráfico (Height: 350px para bater com o real) */}
          <div className="h-[350px] w-full flex flex-col justify-between pt-6">
            <div className="flex-1 flex items-end justify-around gap-4 px-4">
              {[1, 2, 3, 4].map((bar) => (
                <div key={bar} className="flex gap-2 items-end h-full w-full max-w-[60px]">
                  <div className="bg-gray-100 w-1/2 rounded-t" style={{ height: '70%' }}></div>
                  <div className="bg-gray-200 w-1/2 rounded-t" style={{ height: '40%' }}></div>
                </div>
              ))}
            </div>
            {/* Eixo X labels */}
            <div className="h-px bg-gray-100 w-full mt-2"></div>
            <div className="flex justify-around py-4">
              <div className="h-3 w-10 bg-gray-100 rounded"></div>
              <div className="h-3 w-10 bg-gray-100 rounded"></div>
              <div className="h-3 w-10 bg-gray-100 rounded"></div>
              <div className="h-3 w-10 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}