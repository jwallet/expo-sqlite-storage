import {
  ConfigPlugin,
  createRunOncePlugin,
  withPlugins,
} from "@expo/config-plugins";

import withAndroid from "./android/withAndroid";
import withIOS from "./ios/withIOS";

const pkg = { name: "expo-sqlite-storage", version: "0.1.0" };

const withExpoSqliteStorage: ConfigPlugin = (config, options: any) => {
  return withPlugins(config, [
    [withAndroid, options],
    [withIOS, options],
  ]);
};

export default createRunOncePlugin(
  withExpoSqliteStorage,
  pkg.name,
  pkg.version
);
