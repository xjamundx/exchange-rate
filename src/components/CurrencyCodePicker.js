export function CurrencyCodePicker({
  supportedSymbols,
  currencyCode,
  onChange,
}) {
  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedSymbols.map((code) => (
        <option value={code}>{code}</option>
      ))}
    </select>
  );
}
