import { useState, useEffect } from 'react';
import { Link, useRouteMatch} from 'react-router-dom';

import * as placeService from '../../Services/placesData';

import PlaceItem from '../PlaceItem/PlaceItem';


const ThirdPlace = ({
  match
}) => {
    
    const [places, setPlaces] = useState([]);
    // const lasturl = match.path.split('/')[2];
    // console.log(lasturl);

    useEffect(() => {
       placeService.getAll(match.path)
       .then(result => setPlaces(result));
    }, []);

let path = useRouteMatch();

    return (
        <div className="tab-pane fade show active" id="3a">
          <h3>Europe</h3>

          <Link to={`/demo${path.path}`} className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
        <div className="tm-recommended-place-wrap">

          {places.map(x => <PlaceItem key={x._id} place={x}/>)}

          
        </div>

        
      </div>
    );
};

export default ThirdPlace;