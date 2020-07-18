import React from 'react';

// import Auxiliary from '../../hoc/Auxiliary';
import classes from './GridWrapper.module.css';

const GridWrapper = (props) => {
  return(
    <div className={classes.GridWrapper}>
      {props.children}
    </div>
  )
}

export default GridWrapper;