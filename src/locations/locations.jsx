import './locations.css';
import React from 'react';

import { AREAS } from '../data/areas.data';
import Area from './components/area';

const Locations = () => {
  return (<div className='locations'>
    {AREAS.map(areaName =>
      <Area areaName={areaName} key={'area-'+areaName}/>
    )}
  </div>)
}

export default Locations;
