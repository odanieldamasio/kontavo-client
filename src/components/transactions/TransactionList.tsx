"use client";

import React from "react";
import Table from "@/components/table/Table";
import { TableHeader, ColumnHeader } from "@/components/table/TableHeader";
import { TableRow } from "@/components/table/TableRow";
import { TableCell } from "@/components/table/TableCell";
import { HiArrowRight } from "react-icons/hi";
import Badge from "../ui/Badge";
import Link from "next/link";

/* =======================
   TIPOS
======================= */

type Transaction = {
  id: string;
  type: "INCOME" | "EXPENSE";
  title: string;
  amount: number;
  status: "paid" | "pending" | "overdue";
  createdAt: string;
  category: {
    name: string;
  };
};

type PaginationMeta = {
  page: number;
  totalPages: number;
};

interface TransactionsListProps {
  transactions: Transaction[];
  meta?: PaginationMeta;
  onPageChange: (page: number) => void;
}

/* =======================
   COMPONENTE
======================= */

function TransactionList({
  transactions,
  meta,
  onPageChange,
}: TransactionsListProps) {
  return (
    <>
      <Table>
        <TableHeader>
          <ColumnHeader label="Data" />
          <ColumnHeader label="Título" />
          <ColumnHeader label="Categoria" />
          <ColumnHeader label="Valor" />
          <ColumnHeader label="Status" />
          <ColumnHeader label="Ações" className="text-right" />
        </TableHeader>

        <tbody>
          {transactions.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-slate-500">
                Nenhuma transação encontrada
              </TableCell>
            </TableRow>
          )}

          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>
                {new Date(transaction.createdAt).toLocaleDateString("pt-BR")}
              </TableCell>

              <TableCell className="font-medium text-slate-800">
                {transaction.title}
              </TableCell>

              <TableCell>{transaction.category.name}</TableCell>

              <TableCell
                className={`font-semibold ${
                  transaction.type === "INCOME"
                    ? "text-[#87BE5E]"
                    : "text-[#EF4444]"
                }`}
              >
                {transaction.type === "INCOME" ? "+ " : "- "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </TableCell>

              <TableCell>
                <Badge status={transaction.status} />
              </TableCell>

              <TableCell className="text-right">
                <Link
                  href={`/transactions/${transaction.id}`}
                  className="inline-flex items-center gap-1 font-semibold hover:underline"
                >
                  <HiArrowRight className="text-lg" />
                  <span>Ver detalhes</span>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {/* PAGINAÇÃO */}
      {meta && meta.totalPages > 1 && (
        <div className="flex justify-end items-center gap-3 mt-4">
          <button
            aria-label="Página anterior"
            disabled={meta.page === 1}
            onClick={() => onPageChange(meta.page - 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Anterior
          </button>

          <span className="text-sm text-slate-600">
            Página {meta.page} de {meta.totalPages}
          </span>

          <button
            aria-label="Próxima página"
            disabled={meta.page === meta.totalPages}
            onClick={() => onPageChange(meta.page + 1)}
            className="px-3 py-1 border rounded disabled:opacity-40"
          >
            Próxima
          </button>
        </div>
      )}
    </>
  );
}

export default React.memo(TransactionList);
