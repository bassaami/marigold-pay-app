import { createBrowserRouter } from "react-router";
import HmeLayout from "../Layout/HmeLayout";
import AuthLayout from "../Layout/AuthLayout";
import RSignUP from "../Paggges/RSignUP";
import SignIN from "../Paggges/SignIN";
import MyProfile from "../Paggges/MyProfile";
import Hooome from "../Paggges/Hooome";
import PrivateRoute from "./PrivateRoute";
import ErrLay from "../Layout/ErrLay";
import BillPage from "../Paggges/BillPage";
import BillDetails from "../Paggges/BillDetails";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HmeLayout,
            errorElement: <PrivateRoute><ErrLay></ErrLay></PrivateRoute>,
            children: [
                {
                    path: "/",
                    element: <Hooome></Hooome>,
                },
                {
                    path: "/bills",
                    element: <PrivateRoute><BillPage></BillPage> </PrivateRoute>,
                    loader: () => fetch("/billdata.json"),

                },
                {
                    path: "bill-details/:id",
                    element: <PrivateRoute><BillDetails /></PrivateRoute> ,
                    loader: () => fetch("/billdata.json"), // Or your API
                },
                {
                    path: "/profile",
                    element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
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