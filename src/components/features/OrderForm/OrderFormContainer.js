import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption, setSubmited} from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
  setSubmited: submit => dispatch(setSubmited(submit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);