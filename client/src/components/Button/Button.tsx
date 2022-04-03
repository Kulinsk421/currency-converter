import { StyledButton } from "./Styles/StyledButton";

interface BtnProps {
  text: string;
  type?: string;
  className?: string;
  isLoading?: boolean;
}

const Button = ({ text, className, isLoading }: BtnProps) => {
  return (
    <StyledButton className={className}>
      {isLoading ? (
        <>
          <img src={"/spinner.svg"} />
          {`loading`}
        </>
      ) : (
        text
      )}
    </StyledButton>
  );
};

export default Button;
