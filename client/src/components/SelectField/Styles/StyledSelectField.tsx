import styled from "styled-components";
import { breakpoint, colors } from "../../../helpers/consts";
import ReactSelect from "react-select";

export const StyledSelectField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.black};
`;
export const Select = styled(ReactSelect)`
  text-align: left;
  width: 300px;
  ${breakpoint.tabletLandscape} {
    width: 250px;
  }
  ${breakpoint.phone} {
    width: 180px;
  }
  ${breakpoint.miniPhone} {
    width: 160px;
  }
`;
