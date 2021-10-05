import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './Tutorial.css';

const Tutorial = () => {
    const [tutorial, setTutorial] = useState([])
    useEffect(() => {
        fetch("https://mocki.io/v1/203edb89-ad79-4c43-a7b4-df4235027dc6")
        .then(res => res.json())
        .then(data => setTutorial(data))
    },[])
    return (
        <div>
            <Container>
                <h1 className="tutorial-header">Grave your desired course</h1>
                <div  className="tutorial-container">
                {
                    tutorial.map(course =><div>
                    <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={course.img} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                    <strong>{course.mentor}</strong>
                                    <p>Duration: {course.duration}, Rating: {course.rating}</p>
                                </Card.Text>
                                <Button variant="primary">Grab it</Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
                </div>

            </Container>
        </div>
    );
};

export default Tutorial;