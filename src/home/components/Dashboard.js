
import React, { Component } from "react";
import {
  Container, Jumbotron
} from "reactstrap";


class Dashboard extends Component {
   componentDidCatch(error, errorInfo){
      console.warn(error);
   }
  render(){
    return (
    <Container>
      <Jumbotron>
        <h3 className="display-3">Micro Front End</h3>
        <p className="lead">Micro-frontend architecture is a design approach in which a front-end app is decomposed into individual, semi-independent “microapps” working loosely together. The micro-frontend concept is vaguely inspired by, and named after, microservices. ... Independent development teams can collaborate on a front-end app more easily.</p>
        <hr className="my-2" />
        <p className="lead">This app is built using SingleSpa using React  JS & Angular JS </p>
      </Jumbotron>
    </Container>)
  }
}

export default Dashboard;