import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        if (error.status === 401) {
            // ...
        }
        else if (error.status === 404) {
            // ...
        }

        return (
            <div id="error-page">
                <h1>Oops! {error.status}</h1>
                <p>{error.statusText}</p>
                {error.data?.message && (
                    <p>
                        <i>{error.data.message}</i>
                    </p>
                )}
            </div>
        );
    } else if (error instanceof Error) {
        return (
            <div id="error-page">
                <h1>Oops! An unexpected error has occurred.</h1>
                <Link to=".">Click here to go back</Link>
                <p>We are so sorry. Please remain calm. ignore the jargon below it is not for you to worry about okay.  </p>
                <p>
                    <i>{error.message}</i>
                </p>
            </div>
        );
    } else {
        return <></>;
    }
}