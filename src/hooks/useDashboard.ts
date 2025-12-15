"use client";

import { useEffect, useState } from "react";

type DashboardKPI = {
  currentBalance: number;
  projectedIncome: number;
  totalExpense: number;
  totalTransactions: number;
  monthlyPerformance: any;
};

export function useDashboardKPI() {
  const [dashboardKPI, setDashboardKPI] = useState<DashboardKPI>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchDashboardKPI() {
    setLoading(true);

    try {
      const response = await fetch("/api/dashboard");
      const data = await response.json();
      setDashboardKPI(data);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar as informações");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDashboardKPI();
  }, []);

  return {
    dashboardKPI,
    loading,
    error,
    fetchDashboardKPI,
  };
}
