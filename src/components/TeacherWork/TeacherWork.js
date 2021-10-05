import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './TeacherWork.css';

const TeacherWork = () => {
    const [teacherWork, setTeacherWork] = useState([])
    useEffect(() => {
        fetch("https://mocki.io/v1/90ed5498-c40b-4ded-b381-047e1e90063d")
        .then(res => res.json())
        .then(data => setTeacherWork(data))
    },[])
    return (
        <div>
            <div className="header-block">
                    <Button variant="primary" size="sm" className="header-btn">
                        Create Post
                    </Button>
            </div>
            <h1 className="title">  Teahcer Access Site </h1>
            {
                teacherWork.map(tw => <div className="teacher-work-block">
                    <h4>Author: {tw.teacher_name}</h4>
                    <h6>Post Title: {tw.posts_title}</h6>
                    <p>Description: {tw.description}</p>
                    <strong>Total posts: {tw.total_posts}, Total Reviews: {tw.total_review}</strong>
                </div>)
            }
        </div>
    );
};

export default TeacherWork;