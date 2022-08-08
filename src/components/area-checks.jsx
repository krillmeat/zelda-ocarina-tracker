import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../app';
import { AREA_NAMES, CHECK_DATA } from '../constants/maps.const';
import { isCheckAvailable } from '../utils/checks.utils';
import Check from './check';


const AreaChecks = props => {
  const {areaName} = props;
  const [context,setContext] = useContext(AppContext);
  const [availableChecks, setAvailableChecks] = useState([]);

  const filterChecks = check => {
    return isCheckAvailable(CHECK_DATA[check.dataName].reqs,context.collected,context.age);
  }

  const launchMap = areaName => {
    let newArray = [...context.openMaps];
        newArray.push(areaName);
    setContext({...context,openMaps: newArray, currentMap: areaName})
  }

  useEffect(() => {
    setAvailableChecks(context.checks[areaName].filter(filterChecks))
  },[context])

  return (<li className={'area checks-'+availableChecks.length}>
    <div className='area-header'>
      <h3>{AREA_NAMES[areaName]}</h3>
      <button onClick={()=>{launchMap(areaName)}}>Map</button>
    </div>
    <ul>
      {availableChecks.map(item => {
        return (<Check 
                  key={item.dataName} 
                  checkName={item.dataName}
                  checkData={CHECK_DATA[item.dataName] } 
                  checkStatus={ sessionStorage.getItem(item.dataName+'_status') ? sessionStorage.getItem(item.dataName+'_status') === 'true' : item.status } 
                  checkArea={areaName} 
                  checkIndex={item.index} />)
      })}
    </ul>
  </li>)
}

export default AreaChecks;
