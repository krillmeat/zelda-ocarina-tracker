import React, { useEffect, useState } from "react";
import CollectedItems from "./components/collected-items";
import TopBar from "./components/top-bar";
import "./app.css";
import { DEFAULT_COLLECTED } from "./state/collected-items.state";
import MapFrame from "./components/map-frame";
import Checks from "./components/checks";
import { DEFAULT_CHECKS } from "./state/checks.state";
import { DEFAULT_SETTINGS } from "./constants/settings";

export const AppContext = React.createContext();

const DEFAULT_CONTEXT = {
  age: 'child',
  collected: DEFAULT_COLLECTED,
  checks: DEFAULT_CHECKS,
  settings: DEFAULT_SETTINGS,
  openMaps: [],
  currentMap: ''
}

const App = () => {
  const [context,setContext] = useState(DEFAULT_CONTEXT);

  return (
    <AppContext.Provider value={[context,setContext]}>
      <TopBar />
      <CollectedItems />
      <MapFrame />
      <Checks />
    </AppContext.Provider>
  )
}

export default App;
