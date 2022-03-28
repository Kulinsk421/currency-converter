import styled from "styled-components";
import { colors, shadows } from "../../helpers/consts";

export const PageHeader = styled.h1`
  font-size: 4rem;
  padding: 40px;
  text-align: center;

  &.loading-message {
    position: absolute;
    background-color: ${colors.white};
    padding: 20px;
    width: 250px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: ${shadows.dropShadow};
  }
`;
