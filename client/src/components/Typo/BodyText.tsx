import styled from "styled-components";
import { breakpoint, colors } from "../../helpers/consts";

export const BodyText = styled.p`
  font-size: 10rem;

  &.currency-to {
    padding: 0 20px;
    border-left: 2px solid ${colors.black};
    border-right: 2px solid ${colors.black};
    ${breakpoint.tabletPortrait} {
      border: none;
      padding: unset;
    }
  }
  &.result {
    word-break: break-all;
  }
`;
