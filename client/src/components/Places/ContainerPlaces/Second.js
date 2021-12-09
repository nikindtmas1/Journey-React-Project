import { useState, useEffect, useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import AuthCxt from '../../../contexts/AuthCxt';
import PlaceItem from '../PlaceItem/PlaceItem';
import * as southAmericaService from '../../Services/southAmericaData';

import NoPlace from '../PlaceItem/NoPlace';

const SecondPlace = () => {

  const [places, setPlaces] = useState([]);
  let path = useRouteMatch();
  const value = useContext(AuthCxt);
  let user = value.user.user;

  useEffect(() => {
    southAmericaService.getAll()
      .then(result => setPlaces(result))
      .catch(err => alert(err.message))
  }, []);

  let loggedInUser = (
    <Link to={`/demo${path.path}`} className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
  );

  return (
    <div className="tab-pane fade show active" id="2a">
      <h3 className="tm-recommended-title">South America</h3>

      {user
        ? loggedInUser
        : null
      }
      <div className="tm-recommended-place-wrap">
        {places.length > 0
          ? places.map(x => <PlaceItem key={x._id} place={x} />)
          : <NoPlace key="00" />
        }
      </div>
    </div>
  );
};

export default SecondPlace;