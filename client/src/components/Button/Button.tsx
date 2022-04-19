import { buttonVariants } from "../../helpers/MotionVariants";
import Spinner from "../Spinner/Spinner";
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
    <StyledButton
      variants={buttonVariants}
      whileHover="hover"
      className={className}
      disabled={disabled}
    >
      {isLoading ? (
        <>
          <Spinner className="btn-loader" />
          {`loading`}
        </>
      ) : (
        text
      )}
    </StyledButton>
  );
};

export default Button;
