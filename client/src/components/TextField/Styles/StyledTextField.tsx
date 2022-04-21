import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";

export const StyledTextField = styled.div``;

export const Input = styled.input`
  text-align: left;
  font-size: 10rem;
  width: 450px;
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
  ${breakpoint.tabletLandscape} {
    width: 300px;
  }
  ${breakpoint.phone} {
    width: 180px;
  }
  ${breakpoint.miniPhone} {
    width: 100%;
  }
`;

export const ErrMessage = styled.span`
  color: ${colors.red600};
  font-size: 4rem;
  position: absolute;
  top: 3%;
  left: 3%;
  ${breakpoint.tabletLandscape} {
    top: 2%;
  }
  ${breakpoint.tabletPortrait} {
    top: 3%;
  }
`;
