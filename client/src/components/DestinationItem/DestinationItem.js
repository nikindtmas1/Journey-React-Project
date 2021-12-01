import { Link } from 'react-router-dom';
import { useState } from 'react';


const DestinationItem = ({
    destination,
}) => {
    const [count, setCount] = useState(0);


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
                <Link to={`/journey/destinations/${destination._id}`} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</Link>
                <button
                    type='button'
                    onClick={() => setCount((count) => count + 1)}
                >Likes  {count}</button>
            </div>
        </section>
    );
};

export default DestinationItem;