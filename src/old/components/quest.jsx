import React, {useContext} from 'react';
import { AppContext } from '../app';
import Icon from './icon';
import { SONG_LIST } from '../constants/item.const';

const Quest = () => {
  const [context,setContext] = useContext(AppContext);
  return (<div className='quests'>
    <ul>
      {SONG_LIST.map(item => {
        return (<Icon key={item} itemName={item} itemState={context.collected[item]}/>)
      })}
    </ul>
  </div>)
}

export default Quest;
