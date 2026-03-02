import React, { use } from 'react';
import { AuthContext } from '../ProViderr/AuthenPro';

const MyProfile = () => {

const { usser } = use(AuthContext);

    return (
        <div className='flex flex-col items-center my-4' >
            <img src={usser?.photoURL} alt="me" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', border: '5px solid green' }} />
            <div className="font-bold text-2xl my-3">{usser.displayName ? usser.displayName : usser.email} </div>
            <div className="font-bold text-xl my-3">{usser?.email} </div>
        </div>
    );
};

export default MyProfile;