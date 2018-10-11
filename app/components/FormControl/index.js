import React from 'react';
import PropTypes from 'prop-types';

class FormControl extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <input
          className={this.populateClass()}
          id={this.props.label}
          type="text"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={event => this.props.onChange(event.target.value)}
        />
        {this.populateValidStatus()}
      </div>
    );
  }

  populateValidStatus() {
    if (!this.props.value) {
      return null;
    }

    if (this.props.invalid) {
      return (
        <div style={{ fontSize: 11, marginTop: 5, color: 'green' }}>
          Format is valid
        </div>
      );
    }

    return (
      <div style={{ fontSize: 11, marginTop: 5, color: 'red' }}>
        Format is not valid
      </div>
    );
  }

  populateClass() {
    if (!this.props.value) {
      return null;
    }
    return !this.props.invalid ? 'invalid' : 'valid';
  }
}

FormControl.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.any,
  invalid: PropTypes.bool,
};

export default FormControl;
