import { useContext } from "react";
import { BodyText } from "../Typo/BodyText";
import { StyledResultField } from "./Styles/StyledResultField";
import { FormContext } from "../Form/Form";

interface Props {
  value: string;
}

const ResultField = ({ value }: Props) => {
  const { values } = useContext(FormContext);

  return (
    <StyledResultField>
      <BodyText>{value}</BodyText>
    </StyledResultField>
  );
};

export default ResultField;
