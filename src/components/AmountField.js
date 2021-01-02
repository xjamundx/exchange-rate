export function AmountField({ amount, onChange }) {
  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}
