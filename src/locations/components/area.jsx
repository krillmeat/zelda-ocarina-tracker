import React from 'react';
import { AREA_CHECKS } from '../../data/areas.data';
import Check from './check';

const Area = ({areaName}) => {
  return (<div className='area'>
    <h2>{areaName}</h2>
    <ul>
    {AREA_CHECKS[areaName] && AREA_CHECKS[areaName].map((checkDescription,index) => 
      <Check checkDescription={checkDescription} key={'check-'+areaName+'-'+index} />
    )}
    </ul>
  </div>)
}

export default Area;
