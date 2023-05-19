import React, {useContext} from 'react';
import { AppContext } from '../app';
import { AREA_NAMES } from '../constants/maps.const';
import RewardList from './reward-list';

const CheckModal = props => {
  const {checkData,checkIndex,checkArea,checkStatus,checkName,setModalStateCB} = props;
  const [context,setContext] = useContext(AppContext);

  const checkboxHandler = e => {
    let flipStatus = !checkStatus;

    sessionStorage.setItem(checkName+'_status', flipStatus);

    let newArray = [...context.checks[checkArea]];
        newArray[checkIndex] = {...newArray[checkIndex], status: flipStatus}

    setContext({...context, checks: {...context.checks, [checkArea]: newArray}})
  }

  return (
    <div className='check-modal-overlay' onClick={() => { setModalStateCB(false)} }>
      <div className='check-modal' onClick={e=>{e.stopPropagation()}}>
        <h3>{checkData.checkName}</h3>
        <p className='area-name'>{AREA_NAMES[checkArea]}</p>
        {context.checks[checkArea][checkIndex].reward === '' ? 
          <RewardList checkArea={checkArea} checkIndex={checkIndex} /> : 
          <img className='selected-reward' src={'https://rossdanielconover.com/zelda-ocarina-tracker/assets/icons/item-sprites_'+context.checks[checkArea][checkIndex].reward+'.svg'}/>}
        <button className='complete' onClick={checkboxHandler}>
          <img src={'https://rossdanielconover.com/zelda-ocarina-tracker/assets/app-icon_'+(checkStatus ? '' : 'un')+'checkedBox.svg'}/> <span>Complete Check</span>
        </button>
      </div>
    </div>
  )
}

export default CheckModal;
