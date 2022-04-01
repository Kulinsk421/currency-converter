import React from "react";
import styled from "styled-components";
import { FormContext } from "../Form/Form";
import { Label } from "../TextField/Styles/StyledTextField";
import { Option, Select, StyledSelectField } from "./Styles/StyledSelectField";

interface SelectFieldProps {
  arrayOfOptions: string[];
  label: string;
  name: string;
}

const SelectField = ({ arrayOfOptions, name, label }: SelectFieldProps) => {
  const { values, setValues } = React.useContext(FormContext);
  return (
    <StyledSelectField>
      <Label htmlFor={name}>{label}</Label>
      <Select
        name={name}
        value={values[name]}
        onChange={(e) =>
          setValues((prev) => ({ ...prev, [name]: e.target.value }))
        }
      >
        {arrayOfOptions.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </StyledSelectField>
  );
};

export default SelectField;
