import { useState, useEffect, useContext } from 'react';
import { Link ,useRouteMatch } from 'react-router-dom';

import AuthCxt from '../../../contexts/AuthCxt';
import PlaceItem from '../PlaceItem/PlaceItem';
import * as australiaService from '../../Services/australiaData';
import NoPlace from '../PlaceItem/NoPlace';

const SixthPlace = () => {

  const value = useContext(AuthCxt);
  let user = value.user.user;

  const [places, setPlaces] = useState([]);
  let path = useRouteMatch();

  useEffect(() => {
      australiaService.getAll()
      .then(result => setPlaces(result))
  }, []);

  let loggedInUser = (
    <Link to={`/demo${path.path}`}className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
  );

    return (
        <div className="tab-pane fade show active" id="6a">
          <h3 className="tm-recommended-title">Australia</h3>

          {user
            ? loggedInUser
            : null
          }

              <div className="tm-recommended-place-wrap">

                {places.length > 0
                ? places.map(x => <PlaceItem key={x._id} place={x} />)
                : <NoPlace key="000000"/>
                }
                {/* <div className="tm-recommended-place">
                  <img src="/img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Hotel Australia</h3>
                    <p className="tm-text-highlight">City One</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$660</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Proin interdum ullamcorper</h3>
                    <p className="tm-text-highlight">City Two</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$650</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Beach Barbecue Sunset</h3>
                    <p className="tm-text-highlight">City Three</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$640</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Grand Resort Pasha</h3>
                    <p className="tm-text-highlight">City Four</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$630</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div> */}
              </div>

              {/* <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a> */}
            </div>
    );
};

export default SixthPlace;