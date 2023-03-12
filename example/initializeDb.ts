import { addRxPlugin, createRxDatabase, RxDatabase } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { RxDBMigrationPlugin } from "rxdb/plugins/migration";
import { RxDBQueryBuilderPlugin } from "rxdb/plugins/query-builder";
import { RxDBUpdatePlugin } from "rxdb/plugins/update";

import heroSchema from "./schema";
import { storage } from "./storage";

addRxPlugin(RxDBMigrationPlugin);
addRxPlugin(RxDBUpdatePlugin);
addRxPlugin(RxDBQueryBuilderPlugin);

const dbName = "heroesreactdatabase1";
export const HeroesCollectionName = "heroes";

const isDevelopment =
  process.env.NODE_ENV !== "production" || process.env.DEBUG_PROD === "true";

const initialize = async () => {
  if (isDevelopment) {
    await addRxPlugin(RxDBDevModePlugin);
  }

  let db: RxDatabase | undefined;

  try {
    console.log("Initializing database...");
    db = await createRxDatabase({
      name: dbName,
      storage,
      multiInstance: false,
      ignoreDuplicate: true,
    });
    console.log("Database initialized!");
  } catch (err) {
    console.log("ERROR CREATING DATABASE", err);
  }

  try {
    if (!db) return;
    console.log("Adding hero collection...");
    await db.addCollections({
      [HeroesCollectionName]: {
        schema: heroSchema,
      },
    });
    console.log("Collection added!");
  } catch (err) {
    console.log("ERROR CREATING COLLECTION", err);
  }

  return db;
};

export default initialize;
