
import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  Button
} from "reactstrap";

import { connect } from 'react-redux';
import { object, string } from "yup";
import { useFormik } from "formik";

import { addContact } from '../redux/actions/contacts';
import { sendEvent } from '../redux/actions/events';

import ContactsList from './ContactsList';

const validationSchema = object({
  name: string().required("Name is required"),
  email: string().required("Email is required")
  .email("Invalid email address"),
  mobile: string()
    .required("Mobile number is required")
    .min(10, "Invalid mobile number")
    .max(10, "Invalid mobile number"),
  address: string().required("Address is required")
  .min(12, "Address must be greater than 12 characters")
});

const ContactUs = ({contacts, addContact, sendEvent}) => {
  const onSubmit = values => { 
    addContact({...values}); 
    resetForm();
    sendEvent({name: 'contactAdded', data : {...values}})
  }; 

  const handleReset = () => { resetForm(); };
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    address: ""
  }; 

  const {
    handleSubmit,
    touched,
    errors,
    getFieldProps,
    resetForm
  } = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true, 
    handleReset
  }); 

  return (
    <>
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card className="mt-5">
            <CardHeader>Add Contact</CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input type="text" name="name" id="name" {...getFieldProps("name")}
                  invalid={touched.name && errors.name ? true : false}/>
                  {touched.name && errors.name ? (
                  <FormFeedback className="ml-1 mt-2">
                    {errors.name}
                  </FormFeedback>
                ) : null}
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="email" name="email" id="email" {...getFieldProps("email")}
                  invalid={touched.email && errors.email ? true : false}/>
                  {touched.email && errors.email ? (
                  <FormFeedback className="ml-1 mt-2">
                    {errors.email}
                  </FormFeedback>
                ) : null}
                </FormGroup>
                <FormGroup>
                  <Label>Mobile</Label>
                  <Input type="text" name="mobile" id="mobile" {...getFieldProps("mobile")}
                  invalid={touched.mobile && errors.mobile ? true : false}/>
                  {touched.mobile && errors.mobile ? (
                  <FormFeedback className="ml-1 mt-2">
                    {errors.mobile}
                  </FormFeedback>
                ) : null}
                </FormGroup>
                <FormGroup>
                  <Label>Address</Label>
                  <Input type="text" name="address" id="address" {...getFieldProps("address")}
                  invalid={touched.address && errors.address ? true : false}/>
                  {touched.address && errors.address ? (
                  <FormFeedback className="ml-1 mt-2">
                    {errors.address}
                  </FormFeedback>
                ) : null}
                </FormGroup>
                <Button color="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
          <ContactsList contacts={contacts}/>
    </Container>
    </>
  );
};

const mapStateToProps = ({
  contactsReducer: { contacts}
}) => ({
  contacts
});

const mapDispatchToProps = {
  addContact: contact => addContact(contact),
  sendEvent: event => sendEvent(event)
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
