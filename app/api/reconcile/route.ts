import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const reconcileAttribs = await prisma.reconcile_list.findMany();
  return NextResponse.json(reconcileAttribs);
}
