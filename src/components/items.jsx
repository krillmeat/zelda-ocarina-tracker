import React, {useContext} from 'react';
import { AppContext } from '../app';
import Icon from './icon';
import {ITEM_LIST} from '../constants/item.const'

const Items = () => {
  const [context,setContext] = useContext(AppContext);

  return (<div className='items'>
    <ul>
      {ITEM_LIST.map(item => {
        return (<Icon key={item} itemName={item} itemState={context.collected[item]}/>)
      })}
    </ul>
  </div>)
}

export default Items;
