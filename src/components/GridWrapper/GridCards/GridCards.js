import React from 'react';

import classes from './GridCards.module.css';

const GridCards = (props) => {
  const imageSrc = 'https://pokeres.bastionbot.org/images/pokemon/'

  return(
    <div className={classes.GridCards}>
      {props.pokeName}
      <hr/>
      <img className={classes.GridCardsImage} src={imageSrc + props.pokeId + '.png'} alt={props.pokeId}></img>
      {/* {props.pokeUrl} */}
      <a href='/'>see stats</a>
    </div>
  )
}

export default GridCards;