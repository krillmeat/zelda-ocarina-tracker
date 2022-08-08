import React from 'react';
import '../css/collected-items.css';
import Items from './items';
import Equipment from './equipment';
import AgeToggle from './age-toggle';
import Quest from './quest';

const CollectedItems = () => {
  return (<div className='collected-items'>
    <AgeToggle/>
    <Items/>
    {/* <Equipment /> */}
    <Quest />
  </div>)
}

export default CollectedItems;
