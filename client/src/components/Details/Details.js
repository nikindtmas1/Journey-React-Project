import { useState, useEffect } from 'react';

import * as service from '../Services/data';

const Details = ({
    match,
    history
}) => {
    
    const [destination, setDestination] = useState({});

    useEffect(() => {
        service.getOne(match.params.id)
        .then(result => setDestination(result))
    }, []);

    const onDelete = async (e) => {
        e.preventDefault();
      await service.deleteDestination(match.params.id)

      history.push('/destination');
    }

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
            <a href={`/destination/${destination._id}`} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Edit</a>
            <a onClick={onDelete} href="" className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Delete</a>
        </div>
    </section>
    );
};

export default Details;