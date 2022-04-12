import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 40px;
  background-color: ${colors.grey400};
  color: ${colors.white};
  border: 1px solid ${colors.white};
  text-transform: uppercase;
  font-size: 1.7rem;
  letter-spacing: 0.02em;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled] {
    background-color: gray;
  }
  &:hover {
    cursor: pointer;
  }
`;
