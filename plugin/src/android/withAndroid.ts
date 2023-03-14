import { ConfigPlugin } from "@expo/config-plugins";

import withUpdateProjectBuildGradle from "./withUpdateProjectBuildGradle";

const withAndroid: ConfigPlugin = (config) => {
  config = withUpdateProjectBuildGradle(config);

  return config;
};

export default withAndroid;
