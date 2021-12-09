import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthCxt from '../../../contexts/AuthCxt';
import * as asiaServices from '../../Services/asiasData';

const PlaceDetails = ({
  match
}) => {
  let history = useHistory();
  const value = useContext(AuthCxt);
  let userId = value.user.userId;

  const [currentPlace, setCurrentPlace] = useState([]);

  useEffect(() => {
    asiaServices.getOne(match.params.id)
      .then(result => setCurrentPlace(result))
      .catch(err => alert(err.message))
  }, [match.params.id]);

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      await asiaServices.deleteDestination(match.params.id);

      history.push('/places/place4a');

    } catch (error) {
      alert(error.message)
      throw error
    }

  };

  let ownId = currentPlace.ownId;
  let isOwner = false;

  if (userId === ownId) {
    isOwner = true;
  };

  let ownerButtons = (
    <>
      <Link to={`/editPlace/place4a/${match.params.id}`} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Edit</Link>
      <Link onClick={onDelete} to={``} className="text-uppercase tm-btn tm-btn-white tm-btn-white-primary">Delete</Link>
    </>
  );

  return (
    <div className="tm-recommended-place">
      <img src={currentPlace.imgUrl} alt="" className="img-fluid tm-recommended-img" />
      <div className="tm-recommended-description-box">
        <h3 className="tm-recommended-title">{currentPlace.title}</h3>
        <p className="tm-text-highlight">{currentPlace.highlight}</p>
        <p className="tm-text-gray">{currentPlace.gray}</p>
        {isOwner
          ? ownerButtons
          : null
        }
      </div>
      <Link to={`/places/place4a`} className="tm-recommended-price-box">
        <p className="tm-recommended-price">{currentPlace.price}</p>
        <p className="tm-recommended-price-link">Back to places page</p>
      </Link>
    </div>
  );
};

export default PlaceDetails;