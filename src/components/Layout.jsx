import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className="outlet-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}