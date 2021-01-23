import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAmount, getRates } from "../store/reducers/RateReducer";
import { getName } from "../store/reducers/UserReducer";

export class RateTable extends React.Component {
  render() {
    const { rates, amount, name } = this.props;
    return (
      <table className="ExchangeRate-table">
        <tbody>
          {Object.entries(rates).map(([code, rate]) => {
            // NOTE: normally avoid floating point math in JS
            const exchangeAmount = amount * rate || 0.0;
            return (
              <tr key={code}>
                <td>{code}</td>
                <td>
                  {exchangeAmount.toLocaleString("en", {
                    style: "currency",
                    currency: code,
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Prepared for {name}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

// prop types
RateTable.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.string,
  rates: PropTypes.objectOf(PropTypes.number),
};

// redux stuff
function mapStateToProps(state) {
  return {
    name: getName(state),
    amount: getAmount(state),
    rates: getRates(state),
  };
}
export const RateTableContainer = connect(mapStateToProps)(RateTable);
