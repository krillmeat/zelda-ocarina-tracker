import React, {useContext, useState} from 'react';
import { AppContext } from '../app';
import { CHARACTER_LIST } from '../constants/characters';

const TopBar = props => {
  const [openMenu, setOpenMenu] = useState('');

  const generateName = () => {
    setOpenMenu('')
    let rando = Math.floor(Math.random() * CHARACTER_LIST.length);
    console.log(CHARACTER_LIST[rando])
  }

  const launchMenu = menuName => {
    if(openMenu === menuName){
      setOpenMenu('');
    } else{ setOpenMenu(menuName) }
  }

  return (<>
    <div className='top-bar'>
      <h1><img src='https://rossdanielconover.com/zelda-ocarina-tracker/assets/app-icon_appIcon.svg'/></h1>
      <ul className='top-choices'>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>
          <button onClick={()=>{launchMenu('settings')}}>Settings</button>
          {openMenu === 'settings' && <ul className='sub-menu'>
              <li><button onClick={generateName}>Generate Name</button></li>
              <li><button onClick={console.log("DUNGEON SWAP")}>Dungeon Swap</button></li>
            </ul>}
        </li>
        <li>Help</li>
      </ul>
    </div>
  </>)
}

export default TopBar;
