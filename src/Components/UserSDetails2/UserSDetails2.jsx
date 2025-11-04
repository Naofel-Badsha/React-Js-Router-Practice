import React, { use } from 'react';

const UserSDetails2 = ({userPromise}) => {
    const user = use(userPromise);

    const {id, name} = user

    return (
        <div className='mt-5'>
            <p className='text-sm text-red-500'>User Id: {id}</p>
           <h1 className='text-xl text-sky-500'>User Name: {name}</h1>
        </div>
    );
};

export default UserSDetails2;