import { NavLink, Outlet } from "react-router-dom";



export default function HostLayout() {
    return (
        <div className="hostlayout-page">
            <div className="hostlayout-page-container width">
                <Outlet />
                <nav>
                    <NavLink to=".">Dashboard</NavLink>
                    <NavLink to="income">Income</NavLink>
                    <NavLink to="properties">Properties</NavLink>
                    <NavLink to="reviews">Reviews</NavLink>
                </nav>
            </div>
        </div>
    )
}