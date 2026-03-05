import React, { use } from 'react';
import { AuthContext } from '../ProViderr/AuthenPro';

const UpdateProfileForm = ({ setEditMode }) => {
    const { usser, updateUser, setUser } = use(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                // Update local context state so the UI reflects changes immediately
                setUser({ ...usser, displayName: name, photoURL: photo });
                setEditMode(false); // Close the form
            })
            .catch((error) => {
                console.error("Update failed:", error.message);
            });
    };

    return (
        <form onSubmit={handleUpdate} className="flex flex-col gap-4 w-full max-w-sm mt-4 p-4 border rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-xl font-bold text-center">Update Profile</h3>
            
            <div className="flex flex-col">
                <label className="font-medium text-gray-700">Name</label>
                <input name="name" type="text" defaultValue={usser?.displayName} className="input border-2 p-2 rounded-md" required />
            </div>

            <div className="flex flex-col">
                <label className="font-medium text-gray-700">Photo URL</label>
                <input name="photo" type="text" defaultValue={usser?.photoURL} className="input border-2 p-2 rounded-md" required />
            </div>

            <div className="flex gap-2">
                <button type="submit" className="flex-1 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition">
                    Save Changes
                </button>
                <button type="button" onClick={() => setEditMode(false)} className="flex-1 py-2 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-500 transition">
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default UpdateProfileForm;