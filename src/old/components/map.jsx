import React, {useContext,useState,useEffect} from 'react';
import { AppContext } from '../app';
import { isCheckAvailable } from '../utils/checks.utils';
import { CHECK_DATA } from '../constants/maps.const';
import MapCheckIcon from './map-check-icon';

const Map = props => {
  const {currentMap} = props;
  const [context,setContext] = useContext(AppContext);
  const [availableChecks, setAvailableChecks] = useState([]);

  const filterChecks = check => {
    return isCheckAvailable(CHECK_DATA[check.dataName].reqs,context.collected,context.age);
  }

  useEffect(() => {
    setAvailableChecks(context.checks[currentMap].filter(filterChecks));
  },[context]) // TODO - I can probably limit this to only the things that affect the map re-render

  return (<div className='map'>
    <div className='map-icon-wrap'>
    <img src={'https://rossdanielconover.com/zelda-ocarina-tracker/assets/maps/maps_'+currentMap+'.svg'}/>
    {availableChecks.map(check => {
      return (<MapCheckIcon 
          key={check.dataName}
          checkName={check.dataName}
          checkData={CHECK_DATA[check.dataName] } 
          checkStatus={ sessionStorage.getItem(check.dataName+'_status') ? sessionStorage.getItem(check.dataName+'_status') === 'true' : check.status } 
          checkArea={currentMap} 
          checkIndex={check.index} />)
    })}
    </div>
  </div>)
}

export default Map;
