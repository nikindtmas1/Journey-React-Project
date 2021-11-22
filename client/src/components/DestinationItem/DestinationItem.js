
const DestinationItem = ({
    destination 
}) => {
    return (
        <section className="tm-slideshow-section">
        <div className="tm-slideshow">
            <img src={destination.imgOne} alt="Image" />
            <img src={destination.imgTwo} alt="Image" />
            <img src={destination.imgThree} alt="Image" />    
        </div>
        <div className="tm-slideshow-description tm-bg-primary">
            <h2 className="">{destination.name}</h2>
            <p>{destination.description}</p>
            <a href="#" className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</a>
        </div>
    </section>
    );
};

export default DestinationItem;