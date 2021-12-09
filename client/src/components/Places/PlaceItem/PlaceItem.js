import { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import AuthCxt from '../../../contexts/AuthCxt';

const PlaceItem = ({
  place
}) => {

  const value = useContext(AuthCxt);
  let user = value.user.user;
  const path = useRouteMatch();

  let url = '/';

  if (path.path === '/places/place7a') {
    url = `/journey/antarticas/${place._id}`
  } else if (path.path === '/places/place6a') {
    url = `/journey/australias/${place._id}`
  } else if (path.path === '/places/place5a') {
    url = `/journey/africas/${place._id}`
  } else if (path.path === '/places/place4a') {
    url = `/journey/asias/${place._id}`
  } else if (path.path === '/places/place3a') {
    url = `/journey/places/place3a/${place._id}`
  } else if (path.path === '/places/place2a') {
    url = `/journey/southAmericas/${place._id}`
  } else if (path.path === '/places/place1a') {
    url = `/journey/northAmericas/${place._id}`
  }


  let userButtons = (
    <Link to={`${url}`} className="tm-recommended-price-box">
      <p className="tm-recommended-price">{place.price}</p>
      <p className="tm-recommended-price-link">Continue Reading</p>
    </Link>
  );

  let guestButtons = (

    <div className="tm-recommended-price-box">
      <p className="tm-recommended-price">{place.price}</p>
    </div>

  );

  return (

    <div className="tm-recommended-place">
      <img src={place.imgUrl} alt="" className="img-fluid tm-recommended-img" />
      <div className="tm-recommended-description-box">
        <h3 className="tm-recommended-title">{place.title}</h3>
        <p className="tm-text-highlight">{place.highlight}</p>
        <p className="tm-text-gray">{place.gray}</p>
      </div>
      {user
        ? userButtons
        : guestButtons
      }
    </div>
  );
};

export default PlaceItem;