import React, { use, useState } from 'react';
import { AuthContext } from '../ProViderr/AuthenPro';
import UpdateProfileForm from '../Layout/UpdateProfileForm'; // Import the new component

const MyProfile = () => {

const { usser } = use(AuthContext);
const [editMode, setEditMode] = useState(false); // State to toggle form

    return (
        <div className='flex flex-col items-center my-4' >
            <img src={usser?.photoURL} alt="me" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', border: '5px solid green' }} />
            <div className="font-bold text-2xl my-3">{ usser.displayName ? usser.displayName : usser.email} </div>
            <div className="font-bold text-xl my-3">{usser?.email} </div>
            {/* Toggle Button / Form */}
            {!editMode ? (
                <button 
                    onClick={() => setEditMode(true)}
                    className="px-6 py-2 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-amber-900 active:scale-95 transition"
                >
                    Update Information
                </button>
            ) : (
                <UpdateProfileForm setEditMode={setEditMode} />
            )}
        </div>
    );
};

export default MyProfile;