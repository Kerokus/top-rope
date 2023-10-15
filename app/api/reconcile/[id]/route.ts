import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { id } = req.query; // Destructure the id from the query object

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const attribDetails = await prisma.reconcile_list.findUnique({
      where: {
        id: id as string,
      },
    });

    if (!attribDetails) {
      return res.status(404).json({ error: "Attribute not found" });
    }

    return res.status(200).json(attribDetails);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while fetching attribute details" });
  }
}
