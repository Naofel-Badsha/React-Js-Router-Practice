import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    


    return (
        <div className='container mx-auto mt-10 mb-10 border p-5'>
            <h1>Post Id: {post.id}</h1>
            <h1>Post Title: {post.title}</h1>
            <p>Post Details: {post.body}</p>
           
           <button onClick={() => navigate(-1)} className='btn'>Go Back</button>
        </div>
    );
};

export default PostDetails;