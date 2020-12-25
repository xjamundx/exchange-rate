import { useSelector, useDispatch } from "react-redux";

export function AmountField() {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount);
  function onChange(e) {
    let newAmount = e.target.value;
    dispatch({ type: "amountChanged", payload: newAmount });
  }
  return (
    <form className="ExchangeRate-form">
      <input type="text" value={amount} onChange={onChange} />
    </form>
  );
}
