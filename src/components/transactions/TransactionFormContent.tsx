"use client";

import { useState } from "react";
import { HiSave } from "react-icons/hi";
import Button from "../ui/Button";
import { useTransactions } from "@/hooks/useTransactions";
import { useCategories } from "@/hooks/useCategories";
import InputText from "../ui/InputText";
import InputSelect from "../ui/InputSelect";

export default function TransactionFormContent() {
  const { createTransaction, loading } = useTransactions();
  const { categories } = useCategories();

  const [form, setForm] = useState({
    title: "",
    description: "",
    amount: "",
    type: "income", // Definido como 'income' por padrão para casar com o visual
    paymentMethod: "",
    categoryId: "",
    totalInstallments: "1",
    date: "",
    dueDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTransaction(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Título - Full Width */}
        <div className="md:col-span-2 space-y-2">
          <InputText
            id="title"
            label="Título"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Conta de luz, salário, etc."
          />
        </div>

        {/* Categoria */}
        <div className="space-y-2">
          <InputSelect
            id="categoryId"
            label="Categoria"
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            options={[
              { value: "", label: "Selecione uma categoria" },
              ...categories.map((cat) => ({
                value: cat.id,
                label: cat.name,
              })),
            ]}
          />
        </div>

        {/* Tipo */}
        <div className="space-y-2">
          <label className="text-sm font-semibold dark:text-zinc-300">
            Tipo
          </label>
          <div className="flex gap-4 h-10 items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="income"
                checked={form.type === "income"}
                onChange={handleChange}
                className="accent-green-500"
              />
              <span className="text-sm">Receita</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="expense"
                checked={form.type === "expense"}
                onChange={handleChange}
                className="accent-red-500"
              />
              <span className="text-sm">Despesa</span>
            </label>
          </div>
        </div>

        {/* Descrição - Full Width */}
        <div className="md:col-span-2 space-y-2">
          <InputText
            id="description"
            label="Descrição"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descrição opcional da movimentação"
            containerClassName="col-span-2"
          />
        </div>

        {/* Forma de Pagamento */}
        <div className="space-y-2">
          <InputSelect
            id="paymentMethod"
            label="Forma de pagamento"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            options={[
              { value: "", label: "Selecione uma opção" },
              { value: "pix", label: "PIX" },
              { value: "card", label: "Cartão" },
              { value: "money", label: "Dinheiro" },
            ]}
          />
        </div>

        {/* Valor */}
        <div className="space-y-2">
          <InputText
            id="amount"
            label="Valor"
            name="amount"
            type="number"
            step="0.01"
            value={form.amount}
            onChange={handleChange}
            placeholder="0,00"
          />
        </div>

        {/* Total de Parcelas */}
        {/* <div className="space-y-2">
          <InputText
              id="totalInstallments"
              label="Total de parcelas"
              name="totalInstallments"
              type="number"
              min={1}
              value={form.totalInstallments}
              onChange={handleChange}
            />
        </div> */}

        {/* Data */}
        <div className="space-y-2">
          <InputText
            id="date"
            label="Data"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        {/* Data de Vencimento */}
        <div className="space-y-2">
          <InputText
            id="dueDate"
            label="Data de vencimento"
            name="dueDate"
            type="date"
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-[#EFEFEF] ">
        <Button
          type="submit"
          variant="primary"
          icon={HiSave}
          className="w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Salvando..." : "Salvar Movimentação"}
        </Button>
      </div>
    </form>
  );
}
