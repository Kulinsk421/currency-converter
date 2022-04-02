import { useState } from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
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
  const [errMessage, setErrMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [convertedData, setConvertedData] = useState({
    convertedAmount: null,
    currencyTo: ``,
  });

  const handleSubmit = async (e, values) => {
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
  };

  const inputRegex = /^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)+$|^$/;

  const validateInput = (e) => {
    const input = e.target.value;
    if (!inputRegex.test(input)) {
      setErrMessage("Please enter a number");
      setIsValid(true);
    } else {
      setErrMessage("");
      setIsValid(false);
    }
  };

  if (rates.loading)
    return <PageHeader className="loading-message">Loading ...</PageHeader>;

  return (
    <StyledApp>
      <PageHeader>Currency Converter</PageHeader>
      <FormContainer>
        <SectionHeader>Calculator</SectionHeader>
        <Form
          onSubmit={handleSubmit}
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
                  onInput={validateInput}
                  errMessage={errMessage}
                  className={`${isValid ? "error" : ""}`}
                />
                <SelectField
                  label={`Currency from:`}
                  name={`currencyFrom`}
                  arrayOfOptions={Object.keys(rates.data.rates)}
                />
                <TextField
                  disabled={true}
                  className="result-field"
                  value={
                    convertedData.convertedAmount &&
                    new Intl.NumberFormat("cs-CZ", {
                      maximumFractionDigits: 4,
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
              <Button
                text="CONVERT"
                type="submit"
                className={`${isValid ? "error" : ""}`}
              />
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
