import React, { Suspense, useState } from 'react';
import { Link, Navigate,  } from 'react-router';

import { useLocation } from 'react-router';
import UserSDetails2 from '../../Components/UserSDetails2/UserSDetails2';



const SingleUser = ({ user }) => {

    //-----Akey-----Page------A------Data-----Loding------
    const [showInfo, setShowInfo] = useState(false);

    //-------Navigate the Other Components-------
    const [visitHome, setVisitHome] = useState(false);
    if (visitHome) {
        return <Navigate to='/'></Navigate>
    }

   //--------Location---------Chacking------------
    const location = useLocation();
    console.log('now location now', location );





    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
        .then(res => res.json())

    return (
        <div className='p-4 border rounded-xl'>
            <h1>User Id: {user.id}</h1>
            <h1>Full Name: {user.name}</h1>
            <h2>Nick Name: {user.username}</h2>
            <p>Email: {user.email}</p>
            <Link to={`/users/${user.id}`}>
                <button className='btn bg-sky-600 text-white mt-5'>Show Details</button>
            </Link>

            {/*------Akey---Pages ea data Loading---Cliek The Button------*/}
            <button className='btn ml-2' onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide' : 'Show'} Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading..User--?</span>}>
                    <UserSDetails2 userPromise={userPromise}></UserSDetails2>
                </Suspense>
            }

            {/*------State-------chNges---Button----------*/}
            <button onClick={() => setVisitHome(true)} className='btn bg-sky-500 text-white ml-2'>Visit Home</button>
        </div>
    );
};

export default SingleUser;