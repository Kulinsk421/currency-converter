import axios from "axios";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import ResultField from "./components/ResultField/ResultField";
import SelectField from "./components/SelectField/SelectField";
import Spinner from "./components/Spinner/Spinner";
import TextField from "./components/TextField/TextField";
import { BodyText } from "./components/Typo/BodyText";
import { useRates } from "./hooks/useRates";
import {
  AppLoader,
  ButtonsSection,
  Field,
  InputFields,
  ResultFields,
  StyledApp,
} from "./styled-pages/StyledApp";

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
    return (
      <AppLoader>
        <Spinner className="page-loader" />
      </AppLoader>
    );

  return (
    <StyledApp>
      <Form
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors: any = {};

          if (
            !/^(\d*\.?\d+|\d{1,3}(,\d{3})*(\.\d+)?)+$/.test(values.amountFrom)
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
        }}
      >
        {({ values, errors, isLoading }) => (
          <>
            <InputFields>
              <Field>
                <TextField name="amountFrom" />
                <SelectField
                  name={`currencyFrom`}
                  options={Object.keys(rates.data.rates).map((key) => ({
                    label: key,
                    value: key,
                  }))}
                />
              </Field>
              <Field>
                <BodyText className="currency-to">to</BodyText>
                <SelectField
                  name={`currencyTo`}
                  options={Object.keys(rates.data.rates).map((key) => ({
                    label: key,
                    value: key,
                  }))}
                />
              </Field>
            </InputFields>
            <ResultFields>
              <BodyText>is</BodyText>
              {
                <ResultField
                  value={values.convertedAmount}
                  formatValue={(value) => {
                    return new Intl.NumberFormat("cs-CZ", {
                      style: "currency",
                      maximumFractionDigits: 2,
                      currency: values.currencyTo,
                    }).format(Number(value));
                  }}
                />
              }
            </ResultFields>

            <ButtonsSection>
              <Modal />

              <Button
                isLoading={isLoading}
                disabled={Object.keys(errors).length !== 0}
                text="CONVERT"
                type="submit"
              />
            </ButtonsSection>
          </>
        )}
      </Form>
    </StyledApp>
  );
}

export default App;
