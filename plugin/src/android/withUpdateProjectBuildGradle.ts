import {
  ConfigPlugin,
  WarningAggregator,
  withProjectBuildGradle,
} from "@expo/config-plugins";

export const withUpdateProjectBuildGradle: ConfigPlugin = (config) => {
  return withProjectBuildGradle(config, (config) => {
    if (config.modResults.language === "groovy") {
      config.modResults.contents = setBuildscript(config.modResults.contents);
    } else {
      WarningAggregator.addWarningAndroid(
        "expo-sqlite-storage",
        `Cannot automatically configure project build.gradle if it's not groovy`
      );
    }
    return config;
  });
};

export function setBuildscript(buildGradle: string) {
  let newBuildGradle = buildGradle;

  const jitpack = `maven { url 'https://www.jitpack.io' }`;
  if (!newBuildGradle.includes(jitpack)) {
    newBuildGradle = newBuildGradle.replace(
      /allprojects *{\n.*repositories\s?{/,
      `allprojects { repositories { ${jitpack}`
    );
  }

  const androidxSqlite = "androidx.sqlite:sqlite:2.2.0";
  if (!newBuildGradle.includes(androidxSqlite)) {
    const google = `allprojects {\n\trepositories {\n\t\tmaven { url 'https://maven.google.com' }`;
    newBuildGradle = newBuildGradle.replace(
      /allprojects *{\n.*repositories\s?{/,
      google
    );
  }

  const requerySqlite = "com.github.requery:sqlite-android:3.39.2";

  return newBuildGradle;
}

export default withUpdateProjectBuildGradle;
