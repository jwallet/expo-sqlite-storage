import fs from "fs";
import path from "path";

import { setBuildscript } from "../src/android/withUpdateProjectBuildGradle";

describe(setBuildscript, () => {
  it(`modifies the build.gradle file`, () => {
    const fixture = fs.readFileSync(
      path.join(__dirname, "fixtures", "build.gradle"),
      "utf8"
    );
    expect(setBuildscript(fixture)).toMatchSnapshot();
  });
});
