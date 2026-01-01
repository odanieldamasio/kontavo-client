import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/transactions?${searchParams.toString()}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessToken}`,
        "X-User-Id": session.user.id!,
      },
    }
  );

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

    if (!body.title || !body.amount || !body.type) {
      return NextResponse.json(
        { error: "Campos obrigatórios: título, valor e tipo." },
        { status: 400 }
      );
    }

    const normalizedBody = {
      ...body,
      amount: Number(body.amount),
      type: body.type.toLowerCase(),
      paymentMethod: body.paymentMethod?.toLowerCase(),
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

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || "Erro ao criar transação" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro interno ao criar transação" },
      { status: 500 }
    );
  }
}
