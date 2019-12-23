
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
  Input,
  Label,
  Button
} from "reactstrap";

const ContactUs = () => {
  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card className="mt-5">
            <CardHeader>Contact Us</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label>Name</Label>
                  <Input type="text" name="name" id="name" />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="email" name="email" id="email" />
                </FormGroup>
                <FormGroup>
                  <Label>Mobile</Label>
                  <Input type="text" name="mobile" id="mobile" />
                </FormGroup>
                <FormGroup>
                  <Label>Address</Label>
                  <Input type="text" name="address" id="address" />
                </FormGroup>
                <Button color="primary" type="button">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
