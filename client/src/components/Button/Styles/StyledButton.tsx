import styled from "styled-components";
import { colors, shadows } from "../../../helpers/consts";

export const StyledButton = styled.button`
  margin-top: 50px;
  padding: 10px 30px;
  border-radius: 40px;
  background-color: ${colors.blue300};
  color: ${colors.white};
  border: none;
  font-size: 1.7rem;
  letter-spacing: 0.02em;
  &:hover {
    background-color: ${colors.purple300};
    box-shadow: ${shadows.dropShadow};
    cursor: pointer;
  }

  &.error {
    border: 1px solid ${colors.grey500};
    background-color: ${colors.grey300};
    color: ${colors.grey500};

    &:hover {
      box-shadow: none;
      cursor: not-allowed;
    }
  }
`;
