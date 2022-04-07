import axios from "axios";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import SelectField from "./components/SelectField/SelectField";
import Stats from "./components/Stats/Stats";
import TextField from "./components/TextField/TextField";
import { PageHeader } from "./components/Typo/PageHeader";
import { SectionHeader } from "./components/Typo/SectionHeader";
import { useRates } from "./hooks/useRates";
import { Fields, FormContainer, StyledApp } from "./styled-pages/StyledApp";

function App() {
  const rates = useRates();

  const handleSubmit = async (e, values, setIsLoading, setValues) => {
    setIsLoading(true);
    try {
      const data = await axios.post(`http://localhost:5000/api/conversion`, {
        currencyFrom: values.currencyFrom,
        currencyTo: values.currencyTo,
        amountFrom: values.amountFrom,
      });

      setValues((prev) => ({
        ...prev,
        convertedAmount: data.data.convertedAmount,
      }));
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
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
          validate={(values) => {
            const errors: any = {};

            if (
              !/^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)+$|^$/.test(
                values.amountFrom
              )
            ) {
              errors.amountFrom = "Please enter a number";
            }

            return errors;
          }}
          initialValues={{
            amountFrom: `1`,
            currencyFrom: `USD`,
            currencyTo: `RUB`,
            convertedAmount: ``,
          }}>
          {({ values, errors, isLoading }) => (
            <>
              <Fields>
                <TextField label={`Amount from:`} name="amountFrom" />
                <SelectField
                  label={`Currency from:`}
                  name={`currencyFrom`}
                  options={Object.keys(rates.data.rates).map((key) => ({
                    label: key,
                    value: key,
                  }))}
                />
                <TextField
                  disabled={true}
                  className="result-field"
                  formatValue={(value) => {
                    return new Intl.NumberFormat("cs-CZ", {
                      maximumFractionDigits: 2,
                    }).format(Number(value));
                  }}
                  label={`Amount to:`}
                  name="convertedAmount"
                />
                <SelectField
                  label={`Currency to:`}
                  name={`currencyTo`}
                  options={Object.keys(rates.data.rates).map((key) => ({
                    label: key,
                    value: key,
                  }))}
                />
              </Fields>
              <Button
                isLoading={isLoading}
                disabled={Object.keys(errors).length !== 0}
                text="CONVERT"
                type="submit"
              />
            </>
          )}
        </Form>
      </FormContainer>
      <Stats />
    </StyledApp>
  );
}

export default App;
