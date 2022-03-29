import styled from "styled-components";
import { colors, shadows } from "../../../helpers/consts";

export const StyledButton = styled.button`
  margin-top: 50px;
  width: 150px;
  height: 40px;
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
`;
