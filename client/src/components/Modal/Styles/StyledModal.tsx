import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { colors } from "../../../helpers/consts";
import { motion } from "framer-motion";

export const StyledModal = styled.div`
  position: relative;
`;

export const ModalRoot = styled(Dialog.Root)``;

export const Trigger = styled(Dialog.Trigger)`
  background-color: transparent;
  border: none;
  display: block;
  cursor: pointer;
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
  right: 2%;
  top: 7%;
  border: none;
  border-radius: 80px;
`;

export const CloseBtn = styled(motion.div)`
  color: ${colors.white};
  background-color: ${colors.grey400};
  height: 80px;
  width: 80px;
  border: 1px solid ${colors.white};
  border-radius: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
