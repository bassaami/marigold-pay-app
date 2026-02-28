import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../ProViderr/AuthenPro';

const SignIN = () => {
    let [err, setErr] = useState("")

    let { LogIn } = use(AuthContext)

    let location = useLocation()
    // console.log(location);
    let navigate = useNavigate()

    let handleLogin = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        // console.log({ email, password });

        LogIn(email, password).then(result => {
            let user = result.user;
            console.log(user)
            navigate(`${location.state ? location.state : "/"}`)
        })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setErr(errorCode)
            });
    }

    let card = "relative flex flex-col shadow-2xl rounded-2xl bg-base-100 w-full max-w-sm shrink-0"
    let cardBody = "flex flex-col p-6 gap-2"
    let fieldset = "flex flex-col space-y-2 border-none p-1 m-1"
    let label = "flex items-center justify-between text-xl font-medium text-gray-700 pt-2"
    let btnn = " py-2 bg-amber-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700  active:scale-95 mt-2"

    return (
        <div className='flex justify-center  min-h-[60%] items-center'>
            <div className={card}>
                <h2 className="font-semibold text-2xl text-center py-5">Login your account</h2>
                <form onSubmit={handleLogin} className={cardBody}>
                    <fieldset className={fieldset}>
                        {/* email */}
                        <label className={label}>Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className={label}>Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        {err && <p className="text-red-500"> {err}   </p>}

                        <button type='submit' className={btnn}>Login</button>

                        <p className="font-semibold text-center pt-4">Don't Have an Account?
                            <Link className='hover:bg-blue-700 text-amber-800' to="/authen/signup"> Sign UP</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignIN;