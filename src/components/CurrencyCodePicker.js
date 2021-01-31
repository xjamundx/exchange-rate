import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrencyCode,
  getSupportedCurrencies,
} from "../store/reducers/RateReducer";
import { updateCurrencyCode } from "../store/actions/RateActions";

export class CurrencyCodePicker extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const currencyCode = e.target.value;
    this.props.currencyCodeUpdate(currencyCode);
  }
  render() {
    const { currencyCode, supportedCurrencies } = this.props;
    return (
      <select
        className="currencyCode"
        value={currencyCode}
        onChange={this.onChange}
      >
        {supportedCurrencies.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    );
  }
}

// prop types
CurrencyCodePicker.propTypes = {
  supportedCurrencies: PropTypes.arrayOf(PropTypes.string),
  currencyCode: PropTypes.string,
};

// redux stuff
function mapStateToProps(state) {
  return {
    currencyCode: getCurrencyCode(state),
    supportedCurrencies: getSupportedCurrencies(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    currencyCodeUpdate: (currencyCode) =>
      dispatch(updateCurrencyCode(currencyCode)),
  };
}
export const CurrencyCodePickerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyCodePicker);
