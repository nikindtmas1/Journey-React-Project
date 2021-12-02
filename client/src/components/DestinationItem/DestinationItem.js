
import { Link, useHistory } from 'react-router-dom';

import { useState, useContext } from 'react';
import * as destinationService from '../Services/data';
import AuthCxt from '../../contexts/AuthCxt';

const DestinationItem = ({
    destination,
   
}) => {

    const value = useContext(AuthCxt);
    let userId = value.user.userId;

    const history = useHistory();
    
    const { name, description, imgOne, imgTwo, imgThree, ownId, likes } = destination;

    const [count, setCount] = useState(likes);
    
    
    let counterLikes = (e) => {
        e.preventDefault()
        if(userId !== ownId){

            setCount((count) => count + 1)
            
            let data = { name, description, imgOne, imgTwo, imgThree, ownId, likes: count };
            
             destinationService.edit(destination._id, data)
             .then(history.push('/destination'))
        }
       
     }
   
    
    //  function editLikes(){
    //     let data = { name, description, imgOne, imgTwo, imgThree, ownId, likes: count };
    //     console.log(destination._id);
        
    //      destinationService.edit(destination._id, data)
    //      .then(history.push('/destination'))
    //  }
    

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
                <hr/>
                <div>
                <button
                    type='button'
                    onClick={counterLikes} style={{borderRadius:6}}
                >Like</button>
                <span>    Likes:  {count}</span>
                </div>
                
            </div>
        </section>
    );
};

export default DestinationItem;