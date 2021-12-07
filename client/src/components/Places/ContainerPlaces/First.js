import { useState, useEffect, useContext } from 'react';
import { Link ,useRouteMatch } from 'react-router-dom';

import AuthCxt from '../../../contexts/AuthCxt';
import PlaceItem from '../PlaceItem/PlaceItem';
import * as northAmericaService from '../../Services/northAmericaData';
import NoPlace from '../PlaceItem/NoPlace';

const FirstPlace = () => {

  const [places, setPlaces] = useState([]);
  let path = useRouteMatch();
  const value = useContext(AuthCxt);
  let user = value.user.user;

  useEffect(() => {
      northAmericaService.getAll()
      .then(result => setPlaces(result))
  }, []);

  let userLoggedIn = (
    <Link to={`/demo${path.path}`}className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
  );

  return (
    <div className="tab-pane fade show active"  id="1a">
          <h3 className="tm-recommended-title">North America</h3>
          {user
          ? userLoggedIn
          : null
          }
      <div className="tm-recommended-place-wrap">

                {places.length > 0
                ? places.map(x => <PlaceItem key={x._id} place={x} />)
                : <NoPlace key="0"/>
                }
        {/* <div className="tm-recommended-place">
          <img src="/img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
          <div className="tm-recommended-description-box">
            <h3 className="tm-recommended-title">North Garden Resort</h3>
            <p className="tm-text-highlight">One North</p>
            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
          </div>
          <a href="#" className="tm-recommended-price-box">
            <p className="tm-recommended-price">$110</p>
            <p className="tm-recommended-price-link">Continue Reading</p>
          </a>
        </div>

        <div className="tm-recommended-place">
          <img src="/img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
          <div className="tm-recommended-description-box">
            <h3 className="tm-recommended-title">Felis nec dignissim</h3>
            <p className="tm-text-highlight">Two North</p>
            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
          </div>
          <div id="preload-hover-img"></div>
          <a href="#" className="tm-recommended-price-box">
            <p className="tm-recommended-price">$120</p>
            <p className="tm-recommended-price-link">Continue Reading</p>
          </a>
        </div>

        <div className="tm-recommended-place">
          <img src="/img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
          <div className="tm-recommended-description-box">
            <h3 className="tm-recommended-title">Sed fermentum justo</h3>
            <p className="tm-text-highlight">Three North</p>
            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
          </div>
          <a href="#" className="tm-recommended-price-box">
            <p className="tm-recommended-price">$130</p>
            <p className="tm-recommended-price-link">Continue Reading</p>
          </a>
        </div>

        <div className="tm-recommended-place">
          <img src="/img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
          <div className="tm-recommended-description-box">
            <h3 className="tm-recommended-title">Maecenas ultricies neque</h3>
            <p className="tm-text-highlight">Four North</p>
            <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
          </div>
          <a href="#" className="tm-recommended-price-box">
            <p className="tm-recommended-price">$140</p>
            <p className="tm-recommended-price-link">Continue Reading</p>
          </a>
        </div> */}
      </div>

      {/* <a href="#" className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Show More Places</a> */}
    </div>
  );
}

export default FirstPlace;