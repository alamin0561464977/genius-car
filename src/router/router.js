import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../pases/CheckOut/CheckOut/CheckOut";
import Home from "../pases/Home/Home";
import Order from "../pases/Orders/Orders";
import SignIn from "../pases/SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import PrivetRouter from "./PrivetRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/check-out/:id',
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <PrivetRouter><CheckOut></CheckOut></PrivetRouter>,
            },
            {
                path: '/oderSamar',
                element: <PrivetRouter><Order></Order></PrivetRouter>,
            }
        ]
    }
])