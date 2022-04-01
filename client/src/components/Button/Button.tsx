import { StyledButton } from "./Styles/StyledButton";

interface BtnProps {
  text: string;
  type?: string;
}

const Button = ({ text }: BtnProps) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
