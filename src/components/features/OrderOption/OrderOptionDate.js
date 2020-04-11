import React from 'react';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import styles from './OrderOption.scss';

const OrderOptionDate = ({ currentValue, setOptionValue }) => (
  <div>
    <DatePicker
      className={styles.input}
      selected={currentValue} 
      onChange={setOptionValue}
      placeholderText="Click to select a date"
      dateFormat="dd/MM/yyyy"
    />
  </div>
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;