import React, { use } from 'react';
import PostDetails from './PostDetails';
import SinglePost from './SinglePost';

const Posts = ({postsPromise}) => {
const posts = use(postsPromise)


    return (
        <div className='container mx-auto mt-10 mb-10'>
            <h1>pstes Data</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    posts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Posts;