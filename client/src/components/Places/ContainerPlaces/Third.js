import { useState, useEffect } from 'react';
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

    return (
        <div className="tab-pane fade show active" id="3a">

        <div className="tm-recommended-place-wrap">

          {places.map(x => <PlaceItem key={x._id} place={x}/>)}

          
        </div>

        {/* <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a> */}
      </div>
    );
};

export default ThirdPlace;