import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/ui/RootLayout";
import Home from "./pages/Home";
import Bracelets from "./pages/Bracelets";
import { dehydrate } from "@tanstack/react-query";
import Bracelet from "./pages/Bracelet";
import Login from "./pages/Login";
import Error from "./components/Error";
import About from "./pages/About";
import Bookmarks from "./pages/Bookmarks";
import Necklaces from "./pages/Necklaces";
import Authentication from "./pages/Authentication";




const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="bracelets" element={<Bracelets />} />
        <Route path="/bracelets/:id" element={<Bracelet dehydratedState={dehydrate} />} errorElement={<Error />} />
        <Route path="necklaces" element={<Necklaces />} />
        <Route path="earrings" element={<div>Earrings</div>} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="keychains" element={<div>Keychains</div>} />
        <Route path="auth?mode=login" element={<Authentication />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<div>Cart</div>} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
    </Route>
));


export function Router() {




    return <RouterProvider router={router} />
}

