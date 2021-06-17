import React from 'react';
import { FastField, Form, Formik } from "formik";
import { Button, FormGroup, Label, Spinner } from "reactstrap";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import PhotoFormField from "custom-fields/PhotoFormField";
import * as Yup from "yup";

const PhotoForm = ({ onSubmit, initialValues, isAddMode }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),

    categoryId: Yup.number().required("This field is required").nullable(),

    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required"),
      otherwise: Yup.string().notRequired()
    })
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              disabled={false}
              label="Title"
              placeholder="owww,c chchch"
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="hihihihi"
            />

            <FastField name="photo" component={PhotoFormField} label="Photo" />

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? "Add to ablum" : "Update photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;
