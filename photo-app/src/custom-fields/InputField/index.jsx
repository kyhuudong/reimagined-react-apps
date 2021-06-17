import React from 'react';
import { ErrorMessage } from "formik";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";

const InputField = ({
  field,
  form,
  type = "text",
  label = "",
  placeholder = "",
  disabled = false
}) => {
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{name}</Label>}

      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
      ></Input>

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default InputField;
