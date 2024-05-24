import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
import MainLayOut from '@layouts/mainLayOut/MainLayOut';
import Login from '@pages/Login';
import Register from '@pages/Register';
import ErrorPage from '@pages/ErrorPage';


const router = createBrowserRouter([{
    path: '/',
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "categories",
            element: <Categories />,
        },
        {
            path: "products/:prefix",
            element: <Products />,
            loader: ({ params }) => {
                if (
                    typeof params.prefix !== "string" ||
                    !/^[a-z]+$/i.test(params.prefix)
                ) {
                    throw new Response("Bad Request", {
                        statusText: "Category not found",
                        status: 400,
                    });
                }
                return true;
            },
        },
        {
            path: "about-us",
            element: <AboutUs />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        },

    ]
}])


export const AppRouter = () => {

    return (
        <RouterProvider router={router} />
    )
}