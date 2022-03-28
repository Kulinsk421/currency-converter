import { useEffect } from "react";
import { useContext } from "react";
import { FormContext } from "../Form/Form";
import { StyledTextField, Label, Input } from "./Styles/StyledTextField";

interface InputProps {
  name: string;
  label: JSX.Element | string;
  value?: string;
  type?: string;
  className?: string;
}

const TextField = ({ name, label, value, className }: InputProps) => {
  const { values, setValues } = useContext(FormContext);

  useEffect(() => {
    if (value) {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  }, [value]);

  return (
    <StyledTextField>
      <Label htmlFor={name}>{label}</Label>
      <Input
        className={className}
        value={values[name]}
        name={name}
        onChange={(e) => {
          setValues((prev) => ({ ...prev, [name]: e.target.value }));
        }}
      />
    </StyledTextField>
  );
};

export default TextField;
