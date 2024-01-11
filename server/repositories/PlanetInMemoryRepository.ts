import { IPlanet, Planet } from "../entities/Planet";

export class PlanetInMemoryRepository {
  private planetDb: IPlanet[] = [];

  async save(data: IPlanet) {
    this.planetDb.push({
      ...data,
      id: new Date().getTime().toString(),
    });
  }

  async findByName(name: string) {
    const planet = this.planetDb.find((planet) => planet.name === name);
    if (!planet) return undefined;
    return Planet.restoreFromDBFactory(planet);
  }

  async list() {
    return this.planetDb.map((planet) => Planet.restoreFromDBFactory(planet));
  }
}
