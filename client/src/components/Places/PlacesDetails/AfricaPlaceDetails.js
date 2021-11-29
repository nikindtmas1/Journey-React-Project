import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as africaServices from '../../Services/africaData';

const PlaceDetails = ({
  match
}) => {
  let history = useHistory();

    const [currentPlace, setCurrentPlace] = useState([]);

    useEffect(() => {
      africaServices.getOne(match.params.id)
      .then(result => setCurrentPlace(result))
    },[]);

    const onDelete = async (e) => {
      e.preventDefault();
      await africaServices.deleteDestination(match.params.id)
    //await service.deleteDestination(match.params.id)

      history.push('/places/place5a');
  };

    return (
        <div className="tm-recommended-place">

            <img src={currentPlace.imgUrl} alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">{currentPlace.title}</h3>
              <p className="tm-text-highlight">{currentPlace.highlight}</p>
              <p className="tm-text-gray">{currentPlace.gray}</p>
            <Link to={`/demo`} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Edit</Link>
            <Link onClick={onDelete} to={``} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Delete</Link>
            </div>
            <Link to={`/places/place5a`} className="tm-recommended-price-box">
              <p className="tm-recommended-price">{currentPlace.price}</p>
              <p className="tm-recommended-price-link">Back to places page</p>
            </Link>
          </div>
    );
};

export default PlaceDetails;