"use client";

import { a } from "framer-motion/client";
import { useEffect, useState } from "react";

type Transaction = {
  id: string;
  type: "INCOME" | "EXPENSE";
  description?: string;
  totalAmount: number | string;
  installments: number;
  createdAt: string;
};

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function fetchTransactions() {
    setLoading(true);

    try {
      const response = await fetch("/api/transactions");
      const data = await response.json();
      setTransactions(data);
    } catch (err: any) {
      setError(err.message || "Erro ao carregar as transações");
    } finally {
      setLoading(false);
    }
  }

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

      if (!res.ok) throw new Error(result.error || "Erro ao cadastrar");

      setSuccess(true);
      return result.data;
    } catch (err: any) {
      setError(err.message || "Erro inesperado");
      return null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return {
    transactions,
    loading,
    error,
    fetchTransactions,
    createTransaction
  };
}
