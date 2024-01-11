export interface IPlanet {
  id?: string;
  name: string;
  climate: string;
  terrain: string;
  films: string[];
}

export class Planet {
  private _id: string | undefined = undefined;
  private _name: string = "";
  private _climate: string = "";
  private _terrain: string = "";
  private _films: string[] = [];

  private constructor(name: string, climate: string, terrain: string) {
    this._name = name;
    this._climate = climate;
    this._terrain = terrain;
  }

  getData() {
    return {
      id: this.id,
      name: this._name,
      climate: this._climate,
      terrain: this._terrain,
      filmsCount: this._films.length,
    };
  }

  serializeToDB(): IPlanet {
    return {
      id: this.id,
      name: this._name,
      climate: this._climate,
      terrain: this._terrain,
      films: this._films,
    };
  }

  set films(films: string[]) {
    this._films = films;
  }

  set id(id: string) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id!;
  }

  static create(name: string, climate: string, terrain: string) {
    if (!name) throw new Error("No name provided");
    if (!climate) throw new Error("No climate provided");
    if (!terrain) throw new Error("No terrain provided");
    return new Planet(name, climate, terrain);
  }

  static restoreFromDBFactory(planetDB: IPlanet): Planet {
    const planetInstance = new Planet(
      planetDB.name,
      planetDB.climate,
      planetDB.terrain
    );
    planetInstance.id = planetDB.id!;
    planetInstance.films = planetDB.films;
    return planetInstance;
  }
}
