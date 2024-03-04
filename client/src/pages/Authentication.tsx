import React from "react";
import { Link, useSearchParams } from "react-router-dom";
const Authentication = () => {

    const [searchParams] = useSearchParams();

    const isLogin = searchParams.get("mode") === "login";

    return (
        <div className="bg-zinc-900 w-screen h-screen">
            <h1>
                {isLogin ? "Login" : "Sign Up"}
            </h1>
            HEllo
            <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>Login</Link>
        </div>);
};

export default Authentication;
