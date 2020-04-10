import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, setOptionValue, limits, price}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} type='number' value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)} />
    ({formatPrice(price)})</div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;