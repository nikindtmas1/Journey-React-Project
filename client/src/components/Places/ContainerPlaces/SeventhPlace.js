import { useState, useEffect, useContext } from 'react';
import { Link ,useRouteMatch } from 'react-router-dom';

import AuthCxt from '../../../contexts/AuthCxt';
import PlaceItem from '../PlaceItem/PlaceItem';
import * as antarticaService from '../../Services/antarticaData';
import NoPlace from '../PlaceItem/NoPlace';


const SeventhPlace = () => {
  const [places, setPlaces] = useState([]);
  let path = useRouteMatch();

  const value = useContext(AuthCxt);
  let user = value.user.user;

  useEffect(() => {
      antarticaService.getAll()
      .then(result => setPlaces(result))
  }, []);

  let loggedInUser = (
    <Link to={`/demo${path.path}`}className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
  );

    return (
        <div className="tab-pane fade show active" id="7a">
          <h3 className="tm-recommended-title">Antartica</h3>
          {user
            ? loggedInUser
            : null
          }

              <div className="tm-recommended-place-wrap">

                {places.length > 0
                ? places.map(x => <PlaceItem key={x._id} place={x} />)
                : <NoPlace key="0000000"/>
                }
                {/* <div className="tm-recommended-place">
                  <img src="/img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Antartica Resort</h3>
                    <p className="tm-text-highlight">Ant City One</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$770</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Pulvinar Semper</h3>
                    <p className="tm-text-highlight">Ant City Two</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$230</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Cras vel sapien</h3>
                    <p className="tm-text-highlight">Ant City Three</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$140</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div>

                <div className="tm-recommended-place">
                  <img src="/img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
                  <div className="tm-recommended-description-box">
                    <h3 className="tm-recommended-title">Nullam eget est</h3>
                    <p className="tm-text-highlight">Ant City Four</p>
                    <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
                  </div>
                  <a href="#" className="tm-recommended-price-box">
                    <p className="tm-recommended-price">$190</p>
                    <p className="tm-recommended-price-link">Continue Reading</p>
                  </a>
                </div> */}
              </div>
              {/* <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a> */}
            </div>
    );
};

export default SeventhPlace;