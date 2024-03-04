import { Link } from "react-router-dom";


export default function NotFound({ type }: { type: string }) {
    return (
        <div id="error-page">
            <h1>I'm so sorry U.U</h1>
            <p>There are currently no {type} in stock. Please check back later. </p>
            <Link to='/'>Home</Link>
        </div>
    )
}