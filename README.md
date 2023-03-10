# expo-sqlite

Implementation of the original expo-sqlite with an upgraded version of android.database.sqlite to use requery.sqlite-android which adds support for:

- JSON1 extension
- Common Table expressions
- Indexes on expressions
- Full Text Search 5
- Generated Columns
- DROP COLUMN support

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/versions/latest/introduction/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-sqlite-vooban
```

or

```
yarn add expo-sqlite-vooban
```

### Configure for iOS

React-Native above 0.60:

`Run`npx pod-install` after installing the npm package.

### Configure for Android
