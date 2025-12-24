"use client";

import AppLayout from "@/components/layout/AppLayout";
import CardKPI from "@/components/dashboard/CardKPI";
import { Poppins } from "next/font/google";
import DashboardSkeleton from "./DashboardSkeleton";
import IncomeExpenseChart from "@/components/charts/IncomeExpenseChart";
import { useDashboardKPI } from "@/hooks/useDashboard";
import PageHeader from "@/components/ui/PageHeader";
import Button from "../../components/ui/Button";
import { HiChartBar, HiPlus } from "react-icons/hi";
import { useSession } from "next-auth/react";
import {
  getGreeting,
  getCurrentMonthYear,
  getFormattedFullDate,
} from "@/utils/date";
import {
  HiArrowTrendingDown,
  HiArrowTrendingUp,
  HiBanknotes,
  HiWallet,
} from "react-icons/hi2";
import { formatCurrencyBR } from "@/utils/currency";
import Link from "next/link";

export default function DashboardPage() {
  // const { loading } = useAuthGuard();
  const { dashboardKPI, loading, error } = useDashboardKPI();

  const { data: session, status } = useSession();

  const fullName = session?.user?.name ?? "";
  const firstName = fullName.split(" ")[0];

  const greeting = getGreeting(firstName);
  const monthYear = getCurrentMonthYear();

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
      <PageHeader
        title="Dashboard"
        description={
          <>
            {greeting} | Aqui está um resumo {""}das suas finanças de
            {""}
            <span
              className="
                bg-[linear-gradient(90deg,#0ACDB5_20%,#FC9220_80%)]
                bg-clip-text
                text-transparent
                font-medium
              "
            >
              {" "}
              {""}
              {monthYear}
            </span>
            .{" "}
          </>
        }
      >
        <Button
          href="/transactions/new"
          icon={HiPlus}
          style="bg-[#0F172A] text-[#FFFFFF] "
        >
          Nova movimentação
        </Button>
      </PageHeader>
      <div
        className={`grid gap-6 grid-cols-1 mb-6 pb-6 border-b border-[#F1F1F1] md:grid-cols-2 xl:grid-cols-4`}
      >
        <CardKPI
          label="Saldo Atual"
          icon={HiWallet}
          value={formatCurrencyBR(dashboardKPI?.currentBalance ?? 0)}
          style="bg-[#0ACDB5] text-white"
        />
        <CardKPI
          label="Lucro Líquido"
          icon={HiChartBar}
          value={formatCurrencyBR(dashboardKPI?.netrofit ?? 0)}
          style="bg-[#F4F4F4] text-[#0F172A]"
        />
        <CardKPI
          label="Faturamento total"
          icon={HiArrowTrendingUp}
          value={formatCurrencyBR(dashboardKPI?.projectedIncome ?? 0)}
          style="bg-[#F4F4F4] text-[#0F172A]"
        />
        <CardKPI
          label="Gastos"
          icon={HiArrowTrendingDown}
          value={formatCurrencyBR(dashboardKPI?.totalExpense ?? 0)}
          style="bg-[#F4F4F4] text-[#0F172A]"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className=" p-4 border-[#F1F1F1] border bg-white rounded flex flex-col">
          <div className="flex items-center justify-between pb-4">
            <p className="text-[#626262] text-sm">Últimas movimentações</p>
            <p>
              <Link
                href="/transactions"
                className={`text-sm font-medium underline`}
              >
                Ver mais
              </Link>
            </p>
          </div>
          <div className="flex flex-col h-full gap-4">
            {dashboardKPI?.lastTransactions?.length ? (
              dashboardKPI.lastTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between border-t border-[#EBEEEC] pt-4"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#0F172A]">
                      {transaction.title}
                    </p>
                    <p className="text-xs text-[#0F172A] opacity-40">
                      {transaction.description}
                    </p>
                  </div>

                  <div className="space-y-1 flex flex-col items-end">
                    <p
                      className={`text-sm font-medium ${
                        transaction.type === "income"
                          ? "text-[#87BE5E]"
                          : "text-[#EF4444]"
                      }`}
                    >
                      {transaction.type === "income"
                        ? "+ "
                        : "- "}
                      {formatCurrencyBR(transaction.amount)}
                    </p>
                    <p className="text-xs text-[#0F172A] opacity-40">
                      {getFormattedFullDate(transaction.date)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-1 items-center justify-center">
                <p className="text-sm text-[#0F172A] opacity-40">
                  Nenhuma movimentação ainda.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className=" p-4 border-[#F1F1F1] border bg-white rounded flex flex-col">
          <div className="flex items-center justify-between pb-4">
            <p className="text-[#626262] text-sm">Últimos 4 Meses</p>
          </div>
          <div className="flex flex-col gap-4">
            <IncomeExpenseChart data={dashboardKPI?.monthlyPerformance} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
