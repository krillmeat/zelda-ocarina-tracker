import React, { useEffect, useState } from "react";
import "./app.css";
import Locations from "./locations/locations";
import { locationsCTX } from "./context/locations.ctx";
import { withSessionStorage } from "./utils/session.utils";

export const AppContext = React.createContext();

const DEFAULT_CONTEXT = {
  // age: 'child',
  // collected: DEFAULT_COLLECTED,
  // checks: DEFAULT_CHECKS,
  // settings: DEFAULT_SETTINGS,
  // openMaps: [],
  // currentMap: ''
  locations: withSessionStorage(locationsCTX)
  // locations: locationsCTX
}

const App = () => {
  const [context,setContext] = useState(DEFAULT_CONTEXT);

  console.log("CTX ? ",context);

  return (
    <AppContext.Provider value={[context,setContext]}>
      {/* <TopBar />
      <CollectedItems />
      <MapFrame />
      <Checks /> */}
      <Locations/>
    </AppContext.Provider>
  )
}

export default App;
