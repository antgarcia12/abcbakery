import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './ContactSection.css';

const ContactSection = (props) => {
    return (
        <div className="contactPage">
            <div className="storeHours">
                <h3>Bakerty Hours</h3>
                <p>Monday-Sunday</p>
                <p>7AM-6PM</p>
                <p>Sunday</p>
                <p>9AM-3PM</p>

                <h4>Contact Us</h4>
                <h4>505-255-5080</h4>
            </div>
            <div className="contactForm">
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="firstName">First Name</Label>
                                <Input type="name" name="first" id="firstName" placeholder="First Name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input type="lastName" name="last" id="lastName" placeholder="Last Name" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="phoneNumber">Phone Number</Label>
                                <Input type="numbers" name="phone" id="phoneNumber" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleDate">When do you need it by?</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                        />
                    </FormGroup>
                    <br></br>
                    <Button>Submit</Button>
                </Form>
            </div>
        </div>
    );
}


export default ContactSection;