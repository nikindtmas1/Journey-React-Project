import { useState, useEffect } from 'react';
import { Link ,useRouteMatch } from 'react-router-dom';

import PlaceItem from '../PlaceItem/PlaceItem';
import * as asiasService from '../../Services/asiasData';

const FourtPlace = ({
  match
}) => {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
      asiasService.getAll()
      .then(result => setPlaces(result))
  }, []);
  let path = useRouteMatch();

 return (
        <div className="tab-pane fade show active" id="4a">
          <h3>Asia</h3>

          <Link to={`/demo${path.path}`}className="text-uppercase btn-primary tm-btn mx-auto tm-d-table">Create Place</Link>
        <div className="tm-recommended-place-wrap">

          {places.map(x => <PlaceItem key={x._id} place={x} />)}
          {/* <div className="tm-recommended-place">
            <img src="/img/tm-img-06.jpg" alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">Asia Resort Hotel</h3>
              <p className="tm-text-highlight">Singapore</p>
              <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
            </div>
            <a href="#" className="tm-recommended-price-box">
              <p className="tm-recommended-price">$440</p>
              <p className="tm-recommended-price-link">Continue Reading</p>
            </a>
          </div>

          <div className="tm-recommended-place">
            <img src="/img/tm-img-07.jpg" alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">Nullam eget est a nisl</h3>
              <p className="tm-text-highlight">Yangon, Myanmar</p>
              <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
            </div>
            <div id="preload-hover-img"></div>
            <a href="#" className="tm-recommended-price-box">
              <p className="tm-recommended-price">$450</p>
              <p className="tm-recommended-price-link">Continue Reading</p>
            </a>
          </div>

          <div className="tm-recommended-place">
            <img src="/img/tm-img-05.jpg" alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">Proin interdum ullamcorper</h3>
              <p className="tm-text-highlight">Bangkok, Thailand</p>
              <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
            </div>
            <a href="#" className="tm-recommended-price-box">
              <p className="tm-recommended-price">$460</p>
              <p className="tm-recommended-price-link">Continue Reading</p>
            </a>
          </div>

          <div className="tm-recommended-place">
            <img src="/img/tm-img-04.jpg" alt="Image" className="img-fluid tm-recommended-img" />
            <div className="tm-recommended-description-box">
              <h3 className="tm-recommended-title">Lorem ipsum dolor sit</h3>
              <p className="tm-text-highlight">Vientiane, Laos</p>
              <p className="tm-text-gray">Sed egestas, odio nec bibendum mattis, quam odio hendrerit risus, eu varius eros lacus sit amet lectus. Donec blandit luctus dictum...</p>
            </div>
            <a href="#" className="tm-recommended-price-box">
              <p className="tm-recommended-price">$470</p>
              <p className="tm-recommended-price-link">Continue Reading</p>
            </a>
          </div> */}
        </div>

        
      </div>
    );

  }
export default FourtPlace;