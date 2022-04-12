import styled from "styled-components";
import { colors } from "../../helpers/consts";

export const BodyText = styled.p`
  font-size: 10rem;

  &.currency-to {
    padding: 0 20px;
    border-left: 2px solid ${colors.black};
    border-right: 2px solid ${colors.black};
  }
`;
