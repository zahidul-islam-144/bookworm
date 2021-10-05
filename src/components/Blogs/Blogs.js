import React, { useEffect, useState } from 'react';
import { Container, Stack } from 'react-bootstrap';
import './Blog.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect( ()=> {
        fetch("https://mocki.io/v1/e2109edd-39cf-45af-9b54-f03bfc4f1bb7")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div>
            <Container>
                {
                   blogs.map(blog => <Stack gap={3} className="stack-container">
                        <div className="bg-light border blog-stack">
                            <h1>{blog.blog_title}</h1>
                           <h3> {blog.author}</h3>
                            <p>{blog.description}</p>
                            <strong>Likes:{blog.likes}, Dislikes:{blog.dislikes}</strong>
                        </div>
                   </Stack>)
                }
            </Container>
        </div>
    );
};

export default Blogs;

