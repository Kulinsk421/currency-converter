import styled from "styled-components";
import { colors, shadows } from "../helpers/consts";
import u from "../helpers/unit";

export const StyledApp = styled.div`
  max-width: 100vw;
  max-height: 100vh;
`;

export const FormContainer = styled.div`
  background-color: ${colors.white};
  padding: 20px;
  box-shadow: ${shadows.dropShadow};
  border-radius: 10px;
  height: 40vh;
`;

export const StatisticsContainer = styled.div`
  margin-top: 50px;
  background-color: ${colors.white};
  padding: 20px;
  box-shadow: ${shadows.dropShadow};
  border-radius: 10px;
  height: 35vh;
`;

export const Fields = styled.div`
  padding: 0 ${u(1)};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  justify-items: center;
`;
