import { useContext } from "react";
import { BodyText } from "../Typo/BodyText";
import { StyledResultField } from "./Styles/StyledResultField";
import { FormContext } from "../Form/Form";

interface Props {
  formatValue?: (value: string) => string;
  value: string;
}

const ResultField = ({ formatValue = (val) => val, value }: Props) => {
  const { values } = useContext(FormContext);

  return (
    <StyledResultField>
      <BodyText>{formatValue(value)}</BodyText>
    </StyledResultField>
  );
};

export default ResultField;
