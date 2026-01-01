"use client";

import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import PageHeader from "@/components/ui/PageHeader";
import InputText from "@/components/ui/InputText";
import InputSelect from "@/components/ui/InputSelect";
import { HiPlus, HiSave } from "react-icons/hi";
import { useTransactions } from "@/hooks/useTransactions";
import { useCategories } from "@/hooks/useCategories";
import { HiArrowDownRight } from "react-icons/hi2";
import { useToast } from "@/components/toast/ToastContext";

export default function CreateTransactionPage() {
  const { createTransaction, loading, error, success } = useTransactions();
  const { categories } = useCategories();

  const [form, setForm] = useState({
    title: "",
    description: "",
    amount: "",
    type: "",
    paymentMethod: "",
    categoryId: "",
    totalInstallments: "1",
    date: "",
    dueDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTransaction(form);
  };

  return (
    <AppLayout>
      <PageHeader
        title="Adicionar movimentação"
        description="Complete os campos abaixo e salve sua nova movimentação."
      />

      <form
        onSubmit={handleSubmit}
        className="p-4 border border-[#F1F1F1] bg-white rounded"
      >
        <div className=" grid grid-cols-2 gap-4">
          <InputText
            id="title"
            label="Título"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Conta de luz, salário, etc."
          />

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

          <InputText
            id="description"
            label="Descrição"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descrição opcional da movimentação"
            containerClassName="col-span-2"
          />

          <InputSelect
            id="type"
            label="Tipo"
            name="type"
            value={form.type}
            onChange={handleChange}
            options={[
              { value: "", label: "Selecione uma opção" },
              { value: "income", label: "Entrada" },
              { value: "expense", label: "Saída" },
            ]}
          />

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

          <InputText
            id="totalInstallments"
            label="Total de parcelas"
            name="totalInstallments"
            type="number"
            min={1}
            value={form.totalInstallments}
            onChange={handleChange}
          />

          <InputText
            id="date"
            label="Data"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />

          <InputText
            id="dueDate"
            label="Data de vencimento"
            name="dueDate"
            type="date"
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            ml-auto
            mt-4
            col-span-2
            flex items-center justify-center gap-2
            bg-[#0F172A] text-white
            px-4 py-2
            rounded
            font-medium
            hover:opacity-90
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          <HiArrowDownRight className="text-lg" />
          {loading ? "Salvando..." : "Salvar movimentação"}
        </button>
      </form>
    </AppLayout>
  );
}
