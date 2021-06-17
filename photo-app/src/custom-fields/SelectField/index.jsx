import React from 'react';
import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

const PHOTO_CATEGORY_OPTIONS = [
  { value: 1, label: "Technology" },
  { value: 2, label: "Education" },
  { value: 3, label: "Nature" },
  { value: 4, label: "Animals" },
  { value: 5, label: "Styles" }
];
const SelectField = ({
  field,
  form,
  label = "",
  placeholder = "",
  disabled = false
}) => {
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = PHOTO_CATEGORY_OPTIONS.find(
    (option) => option.value === value
  );

  const handleSelectdOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };

    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label>{label}</Label>}

      <Select
        id={name}
        {...field}
        onChange={handleSelectdOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={PHOTO_CATEGORY_OPTIONS}
        value={selectedOption}
        className={showError ? "is-invalid" : ""}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default SelectField;
