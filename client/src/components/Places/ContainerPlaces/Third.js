import { useState, useEffect } from 'react';
import * as placeService from '../../Services/placesData';

import PlaceItem from '../PlaceItem/PlaceItem';


const ThirdPlace = ({
  match
}) => {
    
    const [places, setPlaces] = useState([]);

    useEffect(() => {
       placeService.getAll(match.path)
       .then(result => setPlaces(result));
    }, []);

    return (
        <div className="tab-pane fade show active" id="3a">

        <div className="tm-recommended-place-wrap">

          {places.map(x => <PlaceItem key={x._id} place={x}/>)}

          {/* <div className="tm-recommended-place">
            <img src="/img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">Europe Hotel</h3>
              <p className="tm-text-highlight">Venecia, Italy</p>
              <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
            </div>
            <a href="#" className="tm-recommended-price-box">
              <p className="tm-recommended-price">$330</p>
              <p className="tm-recommended-price-link">Continue Reading</p>
            </a>
          </div>

          <div className="tm-recommended-place">
            <img src="/img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">In viverra enim turpis</h3>
              <p className="tm-text-highlight">Paris, France</p>
              <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
            </div>
            <a href="#" className="tm-recommended-price-box">
              <p className="tm-recommended-price">$340</p>
              <p className="tm-recommended-price-link">Continue Reading</p>
            </a>
          </div>

          <div className="tm-recommended-place">
            <img src="/img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">Volutpat pellentesque</h3>
              <p className="tm-text-highlight">Barcelona, Spain</p>
              <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
            </div>
            <a href="#" className="tm-recommended-price-box">
              <p className="tm-recommended-price">$350</p>
              <p className="tm-recommended-price-link">Continue Reading</p>
            </a>
          </div>

          <div className="tm-recommended-place">
            <img src="/img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
              <p className="tm-text-highlight">Istanbul, Turkey</p>
              <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
            </div>
            <a href="#" className="tm-recommended-price-box">
              <p className="tm-recommended-price">$360</p>
              <p className="tm-recommended-price-link">Continue Reading</p>
            </a>
          </div> */}
        </div>

        <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a>
      </div>
    );
};

export default ThirdPlace;