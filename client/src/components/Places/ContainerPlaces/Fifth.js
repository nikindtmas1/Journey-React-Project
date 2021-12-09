import { useState, useEffect, useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import AuthCxt from '../../../contexts/AuthCxt';
import * as africaService from '../../Services/africaData';
import PlaceItem from '../PlaceItem/PlaceItem';

import NoPlace from '../PlaceItem/NoPlace';

const FifthPlace = () => {

  const value = useContext(AuthCxt);
  let user = value.user.user;

  let path = useRouteMatch();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    africaService.getAll()
      .then(result => setPlaces(result))
      .catch(err => alert(err.message))
  }, []);

  let loggedInUser = (
    <Link to={`/demo${path.path}`} className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
  );

  return (
    <div className="tab-pane fade show active" id="5a">
      <h3 className="tm-recommended-title">Africa</h3>
      {user
        ? loggedInUser
        : null
      }
      <div className="tm-recommended-place-wrap">

        {places.length > 0
          ? places.map(x => <PlaceItem key={x._id} place={x} />)
          : <NoPlace key="00000" />
        }
      </div>
    </div>
  );
};

export default FifthPlace;