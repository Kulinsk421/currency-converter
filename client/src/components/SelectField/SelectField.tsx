import React from "react";
import { ActionMeta } from "react-select";
import { FormContext } from "../Form/Form";
import { Label } from "../TextField/Styles/StyledTextField";
import { Option, Select, StyledSelectField } from "./Styles/StyledSelectField";

type Option = {
  label: string;
  value: string;
};

interface SelectFieldProps {
  options: Option[];
  label: string;
  name: string;
}

const SelectField = ({ options, name, label }: SelectFieldProps) => {
  const { values, setValues } = React.useContext(FormContext);

  return (
    <StyledSelectField>
      <Label htmlFor={name}>{label}</Label>
      <Select
        name={name}
        value={options.find((option) => option.value === values[name])}
        onChange={(option: Option | null, meta: ActionMeta<Option>) => {
          setValues((prev) => ({ ...prev, [name]: option.value }));
        }}
        options={options}
      />
    </StyledSelectField>
  );
};

export default SelectField;
