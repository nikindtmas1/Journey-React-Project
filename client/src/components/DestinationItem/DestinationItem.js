import { Link } from 'react-router-dom';

const DestinationItem = ({
    destination,
    history,
    match 
}) => {

    // const onClick = (e) => {
    //     e.preventDefault();

    //     history.push(`/journey/destinations/${match.params.id}`)
    // };
   
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
            <Link  to={`/journey/destinations/${destination._id}`} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</Link>
        </div>
    </section>
    );
};

export default DestinationItem;