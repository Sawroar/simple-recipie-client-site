import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog";
import Home from "../../Pages/Home/Home";
import Recipie from "../../Pages/Home/Recipies/Recipie";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders";
import Error from "../../Pages/Shared/Error";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/signup',
                element: <SignUp></SignUp>
            }

            , {
                path: '/blog',
                element: <Blog></Blog>
            }, {
                path: '/recipie/:id',
                element: <PrivateRoute><Recipie></Recipie></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipies/${params.id}`)
            }, {
                path: '/orders',
                element: <Orders></Orders>
            }
        ]
    },
])

export default router;