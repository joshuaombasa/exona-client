import { Link } from "react-router-dom";


export default function About() {
    return (
        <div className="about-page">
            <div className="about-page-container width">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <h4>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</h4>
                <div className="cta">
                    <h2>Your destination is waiting.</h2>
                    <h2>Your van is ready.</h2>
                    <Link>Explore our vans</Link>
                </div>
            </div>
        </div>
    )
}