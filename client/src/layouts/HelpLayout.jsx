import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h2>Vad behöver du hjälp med?</h2>
            <p>
                Hitta en lösning
            </p>
            <nav className="help-layout__nav">
                <NavLink className="help-layout__nav__link" to="faq">Läs FAQ</NavLink>
                <NavLink className="help-layout__nav__link" to="contact">Kontakta oss</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default HelpLayout