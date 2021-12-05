import { useState, useEffect, useContext } from 'react';
import { Link, useRouteMatch} from 'react-router-dom';

import * as placeService from '../../Services/placesData';

import AuthCxt from '../../../contexts/AuthCxt';
import PlaceItem from '../PlaceItem/PlaceItem';

import NoPlace from '../PlaceItem/NoPlace';

const ThirdPlace = ({
  match
}) => {
    
    const [places, setPlaces] = useState([]);
    let path = useRouteMatch();
    const value = useContext(AuthCxt);
    let user = value.user.user;


    useEffect(() => {
       placeService.getAll(match.path)
       .then(result => setPlaces(result));
    }, []);

    let loggedInUser = (
      <Link to={`/demo${path.path}`}className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
    );

    return (
        <div className="tab-pane fade show active" id="3a">
          <h3>Europe</h3>

          {user
            ? loggedInUser
            : null
          }
        <div className="tm-recommended-place-wrap">

              {places.length > 0
                ? places.map(x => <PlaceItem key={x._id} place={x} />)
                : <NoPlace key="000"/>
                }

          
        </div>

        
      </div>
    );
};

export default ThirdPlace;