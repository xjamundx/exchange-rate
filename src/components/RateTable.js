import { RateRow } from "./RateRow";

export function RateTable({ currencyData, amount }) {
  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.entries(currencyData).map(([code, rate]) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return <RateRow amount={exchangeAmount} code={code} />;
        })}
      </tbody>
    </table>
  );
}
