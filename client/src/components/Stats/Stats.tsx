import useStats from "../../hooks/useStats";
import { BodyText } from "../Typo/BodyText";
import { Header } from "../Typo/Header";
import { PageHeader } from "../Typo/PageHeader";
import {
  StatContent,
  StatItem,
  StatLoading,
  StyledStats,
} from "./Styles/StyledStats";

const Stats = () => {
  const { statsData, loading } = useStats();

  return (
    <StyledStats>
      <PageHeader>Stats</PageHeader>
      <StatItem>
        {loading && <StatLoading>Loading</StatLoading>}
        {!loading && (
          <StatContent>
            <Header>Conversions done</Header>
            <BodyText>{statsData && statsData.totalConversions}</BodyText>
          </StatContent>
        )}
      </StatItem>
      <StatItem>
        {loading && <StatLoading>Loading</StatLoading>}
        {!loading && (
          <StatContent>
            <Header>Most favorite target currency</Header>
            <BodyText>{statsData && statsData.favCurrency.element} </BodyText>
          </StatContent>
        )}
      </StatItem>
      <StatItem>
        {loading && <StatLoading>Loading</StatLoading>}
        {!loading && (
          <StatContent>
            <Header>Converted in total</Header>
            <BodyText>{statsData && statsData.totalAmount} USD </BodyText>
          </StatContent>
        )}
      </StatItem>
    </StyledStats>
  );
};

export default Stats;
