import { PlanetInMemoryRepository } from "@/server/repositories/PlanetInMemoryRepository";
import { CreatePlanetUseCase } from "@/server/usecases/CreatePlanetUseCase";
import type { NextApiRequest, NextApiResponse } from "next";

const inMemoryRepository = new PlanetInMemoryRepository();
const createPlanetUseCase = new CreatePlanetUseCase(inMemoryRepository);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { name, climate, terrain } = req.body;
      const id = await createPlanetUseCase.execute(name, climate, terrain);
      return res
        .status(201)
        .json({ error: undefined, data: id, message: "Ok" });
    }

    return res.status(405).json({ error: "Not Implemented" });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
