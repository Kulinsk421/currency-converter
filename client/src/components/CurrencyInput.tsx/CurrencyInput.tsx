interface Props {
  amount: number;
  currency: string;
  currencies: string[];
  onAmountChange: (e) => void;
  onCurrencyChange: (e) => void;
}

const CurrencyInput = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}: Props) => {
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
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
