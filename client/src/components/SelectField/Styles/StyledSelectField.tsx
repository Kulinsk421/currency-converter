import styled from "styled-components";
import { breakpoint, colors, shadows } from "../../../helpers/consts";

export const StyledSelectField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;

  ${breakpoint.tabletPortrait} {
    flex-direction: column;
    gap: 20px;
  }
  ${breakpoint.phone} {
    width: 130px;
  }
  ${breakpoint.miniPhone} {
    width: 80px;
  }
`;
export const Select = styled.select`
  text-align: center;
  font-size: 2rem;
  height: 40px;
  border: 1px solid ${colors.grey500};
  border-radius: 5px;
  background-color: ${colors.white};
  &:focus {
    outline: none;
    border: 2px solid ${colors.blue300};
    box-shadow: ${shadows.dropShadow};
  }
`;
export const Option = styled.option`
  background-color: ${colors.grey500};
  color: ${colors.white};
`;
