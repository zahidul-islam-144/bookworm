import React from 'react';
import './StudentWork.css';
import { useEffect, useState } from 'react';

const StudentWork = () => {
    const [stuData, setStuData] = useState([])
    useEffect( ()=>{
        fetch("https://mocki.io/v1/e531e7d4-f0bb-465d-b054-3ad900909add")
        .then(res => res.json())
        .then(data => setStuData(data))
    },[])
    return (
        <div>
            <h1 className="title">See other student's question and given answer</h1>
            {
                stuData.map(sd => <div className="student-work-block">
                    <h4>Topic Name: {sd.topic_name}</h4>
                    <h6>Question: {sd.question}</h6>
                    <p><strong>Answer:</strong> {sd.answer}</p>
                    <strong><p>Likes: {sd.likes}, Dislieks: {sd.dislikes}, Comments: {sd.comments}</p></strong>
                </div>)
            }
        </div>
    );
};

export default StudentWork;