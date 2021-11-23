
const NotDestinations = () => {
    return (
        <section className="tm-slideshow-section">
        <div className="tm-slideshow">
            <img src="img/tm-img-01.jpg" alt="Image" />
            {/* <img src={destination.imgTwo} alt="Image" />
            <img src={destination.imgThree} alt="Image" />     */}
        </div>
        <div className="tm-slideshow-description tm-bg-primary">
            <h2 className="" >No destinations yet</h2>
        </div>
    </section>
    );
};

export default NotDestinations;