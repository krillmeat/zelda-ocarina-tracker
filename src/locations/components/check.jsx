import React, { useContext, useEffect, useState } from 'react';
import { ASSET_URL } from '../../constants/url.const';
import { AppContext } from '../../app';
import { toggleCheck } from '../utils/locations-context.util';

const Check = ({checkDescription}) => {
  const [context,setContext] = useContext(AppContext);
  const [checkStatus,setCheckStatus] = useState(false);
  const [checkItem,setCheckItem] = useState(); // Used to know what Item is gotten from the check

  useEffect(()=>{
    if(!context || !checkDescription) return;
    setCheckStatus(context.locations[checkDescription])
  },[context,checkDescription])

  const checkHandler = () => {
    let newStatus = !checkStatus;
    setCheckStatus(newStatus);
    toggleCheck(checkDescription,context,setContext);
    sessionStorage.setItem('check_'+checkDescription.replace(" ","-"),newStatus);
  }

  return (<li className='check'>
    <button className='checkbox' onClick={checkHandler}>
      <img src={ASSET_URL+'/app-icon_'+(checkStatus ? '' : 'un')+'checkedBox.svg'}/>
    </button>
    <span>{checkDescription}</span>
  </li>)
}

export default Check;
