
import { Link, useHistory } from 'react-router-dom';

import { useState, useContext } from 'react';
import * as destinationService from '../Services/data';
import AuthCxt from '../../contexts/AuthCxt';

const DestinationItem = ({
    destination
}) => {

    const value = useContext(AuthCxt);
    let userId = value.user.userId;
    let user = value.user.user;


    const history = useHistory();

    const { name, description, imgOne, imgTwo, imgThree, ownId, likes } = destination;

    const [count, setCount] = useState(likes);
    const [counter, setCounter] = useState(0);

    let counterLikes = (e) => {
        e.preventDefault()
        if (user) {
            if (userId !== ownId) {

                if (counter < 1) {
                    setCounter((counter) => counter + 1);
                    setCount((count) => count + 1);
                    let newCount = count + 1;

                    let data = { name, description, imgOne, imgTwo, imgThree, ownId, likes: newCount };

                    destinationService.edit(destination._id, data)
                        .then(history.push('/destination'))
                        .catch(err => alert(err.message))
                }
            }
        }
    }


    return (
        <section className="tm-slideshow-section">
            <div className="tm-slideshow">
                <img src={destination.imgOne} alt="" />
                <img src={destination.imgTwo} alt="" />
                <img src={destination.imgThree} alt="" />
            </div>
            <div className="tm-slideshow-description tm-bg-primary">
                <h2 className="">{destination.name}</h2>
                <p>{destination.description}</p>
                <Link to={`/journey/destinations/${destination._id}`} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</Link>
                <hr />
                <div>
                    <button
                        type='button'
                        onClick={counterLikes} style={{ borderRadius: 6 }}
                    >Like</button>
                    <span>    Likes:  {count}</span>
                </div>

            </div>
        </section>
    );
};

export default DestinationItem;