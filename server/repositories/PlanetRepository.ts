import { IPlanet, Planet } from "../entities/Planet";

export interface PlanetRepository {
  save(data: IPlanet): Promise<void>;
  findByName(name: string): Promise<Planet | undefined>;
  list(): Promise<Planet[]>;
}
