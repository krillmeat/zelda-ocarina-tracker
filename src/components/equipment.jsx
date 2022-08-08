import React, {useContext} from 'react';
import { AppContext } from '../app';

const Equipment = () => {
  const {equipment} = useContext(AppContext);

  return (<div className='equipment'>
    <ul>
      {Object.keys(equipment).map(item => {
        return (<li>{item}</li>)
      })}
    </ul>
  </div>)
}

export default Equipment;
