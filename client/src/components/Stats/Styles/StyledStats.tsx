import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const StyledStats = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2%;
  overflow: auto;
`;

export const StatItem = styled.div`
  padding: 20px 0;
  border-bottom: 2px solid ${colors.black};
`;

export const StatContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StatLoading = styled.div``;
