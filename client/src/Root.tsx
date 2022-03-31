import React from "react";
import styled from "styled-components";
import CurrencyInput from "./components/CurrencyInput.tsx/CurrencyInput";
import { PageHeader } from "./components/Typo/PageHeader";
import { SectionHeader } from "./components/Typo/SectionHeader";
import { useRates } from "./hooks/useRates";
import { Container, StatisticsContainer } from "./styled-pages/StyledApp";

interface RootProps {}

const StyledRoot = styled.div``;

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
        <div>
          <CurrencyInput currencies={Object.keys(rates.data)} name={"from"} />
          <CurrencyInput currencies={Object.keys(rates.data)} name={"to"} />
        </div>
      </Container>
      <StatisticsContainer>
        <SectionHeader>Statistics</SectionHeader>
      </StatisticsContainer>
    </StyledRoot>
  );
};

export default Root;
