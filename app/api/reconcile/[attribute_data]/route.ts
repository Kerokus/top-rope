import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { attribute_data: string } }
) {
  const attribute_data = params.attribute_data;

  const reconcileEntity = await prisma.reconcile_list.findUnique({
    where: {
      attribute_data,
    },
  });

  return NextResponse.json(reconcileEntity);
}
