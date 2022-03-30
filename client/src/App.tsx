import { useEffect, useState } from "react";
import CurrencyInput from "./components/CurrencyInput.tsx/CurrencyInput";
import { PageHeader } from "./components/Typo/PageHeader";
import { SectionHeader } from "./components/Typo/SectionHeader";
import { useRates } from "./hooks/useRates";
import {
  FormContainer,
  StatisticsContainer,
  StyledApp,
  Fields,
} from "./styled-pages/StyledApp";

function App() {
  const rates = useRates();
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("RUB");

  const handleAmount1Change = (amount1) => {
    setTimeout(() => {
      setAmount2((amount1 * rates.data[currency2]) / rates.data[currency1]);
    }, 500);
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setTimeout(() => {
      setAmount2((amount1 * rates.data[currency2]) / rates.data[currency1]);
    }, 500);
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setTimeout(() => {
      setAmount1((amount2 * rates.data[currency1]) / rates.data[currency2]);
    }, 500);
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setTimeout(() => {
      setAmount1((amount2 * rates.data[currency1]) / rates.data[currency2]);
    }, 500);
    setCurrency2(currency2);
  };

  if (rates.loading)
    return <PageHeader className="loading-message">Loading ...</PageHeader>;

  return (
    <StyledApp>
      <PageHeader>Currency Converter</PageHeader>
      <FormContainer>
        <SectionHeader>Calculator</SectionHeader>
        <div>
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates.data)}
            amount={amount1}
            currency={currency1}
          />
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates.data)}
            amount={amount2}
            currency={currency2}
          />
        </div>
      </FormContainer>
      <StatisticsContainer>
        <SectionHeader>Statistics</SectionHeader>
      </StatisticsContainer>
    </StyledApp>
  );
}

export default App;
