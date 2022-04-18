import styled from "styled-components";
import { colors } from "../../../helpers/consts";

export const StyledTextField = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
`;

export const Input = styled.input`
  text-align: left;
  font-size: 10rem;
  width: 350px;
  border: none;
  background-color: ${colors.grey400};
  height: 100%;
  color: ${colors.black};
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid ${colors.black};
  }

  &:hover {
    border: 1px solid ${colors.black};
  }

  &.result-field {
    border: none;
    background-color: ${colors.grey400};
    color: ${colors.black};
  }

  &.error {
    border: 2px solid ${colors.red600};
  }
`;

export const ErrMessage = styled.span`
  color: ${colors.red600};
  font-size: 4rem;
  position: absolute;
  width: 500px;
  top: 180px;
`;
