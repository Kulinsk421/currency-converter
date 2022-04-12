import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { colors, shadows } from "../../../helpers/consts";

export const StyledModal = styled.div`
  position: relative;
`;

export const ModalRoot = styled(Dialog.Root)``;

export const Trigger = styled(Dialog.Trigger)`
  background-color: transparent;
  border: none;
  display: block;
  width: 100%;
`;

export const Portal = styled(Dialog.Portal)``;

export const Overlay = styled(Dialog.Overlay)`
  background-color: ${colors.grey400};
  position: fixed;
  inset: 0;
  cursor: zoom-out;
  z-index: 98;
`;

export const Content = styled(Dialog.Content)`
  background-color: ${colors.grey400};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

export const Close = styled(Dialog.Close)`
  position: absolute;
  font-size: 40px;
  color: ${colors.white};
  background-color: ${colors.grey400};
  height: 80px;
  width: 80px;
  position: absolute;
  right: 100px;
  top: 90px;
  border: 1px solid ${colors.white};
  border-radius: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
