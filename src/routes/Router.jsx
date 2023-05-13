import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";
import Error from "../components/Pages/Error/Error";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
            {
                path: '*',
                element: <Error />
            }
        ]

    }
]);


export default router; 