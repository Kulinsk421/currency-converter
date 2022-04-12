import styled from "styled-components";
import { colors } from "../helpers/consts";

export const StyledApp = styled.div`
  padding: 2%;
`;

export const InputFields = styled.div`
  width: 98%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.black};
  border-top: 2px solid ${colors.black};
`;

export const AppLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ResultFields = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  border-bottom: 2px solid ${colors.black};
`;
