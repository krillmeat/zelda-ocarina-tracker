import React, {useContext, useEffect, useState} from 'react';
import { AppContext } from '../app';
import Map from './map';
import MapTabs from './map-tabs';

import '../css/map.css'

const MapFrame = () => {
  const [context,setContext] = useContext(AppContext);

  const closeTab = areaName => {
    let newArray = [...context.openMaps];
    let prevTabIndex = newArray.indexOf(areaName);
    let newCurrentMap = '';
    console.log("Last Tab = ",newArray.indexOf(areaName))

    if(prevTabIndex !== 0){
      newCurrentMap = newArray[prevTabIndex-1]
    }

    newArray.splice(newArray.indexOf(areaName,1));
    setContext({...context, openMaps: newArray, currentMap:newCurrentMap})
  }

  const changeTab = areaName => {
    setContext({...context,currentMap: areaName})
  }

  return (<div className='map-frame'>
    <MapTabs openTabs={context.openMaps} closeTabCB={closeTab} changeTabCB={changeTab}/>
    <div className={'maps '+ (context.currentMap === '' ? 'empty' : '') }>
        {context.currentMap !== '' && <Map currentMap={context.currentMap}/>}
    </div>
  </div>)
}

export default MapFrame;
