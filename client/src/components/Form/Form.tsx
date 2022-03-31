import React from "react";
import { StyledForm } from "./Styles/StyledForm";

type Values = { [key: string]: any };

export type FormContext<T = Values> = {
  values: T;
  setValues: React.Dispatch<React.SetStateAction<Values>>;
};

interface FormProps {
  initialValues: Values;
  children: (args: FormContext) => JSX.Element | JSX.Element[];
}

export const FormContext = React.createContext<FormContext>(null);

const Form = ({ initialValues, children }: FormProps) => {
  const [values, setValues] = React.useState(initialValues);

  return (
    <FormContext.Provider value={{ values: values, setValues: setValues }}>
      <StyledForm>{children({ values, setValues })}</StyledForm>
    </FormContext.Provider>
  );
};

export default Form;
