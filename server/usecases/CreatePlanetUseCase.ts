import { Planet } from "../entities/Planet";
import { PlanetRepository } from "../repositories/PlanetRepository";

export class CreatePlanetUseCase {
  constructor(private repository: PlanetRepository) {}

  async execute(name: string, climate: string, terrain: string) {
    if (await this.repository.findByName(name))
      throw new Error("Planet already exists");
    const planet = Planet.create(name, climate, terrain);
    await this.repository.save(planet.serializeToDB());
    const recentlyAddedPlanet = await this.repository.findByName(name);
    const allPlanets = await this.repository.list();
    console.log(allPlanets);
    return recentlyAddedPlanet?.id;
  }
}
