import { statsVariants } from "../../helpers/MotionVariants";
import useStatistics from "../../hooks/useStatistics";
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
  const { statsData, loading } = useStatistics();

  return (
    <StyledStats
      key="content"
      variants={statsVariants}
      initial="hidden"
      animate="visible"
    >
      <PageHeader>Stats</PageHeader>
      <StatItem>
        {loading && (
          <StatLoading>
            <Header>Loading</Header>
          </StatLoading>
        )}
        {!loading && (
          <StatContent>
            <Header>Conversions done</Header>
            <BodyText>{statsData && statsData.totalConversions}</BodyText>
          </StatContent>
        )}
      </StatItem>
      <StatItem>
        {loading && (
          <StatLoading>
            <Header>Loading</Header>
          </StatLoading>
        )}
        {!loading && (
          <StatContent>
            <Header>Most favorite target currency</Header>
            <BodyText>{statsData && statsData.favCurrency.element} </BodyText>
          </StatContent>
        )}
      </StatItem>
      <StatItem>
        {loading && (
          <StatLoading>
            <Header>Loading</Header>
          </StatLoading>
        )}
        {!loading && (
          <StatContent>
            <Header>Converted in total</Header>
            <BodyText className="result">
              {statsData && statsData.totalAmount} USD{" "}
            </BodyText>
          </StatContent>
        )}
      </StatItem>
    </StyledStats>
  );
};

export default Stats;
