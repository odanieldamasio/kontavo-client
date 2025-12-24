import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

   const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ?? "1";

  const response = await fetch(`${process.env.BACKEND_API_URL}/transactions?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.accessToken}`,
      "X-User-Id": session.user.id!,
    },
  });

  const data = await response.json();

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();

    // Validação simples
    if (!body.title || !body.amount || !body.type) {
      return NextResponse.json(
        { error: "Campos obrigatórios: título, valor e tipo." },
        { status: 400 }
      );
    }

    const normalizedBody = {
      ...body,
      type: body.type.toLowerCase(), // INCOME → income
      paymentMethod: body.paymentMethod.toLowerCase(), // PIX → pix
      amount: Number(body.amount), // garante número
    };

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/transactions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
          "X-User-Id": session.user.id!,
        },
        body: JSON.stringify(normalizedBody),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro do backend:", errorData);
      return NextResponse.json(
        { error: errorData.message || "Erro ao criar transação" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao criar transação:", error);
    return NextResponse.json(
      { error: "Erro interno ao criar transação" },
      { status: 500 }
    );
  }
}
