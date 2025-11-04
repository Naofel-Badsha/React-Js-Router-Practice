import React from 'react';
import { Link, useNavigate } from 'react-router';


const SinglePost = ({ post }) => {
    const {id, title} = post;

//----Navigate----The----Spasic-----Page-------
const navigate = useNavigate(); 
const handleNavigate = () => {
    // navigate('/')
    navigate(`/posts/${id}`)
    console.log('Navigate The Home Page', navigate);
}


    return (
        <div className='border p-4'>
            <h1>Post Id: {id}</h1>
            <p>Post Title: {title}</p>
            <Link to={`/posts/${post.id}`}>
                <button className='bg-amber-500 px-4 py-2 text-white mt-5 cursor-pointer'>Post Details</button>
            </Link>
           {/*----------------------*/}
           <button onClick={handleNavigate} className='btn ml-2'>Details off: {id}</button>
        </div>
    );
};

export default SinglePost;