import axios from "axios";
import { useContext } from "react";
import { FormContext } from "../Form/Form";
import { BodyText } from "../Typo/BodyText";
import {
  StyledCurrencyInput,
  StyledInput,
  StyledOption,
  StyledSelect,
} from "./Styles/StyledCurrencyInput";

interface Props {
  name: string;
  currencies: string[];
}

const CurrencyInput = ({ name, currencies }: Props) => {
  const { values, setValues } = useContext(FormContext);

  const handleChange = (e) => {
    const oppositeKey = Object.keys(values).filter((key) => key !== name)[0];
    const currencyTo = values[oppositeKey];
    const dataFrom = { ...values[name], [e.target.name]: e.target.value };

    const reqBody = {
      currencyTo: currencyTo.currency,
      amountFrom: dataFrom.amount,
      currencyFrom: dataFrom.currency,
    };

    setValues((prev) => ({
      ...prev,
      [name]: {
        amount: reqBody.amountFrom,
        currency: reqBody.currencyFrom,
      },
    }));

    axios
      .post(`http://localhost:5000/conversion`, {
        ...reqBody,
      })
      .then((data) => {
        setValues((prev) => ({
          ...prev,
          [oppositeKey]: {
            currency: values[oppositeKey].currency,
            amount: data.data.convertedAmount,
          },
        }));
      });
  };

  return (
    <StyledCurrencyInput>
      <BodyText>{name}</BodyText>
      <StyledInput
        type="text"
        name={`amount`}
        value={values[name].amount}
        onChange={handleChange}
      />
      <StyledSelect
        name={`currency`}
        value={values[name].currency}
        onChange={handleChange}
      >
        {currencies.map((currency, i) => (
          <StyledOption key={i} value={currency}>
            {currency}
          </StyledOption>
        ))}
      </StyledSelect>
    </StyledCurrencyInput>
  );
};

export default CurrencyInput;
