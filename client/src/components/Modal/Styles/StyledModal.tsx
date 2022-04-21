import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { breakpoint, colors } from "../../../helpers/consts";
import { motion } from "framer-motion";
import u from "../../../helpers/unit";

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
  position: fixed;
  right: 3%;
  top: ${u(0.8)};
  border: none;
  border-radius: 80px;
  ${breakpoint.tabletPortrait} {
    top: ${u(1.7)};
  }
  ${breakpoint.phone} {
    top: ${u(2.2)};
  }
  ${breakpoint.miniPhone} {
    top: ${u(3.4)};
  }
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
  ${breakpoint.tabletLandscape} {
    height: 65px;
    width: 65px;
    border-radius: 65px;
  }
  ${breakpoint.phone} {
    height: 55px;
    width: 55px;
    border-radius: 55px;
  }
`;
