import { Link } from 'react-router-dom';

const PlacesNavigation = () => {
    return (
        <ul className="nav nav-pills tm-tabs-links">
            <li className="tm-tab-link-li">
              <Link  to="/places/1a" data-toggle="tab" className="tm-tab-link">
                <img src="img/north-america.png" alt="Image" className="img-fluid" />
                North America
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to="/places/2a" data-toggle="tab" className="tm-tab-link">
                <img src="img/south-america.png" alt="Image" className="img-fluid" />
                South America
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to="/places/3a" data-toggle="tab" className="tm-tab-link">
                <img src="img/europe.png" alt="Image" className="img-fluid" />
                Europe
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to="/places/4a" data-toggle="tab" className="tm-tab-link active">
                <img src="img/asia.png" alt="Image" className="img-fluid" />
                Asia
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to="/places/5a" data-toggle="tab" className="tm-tab-link">
                <img src="img/africa.png" alt="Image" className="img-fluid" />
                Africa
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to="/places/6a" data-toggle="tab" className="tm-tab-link">
                <img src="img/australia.png" alt="Image" className="img-fluid" />
                Australia
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to="/places/7a" data-toggle="tab" className="tm-tab-link">
                <img src="img/antartica.png" alt="Image" className="img-fluid" />
                Antartica
              </Link>
            </li>
          </ul>
    );
};

export default PlacesNavigation;