import React from "react";
import { Form, Field } from "react-final-form";
import TextFieldForm from "../TextFieldForm";
import PaperDefault from "../PaperDefault/PaperDefault";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.id) {
    errors.id = "Required";
  }
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};

const FormHeroEdit = () => (
  <PaperDefault>
    <Form
      onSubmit={onSubmit}
      initialValues={{ employed: true, stooge: "larry" }}
      validate={validate}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="id" component={TextFieldForm} type="text" label="Id" />
          </div>
          <div>
            <Field
              name="name"
              component={TextFieldForm}
              type="text"
              label="Name"
            />
          </div>
          <div>
            <Field
              name="description"
              component={TextFieldForm}
              type="text"
              label="description"
            />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Salvar
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={submitting || pristine}
            >
              Cancelar
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </PaperDefault>
);

export default FormHeroEdit;
