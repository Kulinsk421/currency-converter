import styled from "styled-components";
import { colors } from "../../helpers/consts";

export const Header = styled.h2`
  font-size: 4rem;
  &.stats-trigger {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: ${colors.white};
    &:hover {
      text-decoration: underline;
    }
  }
`;
