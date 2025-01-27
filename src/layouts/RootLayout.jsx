import { Outlet, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav className="navbar">
                    <img className="logo" src={logo} alt="Pokemon" />
                    <div className="nav-links">
                        <NavLink className="nav-link" to="/">
                            Cards
                        </NavLink>
                        <NavLink className="nav-link" to="checkout">
                            Checkout
                        </NavLink>
                        <NavLink className="nav-link" to="help">
                            Help
                        </NavLink>
                        <NavLink className="nav-link" to="profiles">
                            Profiles
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
