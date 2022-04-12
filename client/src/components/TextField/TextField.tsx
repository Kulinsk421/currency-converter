import { useEffect } from "react";
import { useContext } from "react";
import { FormContext } from "../Form/Form";
import {
  StyledTextField,
  Input,
  ErrMessage,
  InputContainer,
} from "./Styles/StyledTextField";

interface InputProps {
  name: string;
  value?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  errMessage?: string;
  formatValue?: (value: string) => string;
}

const TextField = ({
  name,

  value,
  className,
  disabled,
  type,
  formatValue = (val) => val,
}: InputProps) => {
  const { values, setValues, errors } = useContext(FormContext);
  const error = errors?.[name];

  useEffect(() => {
    if (value) {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  }, [value]);

  return (
    <StyledTextField>
      <InputContainer>
        <Input
          type={type}
          disabled={disabled}
          className={`${error ? "error" : ""} ${className}`}
          value={formatValue(values[name])}
          name={name}
          onChange={(e) => {
            setValues((prev) => ({ ...prev, [name]: e.target.value }));
          }}
        />
        {error && <ErrMessage>{error}</ErrMessage>}
      </InputContainer>
    </StyledTextField>
  );
};

export default TextField;
