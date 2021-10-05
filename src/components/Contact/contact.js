import React from 'react';
import { Form } from 'react-bootstrap';
import './contact.css';

const contact = () => {
    return (
        <div >
            <h2 className="contact-header">Stay With Us</h2>
            <div className="contact-form">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>write your thoughts</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default contact;