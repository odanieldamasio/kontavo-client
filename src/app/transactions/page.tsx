"use client";

import AppLayout from "@/components/layout/AppLayout";
import { useTransactions } from "@/hooks/useTransactions";
import PageHeader from "@/components/ui/PageHeader";
import TransactionList from "@/components/transactions/TransactionList";
import TransactionsSkeleton from "@/components/transactions/TransactionSkeleton";
import Button from "@/components/ui/Button";
import { HiPlus } from "react-icons/hi";
import CardContainer from "@/components/ui/CardContainer";
import InputText from "@/components/ui/InputText";
import InputSelect from "@/components/ui/InputSelect";

export default function TransactionsPage() {
  const { transactions, meta, loading, filters, setFilters, setPage } =
    useTransactions();

  return (
    <AppLayout>
      <PageHeader
        title="Movimentações"
        description="Histórico das suas movimentações financeiras"
      >
        <Button
          href="/transactions/create"
          icon={HiPlus}
          style="bg-[#0F172A] text-[#FFFFFF]"
        >
          Nova movimentação
        </Button>
      </PageHeader>

      {/* FILTROS */}
      <CardContainer title="Filtro" style="mb-4">
        <InputText
          id="title"
          name="title"
          value={filters.title}
          placeholder="Buscar movimentação"
          onChange={(e) => {
            setFilters((prev) => ({
              ...prev,
              title: e.target.value,
            }));
            setPage(1);
          }}
        />

        <InputSelect
          id="categoryId"
          name="categoryId"
          value={filters.categoryId}
          onChange={(e) => {
            setFilters((prev) => ({
              ...prev,
              categoryId: e.target.value,
            }));
            setPage(1);
          }}
          options={[
            { value: "", label: "Todas Categorias" },
            { value: "1", label: "Salário" },
          ]}
        />

        <InputSelect
          id="status"
          name="status"
          value={filters.status}
          onChange={(e) => {
            setFilters((prev) => ({
              ...prev,
              status: e.target.value,
            }));
            setPage(1);
          }}
          options={[
            { value: "", label: "Todos os Status" },
            { value: "paid", label: "Pago" },
            { value: "pending", label: "Pendente" },
            { value: "overdue", label: "Vencido" },
          ]}
        />
      </CardContainer>

      {/* LISTA */}
      {loading ? (
        <TransactionsSkeleton />
      ) : (
        <TransactionList
          transactions={transactions}
          meta={meta ?? undefined}
          onPageChange={setPage}
        />
      )}
    </AppLayout>
  );
}
