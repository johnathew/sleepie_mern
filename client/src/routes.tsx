import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/ui/RootLayout";
import Home from "./pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "signup",
                element: <div>Signup</div>,
            },
            {
                path: "login",
                element: <div>Login</div>,
            },
            {
                path: "cart",
                element: <div>Cart</div>,
            },
        ],
    },
]);
export function Router() {
    return <RouterProvider router={router} />

}
