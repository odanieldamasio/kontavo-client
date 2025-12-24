"use client";

import CardContainer from "@/components/dashboard/CardKPI";

export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Título */}
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6" />

      {/* Grid de cards */}
      <div className="grid gap-6 grid-cols-1 mb-6 md:grid-cols-2">
        <CardContainer>
          <div className="h-16 bg-gray-100 rounded mb-4" />
          <div className="h-6 bg-gray-200 rounded w-1/2" />
        </CardContainer>

        <CardContainer>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
          <div className="h-8 bg-gray-100 rounded w-1/3" />
        </CardContainer>
      </div>

      {/* Chart fake */}
      <div className="grid gap-6 grid-cols-1">
        <CardContainer>
          <div className="h-64 bg-gray-100 rounded" />
        </CardContainer>
      </div>
    </div>
  );
}
