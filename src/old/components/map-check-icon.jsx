import React, { useEffect, useState } from 'react';
import { CHECK_DATA } from '../constants/maps.const';
import CheckModal from './check-modal';

// TODO - Split out into util
const getPosition = spot => {
  return spot;
}

const MapCheckIcon = props => {
  const {checkName,checkStatus,checkArea,checkIndex} = props;

  const [mapCheckModalOpen, setMapCheckModalOpen] = useState(false);

  return (<div className='check-icon' 
               style={{
                  top: getPosition(CHECK_DATA[checkName].location[1])+'%',
                  left: getPosition(CHECK_DATA[checkName].location[0])+'%'
                }}>
    <button onClick={() => {setMapCheckModalOpen(!mapCheckModalOpen)} }><img src='https://rossdanielconover.com/zelda-ocarina-tracker/assets/app-icon_treasure.svg'/></button>

    {mapCheckModalOpen && <CheckModal
      setModalStateCB={setMapCheckModalOpen}
      checkName={checkName}
      checkData={CHECK_DATA[checkName] } 
      checkStatus={ sessionStorage.getItem(checkName+'_status') ? sessionStorage.getItem(checkName+'_status') === 'true' : checkStatus } 
      checkArea={checkArea} 
      checkIndex={checkIndex} />}

  </div>)
}

export default MapCheckIcon;
