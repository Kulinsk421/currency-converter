import styled from "styled-components";
import { breakpoint, colors, shadows } from "../../../helpers/consts";

export const StyledTextField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  ${breakpoint.tabletPortrait} {
    width: 250px;
    flex-direction: column;
    gap: 20px;
  }
  ${breakpoint.phone} {
    width: 130px;
  }
`;
export const Label = styled.label``;
export const Input = styled.input`
  text-align: center;
  font-size: 2rem;
  height: 40px;
  border: 1px solid ${colors.grey500};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 2px solid ${colors.blue300};
    box-shadow: ${shadows.dropShadow};
  }

  &.result-field {
    color: ${colors.purple300};
  }
`;
