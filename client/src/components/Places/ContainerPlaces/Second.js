import { useState, useEffect, useContext } from 'react';
import { Link ,useRouteMatch } from 'react-router-dom';

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
  }, []);

  let loggedInUser = (
    <Link to={`/demo${path.path}`}className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
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
                : <NoPlace key="00"/>
                }
                {/* <div className="tm-recommended-place">
                  <img src="/img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">South Resort Hotel</h3>
                    <p className="tm-text-highlight">South One</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$220</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Aenean ac ante nec diam</h3>
                    <p className="tm-text-highlight">South Second</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$230</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Suspendisse nec dapibus</h3>
                    <p className="tm-text-highlight">South Third</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$240</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Aliquam viverra mi at nisl</h3>
                    <p className="tm-text-highlight">South Fourth</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$250</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div> */}
              </div>

              {/* <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a> */}
            </div>
    );
};

export default SecondPlace;