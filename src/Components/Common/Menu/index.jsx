import React, { forwardRef } from 'react';
import MenuItem from './MenuItem';
import SideBar from '../../SideBar';
import './style.css';

const Menu = forwardRef(({ list }, ref) => (
  <div className='main-container'>
        <SideBar />
    <main ref={ref}>
      {list.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </main>
  </div>
    
  ));

export default Menu
