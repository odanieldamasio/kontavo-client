"use client";

import { notFound, useParams } from "next/navigation";
import { useTransaction } from "@/hooks/useTransaction";
import AppLayout from "@/components/layout/AppLayout";
import { HiArchive, HiPencil, HiPlus } from "react-icons/hi";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";

export default function TransactionDetailsPage() {
  const { id } = useParams();
  const { transaction, loading } = useTransaction(id as string);

  if (loading) {
    return (
      <AppLayout>
        <div className="p-6 space-y-6 animate-pulse">
          <div className="h-6 w-64 bg-gray-200 rounded" />
          <div className="h-32 bg-gray-200 rounded" />
          <div className="h-48 bg-gray-200 rounded" />
        </div>
      </AppLayout>
    );
  }

  if (!transaction || transaction.status === 404) {
    return notFound();
  }

  return (
    <AppLayout>
      <PageHeader
        title={transaction.title}
        description={`ID: ${transaction.id}`}
      >
        <Button
          href="/transactions/create"
          icon={HiPencil}
          style="bg-[#0F172A] text-[#FFFFFF]"
        >
          Editar
        </Button>
        <Button
          href="/transactions/create"
          icon={HiArchive}
          style="bg-[#EF4444] text-[#FFFFFF]"
        >
          Arquivar
        </Button>
      </PageHeader>
      
      <div className="p-6 max-w-6xl mx-auto space-y-6">
       

        {/* DETALHES */}
        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="px-6 py-4 border-b text-sm text-gray-500">
            Detalhes
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 px-6 py-6">
            <div>
              <p className="text-sm font-medium text-gray-700">Tipo</p>
              <p className="text-sm text-gray-400 mt-1">
                {transaction.type === "INCOME" ? "Receita" : "Conta de energia"}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">Categoria</p>
              <p className="text-sm text-gray-400 mt-1">
                {transaction.category?.name || "Não definida"}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">
                Método de Pagamento
              </p>
              <p className="text-sm text-gray-400 mt-1">Compras do mês.</p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700">Data</p>
              <p className="text-sm text-gray-400 mt-1">
                {new Date(transaction.createdAt).toLocaleString("pt-BR")}
              </p>
            </div>
          </div>
        </div>

        {/* PARCELAS */}
        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="px-6 py-4 border-b text-sm text-gray-500">
            Parcelas
          </div>

          <div className="divide-y">
            {transaction.installments.map((parcel: any, index: number) => (
              <div
                key={parcel.id}
                className="flex items-center justify-between px-6 py-5"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Parcela {index + 1}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Vence em:{" "}
                    {new Date(parcel.dueDate).toLocaleDateString("pt-BR")}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <p className="text-sm font-semibold text-gray-800">
                    R$ {Number(parcel.amount).toFixed(2)}
                  </p>

                  {parcel.status === "Pago" ? (
                    <span className="px-3 py-1 text-xs font-medium rounded bg-green-50 text-green-600">
                      Pago
                    </span>
                  ) : (
                    <>
                      <span className="px-3 py-1 text-xs font-medium rounded bg-yellow-50 text-yellow-600">
                        Pendente
                      </span>
                      <button className="flex items-center gap-1 px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600">
                        <HiPlus />
                        Pagar
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
