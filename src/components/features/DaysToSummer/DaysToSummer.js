import React from 'react';
import styles from './DaysToSummer.scss';

const DaysToSummer = () => (
  <div className={styles.component}>
    {countToSummer()}
  </div>
);

const countToSummer = () => {
  const currentTime = new Date();
  const nextSummer = new Date(new Date().getFullYear(), 5, 21);

  const leftTime = Math.floor((nextSummer - currentTime) / (60 * 60 * 24 * 1000));

  if(leftTime == 1) {
    return '1 day to summer!';
    /* -93 means how long the summer lasts*/
  } else if (leftTime <= 0 && leftTime >-93) {
    return null;
  } else {
    return leftTime+ ' ' +'days to summer!';
  } 
};

export default DaysToSummer;