import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthCxt from '../../contexts/AuthCxt';
import * as service from '../Services/data';

const Details = ({
    match
}) => {

    let history = useHistory();
    const value = useContext(AuthCxt);
    let userId = value.user.userId;

    const [destination, setDestination] = useState({});


    useEffect(() => {
        service.getOne(match.params.id)
            .then(result => setDestination(result))
            .catch(err => alert(err.message))
    }, [match.params.id]);

    const onDelete = async (e) => {
        e.preventDefault();
        try {
            await service.deleteDestination(match.params.id)

            history.push('/destination');

        } catch (error) {
            alert(error.message)
            throw error
        }

    };

    let ownId = destination.ownId;

    let isOwner = false;

    if (userId === ownId) {
        isOwner = true;
    };


    let ownerButtons = (
        <>
            <Link to={`/edit/${destination._id}`} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Edit</Link>
            <Link onClick={onDelete} to="" className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Delete</Link>
        </>
    );



    return (
        <section className="tm-slideshow-section">
            <div className="tm-slideshow">
                <img src={`${destination.imgOne}`} alt="" />
                <img src={`${destination.imgTwo}`} alt="" />
                <img src={`${destination.imgThree}`} alt="" />
            </div>
            <div className="tm-slideshow-description tm-bg-primary">
                <h2 className="">{destination.name}</h2>
                <p>{destination.description}</p>
                {isOwner
                    ? ownerButtons
                    : null
                }
                <Link to={`/destination`} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Back</Link>
            </div>
        </section>
    );
};

export default Details;