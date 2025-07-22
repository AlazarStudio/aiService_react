import React from 'react';
import classes from './HomePage.module.css';
import Container1 from '../../ui/1Containers/Container1/Container1';
import Container2 from '../../ui/1Containers/Container2/Container2';

export default function HomePage() {
  return (
    <div className={classes.container}>
      <Container1 />
      <Container2 />
    </div>
  );
}
