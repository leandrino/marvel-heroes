import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import TextFieldForm from "../TextFieldForm";
import Button from "@material-ui/core/Button/Button";

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

const FormHeroEdit = ({ hero }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={hero}
    validate={validate}
    render={({ handleSubmit, reset, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div style={{ width: "300px" }}>
          <Field
            fullWidth
            name="id"
            component={TextFieldForm}
            type="text"
            label="Id"
          />
        </div>
        <div style={{ width: "300px" }}>
          <Field
            name="name"
            component={TextFieldForm}
            type="text"
            label="Name"
            fullWidth
          />
        </div>
        <div style={{ width: "300px" }}>
          <Field
            name="description"
            component={TextFieldForm}
            type="text"
            label="description"
            fullWidth
          />
        </div>
        <div style={{ width: "300px" }}>
          <Button type="submit" disabled={submitting || pristine}>
            Save
          </Button>
        </div>
      </form>
    )}
  />
);

const mapStateToProps = state => ({
  hero: state.heroes.hero
});

export default connect(mapStateToProps)(FormHeroEdit);
