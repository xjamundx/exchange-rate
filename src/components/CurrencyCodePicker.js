import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrencyCode,
  getSupportedSymbols,
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
    const { currencyCode, supportedSymbols } = this.props;
    return (
      <select
        className="currencyCode"
        value={currencyCode}
        onChange={this.onChange}
      >
        {supportedSymbols.map((code) => (
          <option value={code}>{code}</option>
        ))}
      </select>
    );
  }
}

// prop types
CurrencyCodePicker.propTypes = {
  supportedSymbols: PropTypes.arrayOf(PropTypes.string),
  currencyCode: PropTypes.string,
};

// redux stuff
function mapStateToProps(state) {
  return {
    currencyCode: getCurrencyCode(state),
    supportedSymbols: getSupportedSymbols(state),
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
