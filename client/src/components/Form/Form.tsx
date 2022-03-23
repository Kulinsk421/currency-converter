import React from "react";
import styled from "styled-components";

type Values = { [key: string]: string };

type FormContext = {
  values: Values;
  setValues: React.Dispatch<React.SetStateAction<Values>>;
};

interface FormProps {
  initialValues: Values;
  children: (args: FormContext) => JSX.Element | JSX.Element[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>, values: Values) => void;
}

const StyledForm = styled.form``;
export const FormContext = React.createContext<FormContext>(null);

const Form = ({ initialValues, children, onSubmit }: FormProps) => {
  const [values, setValues] = React.useState(initialValues);

  return (
    <FormContext.Provider value={{ values: values, setValues: setValues }}>
      <StyledForm onSubmit={(e) => onSubmit(e, values)}>
        {children({ values, setValues })}
      </StyledForm>
    </FormContext.Provider>
  );
};

export default Form;
