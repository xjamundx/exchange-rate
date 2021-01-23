import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ratesUpdated } from "../store/actions/RateActions";
import {
  getCurrencyCode,
  getSupportedCurrencies,
} from "../store/reducers/RateReducer";
import { RateTableContainer } from "./RateTable";
import { CurrencyCodePickerContainer } from "./CurrencyCodePicker";
import { getExchangeRates } from "../api";
import { AmountFieldContainer } from "./AmountField";

export class ExchangeRate extends React.Component {
  constructor(props) {
    super(props);
    this.getLatestExchangeRates();
  }
  componentDidUpdate(prevProps) {
    if (this.props.currencyCode !== prevProps.currencyCode) {
      this.getLatestExchangeRates();
    }
  }
  getLatestExchangeRates() {
    const { currencyCode, updateRates, supportedCurrencies } = this.props;
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      updateRates(rates);
    });
  }
  render() {
    return (
      <>
        <section>
          <h1 className="ExchangeRate-header">
            Exchange Rates <CurrencyCodePickerContainer />
          </h1>
        </section>
        <section>
          <AmountFieldContainer />
        </section>
        <section>
          <RateTableContainer />
        </section>
      </>
    );
  }
}

// props types
ExchangeRate.propTypes = {
  updateCurrencyCode: PropTypes.func,
  currencyCode: PropTypes.string,
  supportedCurrencies: PropTypes.arrayOf(PropTypes.string),
};

// redux stuff
function mapStateToProps(state) {
  return {
    supportedCurrencies: getSupportedCurrencies(state),
    currencyCode: getCurrencyCode(state),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateRates: (rates) => dispatch(ratesUpdated(rates)),
  };
}
export const ExchangeRateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRate);
