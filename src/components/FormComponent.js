import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import UserValidation from "../validations/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => {
  return (
    <Row className="">
      <Col md="12">
        <Label htmlFor="{input}" className="col form-label">
          {label}
        </Label>
      </Col>
      <Col md="12">
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          className="bg-dark text-light"
        ></Input>
        {touched &&
          ((error && <p style={{ color: "red", marginTop: 5 }}>{error}</p>) ||
            (warning && (
              <p style={{ color: "yellow", marginTop: 5 }}>{warning}</p>
            )))}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.users.getUsersDetail.name,
      age: state.users.getUsersDetail.age,
      address: state.users.getUsersDetail.address,
    },
  };
};

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md="6">
            <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Name :"
              />
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="6">
            <FormGroup>
              <Field
                type="number"
                name="age"
                component={renderField}
                label="Age :"
              />
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="6">
            <FormGroup>
              <Field
                type="text"
                name="address"
                component={renderField}
                label="Address :"
              />
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                type="submit"
                name="submit"
                disabled={this.props.submitting}
                color="dark"
                className="mt-2"
              >
                <FontAwesomeIcon icon={faSave} /> Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
