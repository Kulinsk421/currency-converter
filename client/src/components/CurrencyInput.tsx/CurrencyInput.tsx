import axios from "axios";
import React, { useContext } from "react";
import { FormContext } from "../Form/Form";

interface Props {
  name: string;
  currencies: string[];
}

const CurrencyInput = ({ name, currencies }: Props) => {
  const { values, setValues } = useContext(FormContext);

  const handleChange = (e) => {
    const theOtherOneKey = Object.keys(values).filter((key) => key !== name)[0];
    const currencyTo = values[theOtherOneKey];
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
          [theOtherOneKey]: {
            currency: values[theOtherOneKey].currency,
            amount: data.data.convertedAmount,
          },
        }));
      });
  };

  return (
    <div>
      <p style={{ marginTop: 10 }}>{name}</p>
      <input
        type="text"
        name={`amount`}
        value={values[name].amount}
        onChange={handleChange}
      />
      <select
        name={`currency`}
        value={values[name].currency}
        onChange={handleChange}>
        {currencies.map((currency, i) => (
          <option key={i} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
