
const DestinationItem = ({
    name,
    description,
    imgOne,
    imgTwo,
    imgThree
}) => {
    return (
        <section className="tm-slideshow-section">
        <div className="tm-slideshow">
            <img src="img/tm-img-01.jpg" alt="Image" />
            <img src="img/tm-img-02.jpg" alt="Image" />
            <img src="img/tm-img-03.jpg" alt="Image" />    
        </div>
        <div className="tm-slideshow-description tm-bg-primary">
            <h2 className="">Europe's most visited places</h2>
            <p>Aenean in lacus nec dolor fermentum congue. Maecenas ut velit pharetra, pharetra tortor sit amet, vulputate sem. Vestibulum mi nibh, faucibus ac eros id, sagittis tincidunt velit. Proin interdum ullamcorper faucibus. Ut mi nunc, sollicitudin non pulvinar id, sagittis eget diam.</p>
            <a href="#" className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</a>
        </div>
    </section>
    );
};

export default DestinationItem;