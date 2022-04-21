import styled from "styled-components";
import { breakpoint } from "../../../helpers/consts";

export const StyledImg = styled.img`
  width: 60px;
  ${breakpoint.tabletLandscape} {
    width: 45px;
  }
`;
