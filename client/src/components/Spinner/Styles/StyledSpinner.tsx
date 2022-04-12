import styled from "styled-components";

export const StyledSpinner = styled.img`
  animation: Rotate 0.6s infinite linear;
  @keyframes Rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &.page-loader {
    width: 7rem;
  }
`;
