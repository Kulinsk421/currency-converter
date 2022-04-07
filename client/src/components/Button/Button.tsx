import { StyledButton } from "./Styles/StyledButton";

interface BtnProps {
  text: string;
  type?: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({ text, className, isLoading, disabled = false }: BtnProps) => {
  return (
    <StyledButton className={className} disabled={disabled}>
      {isLoading ? (
        <>
          <img alt="spinner" src={"/spinner.svg"} />
          {`loading`}
        </>
      ) : (
        text
      )}
    </StyledButton>
  );
};

export default Button;
