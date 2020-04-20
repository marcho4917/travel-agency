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
    isValid: '',
  }

  handleInput = (event) => {
    if(event.target.value != ''){
      this.setState({
        isValid: false,
      });
    } else {
      this.setState({
        isValid: true,
      });
    }
  }
  

  render() {
    const {currentValue, setOptionValue, submit} = this.props;
    return (
      <div>
        <input className={`${styles.input} ${this.state.isValid == true && submit == false ? styles.error : ''}`}
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