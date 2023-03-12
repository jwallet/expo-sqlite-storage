import { createContext } from "react";

import { HeroDatabase } from "./types";

export const AppContext = createContext<{ db: HeroDatabase | null }>({
  db: null,
});
