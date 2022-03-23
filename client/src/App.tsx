import { useContext } from "react";
import { useState } from "react";
import Form, { FormContext } from "./components/Form/Form";
import SelectField from "./components/SelectField/SelectField";
import TextField from "./components/TextField/TextField";
import { useRates } from "./hooks/useRates";

function App() {
  const rates = useRates();
  const [convertedData, setConvertedData] = useState({
    convertedAmount: null,
    currencyTo: ``,
  });

  if (rates.loading) return <h1>loading</h1>;

  return (
    <Form
      onSubmit={async (e, values) => {
        e.preventDefault();
        try {
          const res = await fetch(`http://localhost:5000/conversion`, {
            method: `post`,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              currencyFrom: values.currencyFrom,
              currencyTo: values.currencyTo,
              amountFrom: values.amountFrom,
            }),
          });
          const data = await res.json();
          setConvertedData({
            convertedAmount: data.convertedAmount,
            currencyTo: data.currencyTo,
          });
        } catch (e) {
          console.log(e);
        }
      }}
      initialValues={{
        amountFrom: `1000`,
        currencyFrom: `USD`,
        currencyTo: `RUB`,
        convertedAmount: ``,
      }}>
      {({ values }) => (
        <>
          <TextField label={`Amount from`} name="amountFrom" />
          <SelectField
            label={`Currency from`}
            name={`currencyFrom`}
            arrayOfOptions={Object.keys(rates.data.rates)}
          />
          <SelectField
            label={`Currency to`}
            name={`currencyTo`}
            arrayOfOptions={Object.keys(rates.data.rates)}
          />
          <TextField
            value={
              convertedData.convertedAmount &&
              new Intl.NumberFormat("cs-CZ", {
                style: "currency",
                maximumFractionDigits: 4,
                currency: convertedData.currencyTo,
              }).format(convertedData.convertedAmount)
            }
            label={`Converted amount`}
            name="convertedAmount"
          />
          <button type="submit">send</button>
        </>
      )}
    </Form>
  );
}

export default App;
