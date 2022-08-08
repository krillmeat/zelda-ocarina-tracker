import React, {useContext,useState} from 'react';
import { AppContext } from '../app';
import { ITEM_STATES } from '../constants/item.const';
import { getItemState } from '../utils/item.utils';

const Icon = props => {
  const {itemName,itemState} = props;

  const [context,setContext] = useContext(AppContext);

  const clickHandler = () => {
    let newValue = context.collected[itemName] + 1; // TODO - Check caps
      setContext({...context, collected: {...context.collected, [itemName]: newValue}})
  }

  const negClickHandler = e => {
    e.preventDefault();
    let newValue = context.collected[itemName];
        newValue = newValue > 0 ? newValue-1 : newValue;

    setContext({...context, collected: {...context.collected, [itemName]: newValue}})
  }

  const getImageName = () => {
    switch(itemName){
      case 'ocarina': case 'hookshot':
        return itemState === 0 ? itemName+'1' : itemName+itemState;
      case 'bottleOne': case 'bottleTwo': case 'bottleThree': case 'bottleFour':
        return itemState === 0 ? 'bottle1' : 'bottle'+itemState;
      default:
        return itemName;
    }
  }

  return (<>
    <li className={'state-'+context.collected[itemName]}>
      <button onClick={clickHandler} onContextMenu={negClickHandler}>
        <img src={'https://rossdanielconover.com/zelda-ocarina-tracker/assets/icons/item-sprites_'+getImageName()+'.svg'}/>
      </button>
    </li>
  </>)
}

export default Icon;
