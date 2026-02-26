import { createBrowserRouter } from "react-router";
import HmeLayout from "../Layout/HmeLayout";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HmeLayout,
            
        },
       
        
    ]
);

export default router