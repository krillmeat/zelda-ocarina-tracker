import React from 'react';
import { AREA_NAMES } from '../constants/maps.const';

const MapTabs = props => {
  const {openTabs, closeTabCB, changeTabCB} = props;

  return (<div className='map-tabs'>
    <ul>
      {openTabs.map(areaName => {
        return ( <li className='tab' onClick={()=>{changeTabCB(areaName)}}>
          <span>{AREA_NAMES[areaName]}</span>
          <button className='close-tab' onClick={e => { e.stopPropagation(); closeTabCB(areaName) }}>&times;</button>
        </li> )
      })}
      
    </ul>
  </div>)
}

export default MapTabs;
