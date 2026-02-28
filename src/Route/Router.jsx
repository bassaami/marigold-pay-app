import { createBrowserRouter } from "react-router";
import HmeLayout from "../Layout/HmeLayout";
import AuthLayout from "../Layout/AuthLayout";
import RSignUP from "../Paggges/RSignUP";
import SignIN from "../Paggges/SignIN";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HmeLayout,
            
        },
        {
            path: "/authen",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/authen/login",
                    element: <SignIN></SignIN>
                },
                {
                    path: "/authen/signup",
                    element: <RSignUP></RSignUP>
                },
            ]
        },
       
        
    ]
);

export default router