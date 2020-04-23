import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';


class HappyHourdAd extends React.Component {
    static propTypes = {
      promoDescription: PropTypes.string,
      title: PropTypes.string,
    } 

    constructor(){
      super();
    
      setInterval(() => {
        this.forceUpdate();
      }, 1000);
    }

    getCountdownTime(){
      const currentTime = new Date();
      const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
    
      if(currentTime.getUTCHours() >= 12){
        nextNoon.setUTCDate(currentTime.getUTCDate()+1);
      }
    
      return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
    }

    render() {
      const {title, promoDescription} = this.props;
      const tikTokTimer = this.getCountdownTime();

      return (
        <div className={styles.component}>
          <div className={styles.promoDescription}>{tikTokTimer > 23 ? promoDescription : this.getCountdownTime()}</div>
          <h3 className={styles.title}>{title}</h3>
        </div>
      );
    }
}
  
export default HappyHourdAd;
