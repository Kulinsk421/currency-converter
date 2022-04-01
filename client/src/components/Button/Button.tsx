import { StyledButton } from "./Styles/StyledButton";

interface BtnProps {
  text: string;
  type?: string;
  className?: string;
}

const Button = ({ text, className }: BtnProps) => {
  return <StyledButton className={className}>{text}</StyledButton>;
};

export default Button;
