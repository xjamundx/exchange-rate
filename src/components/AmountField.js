import { useSelector, useDispatch } from "react-redux";

export function AmountField() {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
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
