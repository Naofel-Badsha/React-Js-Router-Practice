import React from 'react';
import { useLoaderData } from 'react-router';
import SingleUser from './SingleUser';

const Users = () => {
    const users = useLoaderData()


    return (
        <div className='container mx-auto'>
            <h1>This is users pages </h1>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    users.map(user => <SingleUser key={user.id} user={user}></SingleUser>)
                }
            </div>
        </div>
    );
};

export default Users;