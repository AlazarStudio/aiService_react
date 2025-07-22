import React from 'react';
import classes from './Footer.module.css';

function Footer({ children, ...props }) {
  return (
    <>
      <div className={classes.container}>
        <img src="../images/aiLogo.png" />
        <span>©2025 Aizzle. All right reserved.</span>
      </div>
    </>
  );
}

export default Footer;
