import { useEffect } from "react";
import { useContext } from "react";
import { FormContext } from "../Form/Form";
import { StyledTextField, Input, ErrMessage } from "./Styles/StyledTextField";

interface InputProps {
  name: string;
  value?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  errMessage?: string;
}

const TextField = ({ name, value, className, disabled, type }: InputProps) => {
  const { values, setValues, errors } = useContext(FormContext);
  const error = errors?.[name];

  useEffect(() => {
    if (value) {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  }, [value]);

  return (
    <StyledTextField>
      <Input
        type={type}
        disabled={disabled}
        className={`${error ? "error" : ""} ${className}`}
        value={values[name]}
        name={name}
        onChange={(e) => {
          setValues((prev) => ({ ...prev, [name]: e.target.value }));
        }}
      />
      {error && <ErrMessage>{error}</ErrMessage>}
    </StyledTextField>
  );
};

export default TextField;
