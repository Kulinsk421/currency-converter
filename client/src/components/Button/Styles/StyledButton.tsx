import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const StyledButton = styled.button`
  padding: 20px 60px;
  font-size: 5rem;
  border-radius: 60px;
  background-color: ${colors.grey400};
  color: ${colors.white};
  border: 1px solid ${colors.white};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled] {
    border: 1px solid ${colors.grey400};
    color: ${colors.grey400};
  }
  &:hover {
    cursor: pointer;
  }
`;
