import styled from "styled-components";
import { breakpoint, colors } from "../helpers/consts";
import u from "../helpers/unit";

export const StyledApp = styled.div`
  padding: ${u(1)} ${u(0.5)};
`;

export const InputFields = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid ${colors.black};
  border-top: 2px solid ${colors.black};
  ${breakpoint.tabletPortrait} {
    flex-direction: column;
    margin-top: 40px;
  }
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  ${breakpoint.tabletLandscape} {
    gap: 5px;
  }
  ${breakpoint.tabletPortrait} {
    &:last-child {
      border-top: 2px solid ${colors.black};
      align-items: center;
    }
  }
`;

export const AppLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ResultFields = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 15px;
  border-bottom: 2px solid ${colors.black};
  flex-wrap: wrap;
`;

export const ButtonsSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 250px;
  ${breakpoint.tabletPortrait} {
    flex-direction: column-reverse;
    gap: 80px;
    padding-top: 200px;
  }
`;
