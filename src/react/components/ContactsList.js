import React from 'react';

import { Card, CardHeader, CardBody, Col, Row} from 'reactstrap';

const ContactsList = ({contacts}) => {
    return (
        <Card className="mt-5 mb-5">
            <CardHeader>Contacts List</CardHeader>
            <CardBody>
            <Row className="m-2"><Col className="text-center">Name</Col><Col className="text-center">Email</Col><Col className="text-center">Mobile</Col><Col className="text-center">Address</Col></Row>
                { contacts.length > 0 && contacts.map(({name, email, mobile, address}, index) => (
                    <Row className="mb-4" key={index}><Col className="text-center">{name}</Col><Col className="text-center">{email}</Col><Col className="text-center">{mobile}</Col><Col className="text-center">{address}</Col></Row>
                )) }
            </CardBody>
        </Card>
    )
}

export default ContactsList;