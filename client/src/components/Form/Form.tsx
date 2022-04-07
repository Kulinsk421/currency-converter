import React from "react";
import { StyledForm } from "./Styles/StyledForm";

type Values = { [key: string]: string };

type FormContext = {
  values: Values;
  errors?: Values;
  setValues: React.Dispatch<React.SetStateAction<Values>>;
  isLoading?: boolean;
};

interface FormProps {
  initialValues: Values;
  children: (args: FormContext) => JSX.Element | JSX.Element[];
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    values: Values,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setValues: React.Dispatch<React.SetStateAction<Values>>
  ) => void;
  validate: (Values) => Values;
}

export const FormContext = React.createContext<FormContext>(null);

const Form = ({ initialValues, children, onSubmit, validate }: FormProps) => {
  const [values, setValues] = React.useState(initialValues);
  const [isLoading, setIsLoading] = React.useState(false);
  const errors = validate(values);

  return (
    <FormContext.Provider
      value={{
        values: values,
        setValues: setValues,
        errors: errors,
      }}>
      <StyledForm
        onSubmit={async (e) => {
          e.preventDefault();
          const isValid = Object.keys(errors).length === 0;

          if (isValid) {
            setIsLoading(true);
            await onSubmit(e, values, setIsLoading, setValues);
            setIsLoading(false);
          }
        }}>
        {children({ values, setValues, errors: errors, isLoading })}
      </StyledForm>
    </FormContext.Provider>
  );
};

export default Form;
