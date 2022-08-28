import { NavLink } from "react-router-dom";
import '../navigation/styleNavigation.css'

const Navigation = () => {
    return (<nav className="nav">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/movies" className="link">Movies</NavLink>
    </nav>)
}

export default Navigation