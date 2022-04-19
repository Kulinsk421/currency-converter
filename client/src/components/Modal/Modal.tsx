import Img from "../Img/Img";
import Stats from "../Stats/Stats";
import { Header } from "../Typo/Header";
import {
  Close,
  CloseBtn,
  Content,
  ModalRoot,
  Overlay,
  Portal,
  StyledModal,
  Trigger,
} from "./Styles/StyledModal";
import { buttonVariants } from "../../helpers/MotionVariants";

const Modal = () => {
  return (
    <StyledModal>
      <ModalRoot>
        <Trigger>
          <Header className="stats-trigger">Statistics</Header>
        </Trigger>
        <Portal>
          <Overlay />
          <Content>
            <Stats />
            <Close>
              <CloseBtn variants={buttonVariants} whileHover="hover">
                <Img src="/closeIcon.svg" alt="Close icon" />
              </CloseBtn>
            </Close>
          </Content>
        </Portal>
      </ModalRoot>
    </StyledModal>
  );
};

export default Modal;
