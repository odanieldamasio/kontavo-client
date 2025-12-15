"use client";

import AppLayout from "@/components/layout/AppLayout";
import CardKPI from "@/components/dashboard/CardKPI";
import { Poppins } from "next/font/google";
import DashboardSkeleton from "./DashboardSkeleton";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import { useDashboardKPI } from "@/hooks/useDashboard";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function DashboardPage() {
  // const { loading } = useAuthGuard();
  const { dashboardKPI, loading, error } = useDashboardKPI();

  if (loading) {
    return (
      <AppLayout>
        <DashboardSkeleton />
      </AppLayout>
    );
  }

  const labels = ["Julho", "Agosto", "Setembro"];
  const income = [1500, 1300, 1400];
  const expense = [700, 550, 650];

  return (
    <AppLayout>
      {/* <PageHeader title="Visão Geral" description="Resumo das suas finanças" /> */}
      <div
        className={`grid gap-6 grid-cols-1 mb-6 md:grid-cols-2 xl:grid-cols-4`}
      >
        <CardKPI
          data={{
            label: "Saldo Atual",
            value: dashboardKPI?.currentBalance,
            description: "+ $1,245.00 desde o mês passado",
          }}
        />
        <CardKPI
          data={{
            label: "Valor Futuro a Receber",
            value: dashboardKPI?.projectedIncome,
            description: "Daqui a 7 dia(s)",
          }}
        />
        <CardKPI
          data={{
            label: "Total de Receitas",
            value: dashboardKPI?.totalIncome,
            description: "+ $1,245.00 desde o mês passado",
          }}
        />
        <CardKPI
          data={{
            label: "Total de movimentações",
            value: dashboardKPI?.totalTransactions,
            description: "+ $1,245.00 desde o mês passado",
          }}
        />
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <div className="p-6 border-[#EBEEEC] border bg-white rounded flex flex-col gap-2 grid md:col-span-2 ">
          <span className="text-2xl font-medium">Desempenho Financeiro Mensal</span>
          <span className="text-sm text-gray-500">
            Acompanhe suas receitas e despesas dos últimos meses.
          </span>
          <div className="pt-2">
          <IncomeExpenseChart data={dashboardKPI?.monthlyPerformance} />
          </div>
        </div>

        <div className="p-6 border-[#EBEEEC] border bg-white rounded flex flex-col gap-2">
          <span className="text-2xl font-medium">Movimentações Recentes</span>
          <span className="text-sm text-gray-500">
            Suas últimas moviementações.
          </span>
          <div className="pt-2 flex flex-col gap-6">
            <div className="flex items-center grow">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Grocery Shopping
                </p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
              <div className="ml-auto font-medium">
                <span className="text-red-500">$120.50</span>
              </div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ml-2"
                data-v0-t="badge"
              >
                Food
              </div>
            </div>

            <div className="flex items-center grow">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Grocery Shopping
                </p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
              <div className="ml-auto font-medium">
                <span className="text-red-500">$120.50</span>
              </div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ml-2"
                data-v0-t="badge"
              >
                Food
              </div>
            </div>

            <div className="flex items-center grow">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Grocery Shopping
                </p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
              <div className="ml-auto font-medium">
                <span className="text-red-500">$120.50</span>
              </div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ml-2"
                data-v0-t="badge"
              >
                Food
              </div>
            </div>

            <div className="flex items-center grow">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Grocery Shopping
                </p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
              <div className="ml-auto font-medium">
                <span className="text-green-500">$120.50</span>
              </div>
              <div
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ml-2"
                data-v0-t="badge"
              >
                Food
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
