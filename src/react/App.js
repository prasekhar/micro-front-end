import React from "react";
import {
  Container, Alert, Card
} from "reactstrap";

import Contact from './components/Contact';

const Root = ({}) => {
    
  return (
    <Container>
      <Card className="mt-5">
        <Alert color="success" fade={false} className="mb-0">
            Hello..! I am loaded from React JS.
        </Alert>
        <Contact/>>
      </Card>
       
    </Container>
  );
};
export default Root;