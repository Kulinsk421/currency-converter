import useStats from "../../hooks/useStats";
import { StatisticsContainer } from "../../styled-pages/StyledApp";
import { SectionHeader } from "../Typo/SectionHeader";
import { StyledStats } from "./Styles/StyledStats";

const Stats = () => {
  const { statsData, loading } = useStats();

  return (
    <StyledStats>
      <StatisticsContainer>
        <SectionHeader>Statistics</SectionHeader>
        <div>
          {loading && <div>Loading</div>}
          {!loading && (
            <div>
              {statsData && statsData.totalConversions} Conversions done
            </div>
          )}
        </div>
        <div>
          {loading && <div>Loading</div>}
          {!loading && (
            <div>
              {statsData && statsData.favCurrency.element} is the most favourite
              target currency
            </div>
          )}
        </div>
        <div>
          {loading && <div>Loading</div>}
          {!loading && (
            <div>
              {statsData && statsData.totalAmount} USD already converted to
              other currencies
            </div>
          )}
        </div>
      </StatisticsContainer>
    </StyledStats>
  );
};

export default Stats;
