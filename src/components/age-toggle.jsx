import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../app';

const AgeToggle = () => {
  const [context,setContext] = useContext(AppContext);

  return (<div className='age-toggle'>
    <button className={context.age === 'child' ? 'active' : ''} onClick={()=>{setContext({...context, age: 'child'})}}>Child</button>
    <button className={context.age === 'adult' ? 'active' : ''} onClick={()=>{setContext({...context, age: 'adult'})}}>Adult</button>
  </div>)
}

export default AgeToggle;
