import { useState, useEffect, useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import AuthCxt from '../../../contexts/AuthCxt';
import PlaceItem from '../PlaceItem/PlaceItem';
import * as asiasService from '../../Services/asiasData';

import NoPlace from '../PlaceItem/NoPlace';

const FourtPlace = ({
  match
}) => {

  const [places, setPlaces] = useState([]);
  let path = useRouteMatch();
  const value = useContext(AuthCxt);
  let user = value.user.user;

  useEffect(() => {
    asiasService.getAll()
      .then(result => setPlaces(result))
      .catch(err => alert(err.message))
  }, []);

  let loggedInUser = (
    <Link to={`/demo${path.path}`} className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
  );

  return (
    <div className="tab-pane fade show active" id="4a">
      <h3 className="tm-recommended-title">Asia</h3>

      {user
        ? loggedInUser
        : null
      }
      <div className="tm-recommended-place-wrap">

        {places.length > 0
          ? places.map(x => <PlaceItem key={x._id} place={x} />)
          : <NoPlace key="0000" />
        }
      </div>
    </div>
  );

}
export default FourtPlace;