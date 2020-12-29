import { useSelector, useDispatch } from "react-redux";
import { getAmount, amountChanged } from "../reducers/RateReducer";

export function AmountField() {
  const dispatch = useDispatch();
  const amount = useSelector(getAmount);
  function onChange(e) {
    let newAmount = e.target.value;
    dispatch(amountChanged(newAmount));
  }
  return (
    <form className="ExchangeRate-form">
      <input type="text" value={amount} onChange={onChange} />
    </form>
  );
}
