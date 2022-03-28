import { useState } from "react";
import Button from "./components/Button/Button";
import Form, { FormContext } from "./components/Form/Form";
import SelectField from "./components/SelectField/SelectField";
import TextField from "./components/TextField/TextField";
import { PageHeader } from "./components/Typo/PageHeader";
import { SectionHeader } from "./components/Typo/SectionHeader";
import { useRates } from "./hooks/useRates";
import {
  Fields,
  FormContainer,
  StatisticsContainer,
  StyledApp,
} from "./styled-pages/StyledApp";

function App() {
  const rates = useRates();
  const [convertedData, setConvertedData] = useState({
    convertedAmount: null,
    currencyTo: ``,
  });

  if (rates.loading)
    return <PageHeader className="loading-message">Loading ...</PageHeader>;

  return (
    <StyledApp>
      <PageHeader>Currency Converter</PageHeader>
      <FormContainer>
        <SectionHeader>Calculator</SectionHeader>
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
            amountFrom: `1`,
            currencyFrom: `USD`,
            currencyTo: `RUB`,
            convertedAmount: ``,
          }}
        >
          {({ values }) => (
            <>
              <Fields>
                <TextField
                  label={`Amount from:`}
                  name="amountFrom"
                  type="number"
                />
                <SelectField
                  label={`Currency from:`}
                  name={`currencyFrom`}
                  arrayOfOptions={Object.keys(rates.data.rates)}
                />
                <TextField
                  className="result-field"
                  value={
                    convertedData.convertedAmount &&
                    new Intl.NumberFormat("cs-CZ", {
                      style: "currency",
                      maximumFractionDigits: 4,
                      currency: convertedData.currencyTo,
                    }).format(convertedData.convertedAmount)
                  }
                  label={`Amount to:`}
                  name="convertedAmount"
                />
                <SelectField
                  label={`Currency to:`}
                  name={`currencyTo`}
                  arrayOfOptions={Object.keys(rates.data.rates)}
                />
              </Fields>
              <Button text="CONVERT" type="submit" />
            </>
          )}
        </Form>
      </FormContainer>
      <StatisticsContainer>
        <SectionHeader>Statistics</SectionHeader>
      </StatisticsContainer>
    </StyledApp>
  );
}

export default App;
