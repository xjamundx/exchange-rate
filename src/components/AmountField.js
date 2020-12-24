export function AmountField({ amount, onChange }) {
  return (
    <form className="ExchangeRate-form">
      <input type="text" value={amount} onChange={onChange} />
    </form>
  );
}
