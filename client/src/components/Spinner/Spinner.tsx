import { StyledSpinner } from "./Styles/StyledSpinner";

interface Props {
  className?: string;
}

const Spinner = ({ className }: Props) => {
  return (
    <StyledSpinner className={className} alt="spinner" src={"/spinner.svg"} />
  );
};

export default Spinner;
