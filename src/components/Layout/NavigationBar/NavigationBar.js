import React from 'react';

import classes from './NavigationBar.module.css';

const NavigationBar = () => {
  return(
    <div className={classes.NavigationBar}>
      <h1>PokéDex</h1>
      <div className={classes.NavItems}>
        <a href='/'>Feed</a>
        <a href='/'>Filter by PokéGender</a>
      </div>
    </div>
  )
};

export default NavigationBar;