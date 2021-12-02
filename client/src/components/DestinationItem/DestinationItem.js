import { Link, useHistory } from 'react-router-dom';

import { useState } from 'react';
import * as destinationService from '../Services/data';

const DestinationItem = ({
    destination,
   
}) => {


    const history = useHistory()
    
    const { name, description, imgOne, imgTwo, imgThree, likes } = destination;

    const [count, setCount] = useState(likes);
    
    let counterLikes = (e) => {
        e.preventDefault()
           setCount((count) => count + 1)
       
        editLikes()
     }

     function editLikes(){
        let data = { name, description, imgOne, imgTwo, imgThree, likes: count };
        destinationService.edit(destination._id, data)
        .then(history.push('/destination'))
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
                <Link to={`/journey/destinations/${destination._id}`} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Continue Reading</Link>
                <button
                    type='button'
                    onClick={counterLikes}
                >Likes  {count}</button>
            </div>
        </section>
    );
};

export default DestinationItem;