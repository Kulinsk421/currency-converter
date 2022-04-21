import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import u from "../../../helpers/unit";

export const StyledStats = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  padding: ${u(0.5)};
  overflow: auto;
  ${breakpoint.tabletPortrait} {
    margin-top: 40px;
  }
`;

export const StatItem = styled.div`
  padding: 20px 0;
  border-bottom: 2px solid ${colors.black};
`;

export const StatContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${breakpoint.tabletPortrait} {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const StatLoading = styled.div`
  text-align: end;
  padding: 50px 0;
  border-bottom: 2px solid ${colors.black};
`;
