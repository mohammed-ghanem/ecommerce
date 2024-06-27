import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import ErrorPage from "@pages/ErrorPage";
import MainLayOut from "@layouts/mainLayOut/MainLayOut";
// to protect profile page
import ProtectedRoute from "@components/auth/ProtectedRoute";
// lazy load
const Home = lazy(() => import("@pages/Home"));
const WishList = lazy(() => import("@pages/WishList"));
const Categories = lazy(() => import("@pages/Categories"));
const Cart = lazy(() => import("@pages/Cart"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Profile = lazy(() => import("@pages/Profile"))




const router = createBrowserRouter([{
    path: '/',
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: (
                <Suspense fallback="loading please wait..">
                    <Home />
                </Suspense>
            )
        },
        {
            path: 'cart',
            element: (
                <Suspense fallback="loading please wait..">
                    <Cart />
                </Suspense>
            )
        },
        {
            path: 'wishlist',
            element: (
                <Suspense fallback="loading please wait..">
                    <WishList />
                </Suspense>
            )
        },
        {
            path: "categories",
            element: (
                <Suspense fallback="loading please wait..">
                    <Categories />
                </Suspense>
            )
        },
        {
            path: "categories/products/:prefix",
            element: (
                <Suspense fallback="loading please wait..">
                    <Products />
                </Suspense>
            ),
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
            element: (
                <Suspense fallback="loading please wait..">
                    <AboutUs />
                </Suspense>
            )
        },
        {
            path: "login",
            element: (
                <Suspense fallback="loading please wait..">
                    <Login />
                </Suspense>
            )
        },
        {
            path: "register",
            element: (
                <Suspense fallback="loading please wait..">
                    <Register />
                </Suspense>
            )
        },
        {
            path: "profile",
            element: (
                <ProtectedRoute>
                    <Suspense fallback="loading please wait..">
                        <Profile />
                    </Suspense>
                </ProtectedRoute>

            )
        },

    ]
}])


export const AppRouter = () => {

    return (
        <RouterProvider router={router} />
    )
}
