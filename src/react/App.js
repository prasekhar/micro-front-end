import React from "react";
import {
  Container, Alert, Card
} from "reactstrap";

import { Provider } from 'react-redux';
import store from './redux';

import Contact from './components/Contact';
import EventDispatcher from './components/EventDispatcher';

const Root = ({}) => {
    
  return (
    <Provider store={store}>
    <Container>
      <Card className="mt-5">
        <Alert color="success" fade={false} className="mb-0">
            Hello..! I am loaded from React JS.
        </Alert>
        <Contact/>
      </Card>
       <EventDispatcher/>
    </Container>
  </Provider>
  );
};
export default Root;