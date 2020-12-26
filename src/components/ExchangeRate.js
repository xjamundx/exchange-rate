import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { useCurrencyData } from "../reducers/RateReducer";

export function ExchangeRate() {
  const rates = useCurrencyData();
  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates <CurrencyCodePicker />
        </h1>
      </section>
      <section>
        <AmountField />
      </section>
      <section>
        <RateTable rates={rates} />
      </section>
    </>
  );
}
