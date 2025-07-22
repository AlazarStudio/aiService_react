import React from 'react';
import classes from './Container1.module.css';

export default function Container1() {
  return (
    <div className={classes.container}>
      <div className={classes.containerBlock}>
        <img src="../images/ai1.png" />
        <img src="../images/ai2.png" />
        <img src="../images/aiLogo.png" />
      </div>
    </div>
  );
}
