import {
  getRxStorageSQLite,
  getSQLiteBasicsExpoSQLite,
} from "@guay/rxdb-premium/plugins/storage-sqlite";
import * as ExpoSqliteStorage from "expo-sqlite-storage";
import { RxStorage } from "rxdb";
import { getRxStorageMemory } from "rxdb/plugins/storage-memory";

export const getStorage = (type: "memory" | "sqlite"): RxStorage<any, any> => {
  switch (type) {
    case "memory":
      return getRxStorageMemory();
    case "sqlite":
      return getRxStorageSQLite({
        sqliteBasics: getSQLiteBasicsExpoSQLite(ExpoSqliteStorage.openDatabase),
      });
  }
};
