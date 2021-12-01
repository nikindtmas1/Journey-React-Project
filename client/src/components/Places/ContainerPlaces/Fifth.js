import { useState, useEffect}  from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import * as africaService from '../../Services/africaData';
import PlaceItem from '../PlaceItem/PlaceItem';

const FifthPlace = () => {

  let path = useRouteMatch();
 
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    africaService.getAll()
    .then(result => setPlaces(result))
  },[]);

    return (
        <div className="tab-pane fade show active" id="5a">
          <h3>Africa</h3>
            <Link to={`/demo${path.path}`} className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
              <div className="tm-recommended-place-wrap">

                {places.map(x => <PlaceItem key={x._id} place={x} />)}
                {/* <div className="tm-recommended-place">
                  <img src="/img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Africa Resort Hotel</h3>
                    <p className="tm-text-highlight">First City</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$550</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Aenean ac magna diam</h3>
                    <p className="tm-text-highlight">Second City</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$560</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Beach Barbecue Sunset</h3>
                    <p className="tm-text-highlight">Third City</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$570</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                    <p className="tm-text-highlight">Fourth City</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$580</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div> */}
              </div>

              
            </div>
    );
};

export default FifthPlace;