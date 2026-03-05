import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../ProViderr/AuthenPro'

const RSignUP = () => {

    let { createUser, setUser, updateUser, googleLogin } = use(AuthContext)
    let [nameErr, setNameErr] = useState("")
    let [passErr, setPassErr] = useState(""); // Add this line
    let navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        // console.log(e.target);
        let form = e.target
        let name = form.name.value
        let photo = form.photo.value
        let email = form.email.value
        let password = form.password.value
        // console.log({ name, photo, email, password });
// Reset errors at the start of every submission
    setNameErr("");
    setPassErr("");

        if (name.length < 5) {
            setNameErr("Name should be more than 5 character")
            return
        } else { setNameErr("") }
// Password Validation
    if (password.length < 6) {
        setPassErr("Password must be at least 6 characters long.");
        return;
    }
    if (!/[A-Z]/.test(password)) {
        setPassErr("Password must contain at least one uppercase letter.");
        return;
    }
    if (!/[a-z]/.test(password)) {
        setPassErr("Password must contain at least one lowercase letter.");
        return;
    }
    // If it passes all checks, proceed to create user
        createUser(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateUser({ displayName: name, photoURL: photo }).then(() => {
                // Profile updated!
                setUser({ ...user, displayName: name, photoURL: photo })
                navigate("/")
                // ...
            }).catch((error) => {
                // An error occurred
                setUser(user)
                console.log(error);
            });
            // ...
        }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setPassErr(error.message); // Optionally show Firebase errors here too
            // ..
        });
    }

    // --- New Google Handler ---
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                setUser(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    let card = "relative flex flex-col shadow-2xl rounded-2xl bg-base-100 w-full max-w-sm shrink-0"
    let cardBody = "flex flex-col p-6 gap-2"
    let fieldset = "flex flex-col space-y-2 border-none p-1 m-1"
    let label = "flex items-center justify-between text-xl font-medium text-gray-700 pt-2"
    let btnn = " py-2 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700  active:scale-95 mt-2"
    // Style for Google Button
    let googleBtn = "py-2 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-sm hover:bg-gray-100 active:scale-95 mt-4 flex items-center justify-center gap-2";


    return (
        <div className='flex justify-center min-h-[60%] items-center'>
            <div className={card}>
                <h2 className="font-semibold text-2xl text-center py-3">Register your account</h2>

                <form onSubmit={handleRegister} className={cardBody}>
                    < fieldset className={fieldset}>
                        {/* name */}
                        <label className={label}>Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" />
                        {nameErr && <p className="text-red-500"> {nameErr}   </p>}
                        {/* URL */}
                        <label className={label}>Photo</label>
                        <input name='photo' type="link" className="input" placeholder="Photo URL" />
                        {/* email */}
                        <label className={label}>Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />


                        <label className={label}>Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
{/* Add the error message display here */}
{passErr && <p className="text-red-500 text-sm mt-1">{passErr}</p>}

                        <button type='submit' className={btnn}>Sign Up</button>

                        {/* --- Google Login Button --- */}
                        <div className="divider text-sm text-gray-400 text-center my-2">OR</div>
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className={googleBtn}
                        >
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" className="w-5 h-5" />
                            Continue with Google
                        </button>
                        <p className="font-semibold text-center pt-4">Already Have an Account?
                            <Link className='hover:text-blue-700 text-amber-800' to="/authen/login"> Login</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RSignUP;