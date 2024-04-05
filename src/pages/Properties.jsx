import propertyImage from '../assets/about.jpg'


export default function Properties() {

    const PropertyComponent = () => {
        return (
            <div className="property-component">
                <img src={propertyImage} alt="" />
                <div className="property-data">
                    <h3>Modest Explorer</h3>
                    <div className="price">
                        <h3>$60</h3>
                        <h4>/day</h4>
                    </div>
                </div>
                <span>Simple</span>
            </div>
        )
    }

    return (
        <div className="properties-page">
            <div className="properties-page-container width">
                <h1>Explore our van options</h1>
                <nav>
                    <button>Simple</button>
                    <button>Luxury</button>
                    <button>Rugged</button>
                    <button>Clear filters</button>
                </nav>
                <div className="property-list">
                    <PropertyComponent/>
                    <PropertyComponent/>
                    <PropertyComponent/>
                    <PropertyComponent/>
                    <PropertyComponent/>
                    <PropertyComponent/>
                </div>
            </div>
        </div>
    )
}