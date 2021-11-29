import { useState, useEffect } from 'react';

import * as europeServices from '../../Services/placesData';

const PlaceDetails = ({
  match
}) => {

    const [currentPlace, setCurrentPlace] = useState([]);
    let url = '/places/place3a'

    useEffect(() => {
      europeServices.getOne(match.params.id, url)
      .then(result => setCurrentPlace(result))
    },[]);
    return (
        <div className="tm-recommended-place">
            <img src={currentPlace.imgUrl} alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">{currentPlace.title}</h3>
              <p className="tm-text-highlight">{currentPlace.highlight}</p>
              <p className="tm-text-gray">{currentPlace.gray}</p>
            </div>
            <a href={`/places`} className="tm-recommended-price-box">
              {/* <p className="tm-recommended-price">{currentPlace.price}</p> */}
              <p className="tm-recommended-price-link">Back to places page</p>
            </a>
          </div>
    );
};

export default PlaceDetails;