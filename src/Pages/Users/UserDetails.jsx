import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    return (
        <div className='container mx-auto mt-10 mb-10 border p-4'>
            <h2>User Details:{user.name} </h2>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
        </div>
    );
};

export default UserDetails;