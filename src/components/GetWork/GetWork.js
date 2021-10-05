import React from 'react';
import './GetWork.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetWork = () => {
    return (
        <div className="work-thumb">
            <h1>Do you work with us?</h1>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Send us your Resume</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <div className="dept-selection">
                <Form.Select aria-label="Default select example">
                    <option>Select Country</option>
                    <option value="1">Bangladesh </option>
                    <option value="2">India</option>
                    <option value="3">USA</option>
                </Form.Select>
            </div>
            <Link to="/work-info">
                <Button className="work-btn" variant="primary">Submit</Button>
            </Link>
        </div>
    );
};

export default GetWork;