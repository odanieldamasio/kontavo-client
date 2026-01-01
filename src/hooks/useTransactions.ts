"use client";

import { useToast } from "@/components/toast/ToastContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/* =======================
   TIPOS
======================= */

export type Transaction = {
  id: string;
  title: string;
  description?: string;
  amount: number;
  type: "INCOME" | "EXPENSE";
  paymentMethod: "pix" | "card" | "money";
  createdAt: string;
  status?: "paid" | "pending" | "overdue";
  category?: {
    id: string;
    name: string;
  };
};

type PaginationMeta = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

type TransactionsResponse = {
  data: Transaction[];
  meta: PaginationMeta;
};

/* =======================
   HOOK
======================= */

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [meta, setMeta] = useState<PaginationMeta | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    title: "",
    categoryId: "",
    status: "",
  });

  const { showToast } = useToast();
  const router = useRouter();

  /* =======================
     FETCH TRANSACTIONS
  ======================= */

  async function fetchTransactions() {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "10",
        ...(filters.title && { title: filters.title }),
        ...(filters.categoryId && { categoryId: filters.categoryId }),
        ...(filters.status && { status: filters.status }),
      });

      const res = await fetch(`/api/transactions?${params.toString()}`);

      if (!res.ok) {
        throw new Error("Erro ao carregar transações");
      }

      const result: TransactionsResponse = await res.json();

      setTransactions(result.data);
      setMeta(result.meta);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar transações");
    } finally {
      setLoading(false);
    }
  }

  /* =======================
     CREATE TRANSACTION
  ======================= */

  async function createTransaction(data: any) {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Erro ao criar transação");
      }

      showToast("Movimentação efetuada com sucesso! 💰", "success");
      setSuccess(true);

      // volta para a primeira página após criar
      setPage(1);
      fetchTransactions();

      router.push("/transactions");
      return result;
    } catch (err: any) {
      showToast(err.message, "error");
      setError(err.message || "Erro inesperado");
      return null;
    } finally {
      setLoading(false);
    }
  }

  /* =======================
     EFFECT
  ======================= */

  useEffect(() => {
    fetchTransactions();
  }, [page, filters]);

  /* =======================
     RETURN
  ======================= */

  return {
    transactions,
    meta,
    loading,
    error,
    success,
    page,
    setPage,
    filters,
    setFilters,
    fetchTransactions,
    createTransaction,
  };
}
