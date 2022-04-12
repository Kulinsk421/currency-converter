import styled from "styled-components";
import { colors } from "../../../helpers/consts";
import ReactSelect from "react-select";

export const StyledSelectField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.black};
`;
export const Select = styled(ReactSelect)`
  text-align: left;
`;
