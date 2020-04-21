import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

class OrderOptionText extends React.Component {
  static propTypes = {
    setOptionValue: PropTypes.func,
    currentValue: PropTypes.string,
    submit: PropTypes.bool,
  }
  
  state = {
    isValid: this.props.currentValue != '' ? true : false,
  };

  handleInput = (event) => {
    if(event.target.value != ''){
      this.setState({
        isValid: true,
      });
    } else {
      this.setState({
        isValid: false,
      });
    }
  }
  

  render() {
    const {currentValue, setOptionValue, submit} = this.props;
    return (
      <div>
        <input className={`${styles.input} ${this.state.isValid == false && submit == true ? styles.error : ''}`}
          type='text'
          value={currentValue}
          onChange={event => setOptionValue(event.currentTarget.value)}
          onInput={this.handleInput}
        />
      </div>
    );
  }
}

export default OrderOptionText;