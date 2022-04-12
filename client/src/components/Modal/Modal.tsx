import Img from "../Img/Img";
import Stats from "../Stats/Stats";
import { Header } from "../Typo/Header";

import {
  Close,
  Content,
  ModalRoot,
  Overlay,
  Portal,
  StyledModal,
  Trigger,
} from "./Styles/StyledModal";

const Modal = () => {
  return (
    <StyledModal>
      <ModalRoot>
        <Trigger>
          <Header>Statistics</Header>
        </Trigger>
        <Portal>
          <Overlay />
          <Content>
            <Stats />
            <Close>
              <Img src="/closeIcon.svg" alt="Close icon" />
            </Close>
          </Content>
        </Portal>
      </ModalRoot>
    </StyledModal>
  );
};

export default Modal;
