import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  countToSummer(){
    const currentTime = new Date();
    const nextSummer = new Date(new Date().getFullYear(), 5, 21);
  
    const leftTime = Math.floor((nextSummer - currentTime) / (60 * 60 * 24 * 1000));
  
    if(leftTime == 1) {
      return '1 day to summer!';
    } else if (leftTime <= 0 && leftTime >-93) {
      return null;
    } else {
      
      return leftTime+ ' ' +'days to summer!';
    } 
  }

  render() {
    return(
      <div className={styles.component}>
        {this.countToSummer()}
      </div>
    );
  }
}

export default DaysToSummer;