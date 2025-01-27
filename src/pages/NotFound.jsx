import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>fyranollfyra: Denna sidan finns inte g</h1>
            <p>
                Gå tillbaka till <Link to="/">Startsidan</Link>
            </p>
        </div>
    )
}

export default NotFound