import React, {useContext, useEffect, useState} from 'react';
import { AppContext } from '../app';
import CheckModal from './check-modal';

const Check = props => {
  const {checkName,checkData,checkStatus,checkArea,checkIndex} = props;
  const [mapCheckModalOpen,setMapCheckModalOpen] = useState(false);

  const [context,setContext] = useContext(AppContext);

  const checkboxHandler = e => {
    let flipStatus = !checkStatus;

    sessionStorage.setItem(checkName+'_status', flipStatus);

    let newArray = [...context.checks[checkArea]];
        newArray[checkIndex] = {...newArray[checkIndex], status: flipStatus}

    setContext({...context, checks: {...context.checks, [checkArea]: newArray}})
  }

  return (<li className='check'>
    <p>{checkData.checkName}</p>
    <div>
      <button className='launch-check-modal' onClick={() => {setMapCheckModalOpen(!mapCheckModalOpen)} }><img src='https://rossdanielconover.com/zelda-ocarina-tracker/assets/app-icon_launchPopup.svg'/></button>
      <button onClick={checkboxHandler}><img src={'https://rossdanielconover.com/zelda-ocarina-tracker/assets/app-icon_'+(checkStatus ? '' : 'un')+'checkedBox.svg'}/></button>
    </div>

    {mapCheckModalOpen && <CheckModal
      setModalStateCB={setMapCheckModalOpen}
      checkName={checkData.checkName}
      checkData={checkData} 
      checkStatus={ sessionStorage.getItem(checkName+'_status') ? sessionStorage.getItem(checkName+'_status') === 'true' : checkStatus } 
      checkArea={checkArea} 
      checkIndex={checkIndex} />}
  </li>)
}

export default Check;
