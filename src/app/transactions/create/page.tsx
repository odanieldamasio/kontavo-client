"use client";

import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import PrimaryTitle from "@/components/title/PrimaryTitle";
import { useTransactions } from "@/hooks/useTransactions";

enum TransactionType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

enum PaymentMethod {
  PIX = "PIX",
  CASH = "CASH",
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
}

export default function CreateTransactionPage() {
  const { createTransaction, loading, error, success } = useTransactions();

  const [form, setForm] = useState({
    type: TransactionType.INCOME,
    categoryId: "",
    title: "",
    description: "",
    amount: "",
    date: "",
    paymentMethod: PaymentMethod.PIX,
    recurring: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTransaction(form);
  };

  return (
    <AppLayout>
      <div className="w-full pt-4">
        <div className="mb-8">
          <PrimaryTitle title="Criar Movimentação" />
          <p className="text-sm text-gray-500 mt-1">
            Adicione uma nova receita ou despesa à sua carteira.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#EBEEEC] rounded-xl p-6 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-2">
              Tipo de transação
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
            >
              <option value={TransactionType.INCOME}>Receita</option>
              <option value={TransactionType.EXPENSE}>Despesa</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-2">
              Categoria
            </label>
            <input
              type="text"
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              placeholder="ID da categoria"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-2">
              Título
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ex: Pagamento de salário"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-2">
              Descrição (opcional)
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Descrição detalhada da transação"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-2">
              Valor
            </label>
            <input
              type="number"
              step="0.01"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="0.00"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-2">
              Data
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-2">
              Método de pagamento
            </label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
            >
              <option value={PaymentMethod.PIX}>PIX</option>
              <option value={PaymentMethod.CASH}>Dinheiro</option>
              <option value={PaymentMethod.CREDIT_CARD}>Cartão de crédito</option>
              <option value={PaymentMethod.DEBIT_CARD}>Cartão de débito</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="recurring"
              checked={form.recurring}
              onChange={handleChange}
              className="h-4 w-4 text-primary-color border-gray-300 rounded focus:ring-2 focus:ring-primary-color"
            />
            <label className="text-sm text-gray-700">Transação recorrente</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold rounded-lg py-2 transition-colors ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Salvando..." : "Criar Movimentação"}
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm">
              ✅ Transação criada com sucesso!
            </p>
          )}
        </form>
      </div>
    </AppLayout>
  );
}
