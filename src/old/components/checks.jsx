import React, { useEffect, useContext } from 'react';
import { AppContext } from '../app';
import '../css/checks.css'
import { useGetAvailableChecks } from '../utils/get-available-checks.hook';
import AreaChecks from './area-checks';

const Checks = () => {
  const [context,setContext] = useContext(AppContext);

  return (<div className='checks'>
    <h2>Checks</h2>
    <ul>
      {Object.keys(context.checks).map(areaName => {
        return <AreaChecks key={areaName} areaName={areaName} />
      })}
    </ul>
  </div>)
}

export default Checks;
