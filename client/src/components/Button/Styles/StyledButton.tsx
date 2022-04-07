import styled from "styled-components";
import { colors, shadows } from "../../../helpers/consts";

export const StyledButton = styled.button`
  margin-top: 50px;
  padding: 10px 30px;
  border-radius: 40px;
  background-color: ${colors.blue300};
  color: ${colors.white};
  text-transform: uppercase;
  border: none;
  font-size: 1.7rem;
  letter-spacing: 0.02em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &[disabled] {
    background-color: gray;
  }
  &:hover {
    background-color: ${colors.purple300};
    box-shadow: ${shadows.dropShadow};
    cursor: pointer;
  }

  &.error {
    border: 1px solid ${colors.grey500};
    background-color: ${colors.grey300};
    color: ${colors.grey500};

    &:hover {
      box-shadow: none;
      cursor: not-allowed;
    }
  }
  img {
    animation: Rotate 0.6s infinite linear;
    @keyframes Rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
