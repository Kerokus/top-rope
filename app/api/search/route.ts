import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { guid, attributeData } = req.body;

    try {
      // Search by guid
      if (guid) {
        const results = await prisma.entity_id.findMany({
          where: {
            guid: {
              contains: guid,
            },
          },
        });
        return res.status(200).json(results);
      }

      // Search by attributeData
      if (attributeData) {
        const results = await prisma.attribute_list.findMany({
          where: {
            attribute_data: {
              contains: attributeData,
            },
          },
        });
        return res.status(200).json(results);
      }

      return res.status(400).json({ error: "No search parameters provided" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while searching" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}
