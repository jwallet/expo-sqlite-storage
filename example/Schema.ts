import { RxJsonSchema } from "rxdb";

import { Hero } from "./types";

const heroSchema: RxJsonSchema<Hero> = {
  version: 0,
  title: "hero schema",
  description: "describes a simple hero",
  primaryKey: "name",
  type: "object",
  properties: {
    name: {
      type: "string",
      maxLength: 128,
    },
    color: {
      type: "string",
    },
  },
  required: ["color"],
};

export default heroSchema;
