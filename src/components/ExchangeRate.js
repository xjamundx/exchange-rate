import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrencyCode } from "../reducers/RateReducer";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";

export function ExchangeRate() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateCurrencyCode());
  }, []);
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
        <RateTable />
      </section>
    </>
  );
}
