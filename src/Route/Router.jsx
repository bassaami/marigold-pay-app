import { createBrowserRouter } from "react-router";
import HmeLayout from "../Layout/HmeLayout";
import AuthLayout from "../Layout/AuthLayout";
import RSignUP from "../Paggges/RSignUP";
import SignIN from "../Paggges/SignIN";
import MyProfile from "../Paggges/MyProfile";
import Hooome from "../Paggges/Hooome";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HmeLayout,
            children: [
                {
                    path: "/",
                    element: <Hooome></Hooome>
                },
                {
                    path: "/profile",
                    element: <MyProfile></MyProfile>
                },
            ]
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