import { RxCollection, RxDatabase, RxDocument } from "rxdb";

export type Hero = {
  name: string;
  color: string;
};

export type HeroDocument = RxDocument<Hero>;

export type HeroCollection = RxCollection<Hero>;

export type HeroDatabase = RxDatabase<{ heroes: HeroCollection }>;
