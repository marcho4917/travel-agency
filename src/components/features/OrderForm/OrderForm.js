import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
//import styles from './OrderForm.scss';

const OrderForm = ({cost, options}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={cost} options={options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;