import React, { useEffect, useState } from "react";

import Heroes from "./Heroes";
import { AppContext } from "./context";
import initializeDb from "./initializeDb";

export const App = () => {
  const [db, setDb] = useState<any>(null);

  useEffect(() => {
    const initDB = async () => {
      const _db = await initializeDb();
      if (_db) setDb(_db);
    };
    initDB().then();
  }, []);

  return (
    <AppContext.Provider value={{ db }}>
      <Heroes />
    </AppContext.Provider>
  );
};

export default App;
