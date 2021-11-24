import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import * as service from '../Services/data';

const Details = ({
    match
}) => {
    
    const [destination, setDestination] = useState({});

    useEffect(() => {
        service.getOne(match.params.id)
        .then(result => setDestination(result))
    }, []);

    const onDelete = () => {
        console.log("delete");
        Redirect(`/destination/${destination._id}`)
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
            <button onClick={onDelete} href="" className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Delete</button>
        </div>
    </section>
    );
};

export default Details;