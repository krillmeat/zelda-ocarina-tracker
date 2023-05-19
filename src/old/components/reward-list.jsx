import React, {useContext} from 'react';
import { REWARD_LIST } from '../constants/item.const';

import { AppContext } from '../app';

const RewardList = props => {
  const {checkArea,checkIndex} = props;
  const [context,setContext] = useContext(AppContext);

  const setCheckItem = item => {
    let newArray = [...context.checks[checkArea]];
        newArray[checkIndex] = {...newArray[checkIndex], reward: item}

    setContext({...context, checks: {...context.checks, [checkArea]: newArray}})
  }

  const filterCollected = () => {
    
  }

  return (<div className='check-reward-list'>
    {REWARD_LIST.map(item => { return(
      <button key={item} onClick={() => { setCheckItem(item) }}><img src={'https://rossdanielconover.com/zelda-ocarina-tracker/assets/icons/item-sprites_'+item+'.svg'}/></button>
    )})}
  </div>)
}

export default RewardList;
