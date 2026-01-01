"use client";

import { useEffect, useState } from "react";

export interface Category {
  id: string;
  name: string;
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchCategories() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/categories");

      if (!res.ok) {
        throw new Error("Erro ao buscar categorias");
      }

      const data = await res.json();
      setCategories(data);
    } catch (err: any) {
      setError(err.message || "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
    fetchCategories,
  };
}
