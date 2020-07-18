import React from 'react';

import classes from './GridCards.module.css';

const GridCards = (props) => {
  return(
    <div className={classes.GridCards}>
      {props.pokeName}
      <hr/>
      {props.pokeUrl}
    </div>
  )
}

export default GridCards;