import styled from "styled-components";
import { colors } from "../../helpers/consts";

export const PageHeader = styled.h1`
  text-align: left;
  font-size: 8rem;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.black};
  border-top: 2px solid ${colors.black};
  padding: 20px 0;
`;
