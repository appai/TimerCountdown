import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <div className="form-group">
        <button className={this.populateClass()} {...this.props}>
          {this.props.label}
        </button>
      </div>
    );
  }

  populateClass() {
    if (this.props.disabled) {
      return 'disabled';
    }
    return 'button';
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
