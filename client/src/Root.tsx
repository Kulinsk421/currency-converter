import CurrencyInput from "./components/CurrencyInput.tsx/CurrencyInput";
import { PageHeader } from "./components/Typo/PageHeader";
import { SectionHeader } from "./components/Typo/SectionHeader";
import { useRates } from "./hooks/useRates";
import {
  Container,
  Fields,
  StatisticsContainer,
} from "./styled-pages/StyledApp";
import { StyledRoot } from "./styled-pages/StyledRoot";

interface RootProps {}

const Root = ({}: RootProps) => {
  const rates = useRates();

  if (rates.loading) {
    return <PageHeader className="loading-message">Loading ...</PageHeader>;
  }

  return (
    <StyledRoot>
      <PageHeader>Currency Converter</PageHeader>
      <Container>
        <SectionHeader>Calculator</SectionHeader>
        <Fields>
          <CurrencyInput currencies={Object.keys(rates.data)} name={"from"} />
          <CurrencyInput currencies={Object.keys(rates.data)} name={"to"} />
        </Fields>
      </Container>
      <StatisticsContainer>
        <SectionHeader>Statistics</SectionHeader>
      </StatisticsContainer>
    </StyledRoot>
  );
};

export default Root;
