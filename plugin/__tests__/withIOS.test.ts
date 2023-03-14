import fs from "fs";
import path from "path";

import { setPodFile } from "../src/ios/withUpdatePodFile";

describe.skip(setPodFile, () => {
  it(`modifies the pod file`, () => {
    const fixture = fs.readFileSync(
      path.join(__dirname, "fixtures", "PodFile"),
      "utf8"
    );
    expect(setPodFile(fixture)).toMatchSnapshot();
  });
});
