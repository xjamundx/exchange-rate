import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateCurrencyCode } from "../store/actions/RateActions";
import { getCurrencyCode } from "../store/reducers/RateReducer";
import { RateTableContainer } from "./RateTable";
import { CurrencyCodePickerContainer } from "./CurrencyCodePicker";
import { AmountFieldContainer } from "./AmountField";

export class ExchangeRate extends React.Component {
  constructor(props) {
    super(props);

    // fire off our AJAX call with the initial currency code
    props.updateCurrencyCode(props.currencyCode);
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
};

// redux stuff
function mapStateToProps(state) {
  return {
    currencyCode: getCurrencyCode(state),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateCurrencyCode: (currencyCode) =>
      dispatch(updateCurrencyCode(currencyCode)),
  };
}
export const ExchangeRateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRate);
