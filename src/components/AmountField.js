import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAmount } from "../store/reducers/RateReducer";
import { amountChanged } from "../store/actions/RateActions";
import { debounce } from "lodash";

export class AmountField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: props.amount };
    this.onChange = this.onChange.bind(this);
    this.changeAmount = debounce(this.props.changeAmount, 500);
  }
  onChange(e) {
    let newAmount = e.target.value;
    this.setState({ amount: newAmount });
    this.changeAmount(newAmount);
  }
  render() {
    return (
      <form className="ExchangeRate-form">
        <input type="text" value={this.state.amount} onChange={this.onChange} />
      </form>
    );
  }
}

// prop types
AmountField.propTypes = {
  amount: PropTypes.string,
  changeAmount: PropTypes.func,
};

// redux stuff
function mapStateToProps(state) {
  return {
    amount: getAmount(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeAmount: (newAmount) => dispatch(amountChanged(newAmount)),
  };
}

export const AmountFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AmountField);
