import {connect} from 'react-redux';
import OrderOption from './OrderOption';

const mapStateToProps = state => ({
  isSubmit: state.order.submit,
});

export default connect(mapStateToProps)(OrderOption);