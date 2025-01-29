import { Link, useRouteError } from "react-router-dom";

export default function ProfilesError() {
    const error = useRouteError();

    return (
        <div className="profiles-error">
            <h2>ERROR!</h2>
            <p>{error.message}</p>
            <Link to="/profiles">Go back!</Link>
        </div>
    )
}