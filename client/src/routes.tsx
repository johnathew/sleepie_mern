import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/ui/RootLayout";
import Home from "./pages/Home";
import Bracelets from "./pages/Bracelets";
import { dehydrate } from "@tanstack/react-query";
import Bracelet from "./pages/Bracelet";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home dehydratedState={dehydrate} />,
            },
            {
                path: "bracelets",
                element: <Bracelets />,
            },
            {
                path: "bracelets/:id",
                element: <Bracelet dehydratedState={dehydrate} />
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



// const fetchCharms = async () => {
//     try {
//         const response = await fetch("/api/charms", { method: "GET" })
//         const charms = await response.json()
//         return charms
//     } catch (error) {
//         console.error(error)
//         alert(error)
//     }
// }

// export async function preload() {
//     const queryClient = new QueryClient();
//     await queryClient.prefetchQuery({
//         queryKey: ["charms"],
//         queryFn: () => fetchCharms(),
//     });

//     return {
//         dehydratedState: dehydrate(queryClient),
//     };
// }