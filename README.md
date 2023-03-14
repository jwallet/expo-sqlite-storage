# Expo SQLite Storage

Implements the original [expo-sqlite@11.1.1](https://github.com/expo/expo/tree/main/packages/expo-sqlite) with an updated version of android.database.sqlite from [requery.sqlite-android@3.39.2](https://github.com/requery/sqlite-android) which adds support for:

- JSON1 extension
- Common Table expressions
- Indexes on expressions
- Full Text Search 5
- Generated Columns
- DROP COLUMN support


This cannot be used in Expo GO, see the related [error](#error) section.

### RxDB Premium compatible

It's compatible with [RxDB](https://github.com/pubkey/rxdb) Premium [SQLite](https://rxdb.info/rx-storage-sqlite.html) storage:

```js
import {
  getRxStorageSQLite,
  getSQLiteBasicsExpoSQLite,
} from "rxdb-premium/plugins/storage-sqlite";
import * as ExpoSqliteStorage from "expo-sqlite-storage";
import { createRxDatabase } from "rxdb";

const storage = getRxStorageSQLite({
  sqliteBasics: getSQLiteBasicsExpoSQLite(ExpoSqliteStorage.openDatabase),
});

const db = await createRxDatabase({
  name: storage.name,
  storage,
  multiInstance: false,
  ignoreDuplicate: true,
});
```

| iOS                                                  | Android                                                  |
| :--------------------------------------------------- | :------------------------------------------------------- |
| <img width="440" alt="image" src="./assets/ios.png"> | <img width="400" alt="image" src="./assets/android.png"> |

# Installation in managed Expo project

### Add the package to your npm dependencies

```
npm install expo-sqlite-storage
```

or

```
yarn add expo-sqlite-storage
```

build your native apps

```
npx expo run:android|ios
```

run only the app

```
npx expo start --dev-client
```

## Error

#### {"name":"TypeError","message":"null is not an object (evaluating 'SQLiteDatabase.exec')

Will not work inside **Expo GO** until the Expo team [updates their SQLite database](https://expo.canny.io/feature-requests/p/expo-sqlite-ship-newer-sqlite3-version-on-android) to a more recent version.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-sqlite-storage
```

or

```
yarn add expo-sqlite-storage
```


### Configure for iOS

React-Native above 0.60:

Run `npx pod-install` after installing the npm package.

### Configure for Android
