import { NavLink , Link} from "react-router-dom";


export default function Header() {
    return (
        <div className="header-container">
            <Link to="/" className="logo">exona</Link>
            <nav>
                <NavLink to='about'>About</NavLink>
                <NavLink to='properties'>properties</NavLink>
                <NavLink to='hosts'>hosts</NavLink>
                <NavLink to='login'>Login</NavLink>
            </nav>
        </div>
    )
}