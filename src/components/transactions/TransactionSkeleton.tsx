"use client";

import React from "react";

export default function TransactionsSkeleton() {
  // Simulamos 5 linhas de carregamento
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="p-4 border-[#F1F1F1] border bg-white rounded flex flex-col overflow-hidden">
      <div className="w-full animate-pulse">
        
        {/* Simulação do TableHeader */}
        <div className="flex px-4 pb-4 border-b border-slate-100">
          <div className="w-[15%] h-4 bg-slate-200 rounded"></div> {/* Data */}
          <div className="w-[25%] h-4 bg-slate-100 rounded ml-4"></div> {/* Título */}
          <div className="w-[15%] h-4 bg-slate-100 rounded ml-4"></div> {/* Categoria */}
          <div className="w-[15%] h-4 bg-slate-100 rounded ml-4"></div> {/* Valor */}
          <div className="w-[15%] h-4 bg-slate-100 rounded ml-4"></div> {/* Status */}
          <div className="w-[15%] h-4 bg-slate-200 rounded ml-4"></div> {/* Ações */}
        </div>

        {/* Simulação das Rows */}
        <div className="flex flex-col">
          {skeletonRows.map((_, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-5 border-t border-[#EFEFEF]"
            >
              {/* Data */}
              <div className="w-[15%]">
                <div className="h-3 w-20 bg-slate-100 rounded"></div>
              </div>
              
              {/* Título */}
              <div className="w-[25%] ml-4">
                <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
              </div>

              {/* Categoria */}
              <div className="w-[15%] ml-4">
                <div className="h-3 w-16 bg-slate-50 rounded"></div>
              </div>

              {/* Valor */}
              <div className="w-[15%] ml-4">
                <div className="h-4 w-20 bg-slate-100 rounded"></div>
              </div>

              {/* Status (Badge) */}
              <div className="w-[15%] ml-4">
                <div className="h-6 w-16 bg-slate-50 rounded-md"></div>
              </div>

              {/* Ações */}
              <div className="w-[15%] ml-4 flex justify-end">
                <div className="h-4 w-24 bg-slate-100 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}