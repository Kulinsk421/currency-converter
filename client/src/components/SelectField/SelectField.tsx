import React from "react";
import { ActionMeta } from "react-select";
import { FormContext } from "../Form/Form";
import { customStyles } from "./Styles/CustomSelect";
import { Select, StyledSelectField } from "./Styles/StyledSelectField";

type Option = {
  label: string;
  value: string;
};

interface SelectFieldProps {
  options: Option[];
  name: string;
}

const SelectField = ({ options, name }: SelectFieldProps) => {
  const { values, setValues } = React.useContext(FormContext);

  return (
    <StyledSelectField>
      <Select
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={customStyles}
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
