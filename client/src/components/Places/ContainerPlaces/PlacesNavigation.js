import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const PlacesNavigation = () => {

 //const [isActive, setActive] = useState(false)
  const { url } = useRouteMatch();



  
 
  // const toggleClass = () => {
  //   setActive(!isActive)
  // }
 
  //className={isActive ? "tm-tab-link" : "tm-tab-link active"} onClick={toggleClass}

  // useEffect(() => {
  
  //   return (
  //     setActive(isActive)
  //   )
  // }, [])

    return (
      
        <ul className="nav nav-pills tm-tabs-links">
            <li className="tm-tab-link-li">
              <Link  to={`${url}/place1a`} data-toggle="tab" onClick={() => {}} className="tm-tab-link">
                <img src="/img/north-america.png" alt="Image" className="img-fluid" />
                North America
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to={`${url}/place2a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/south-america.png" alt="Image" className="img-fluid" />
                South America
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to={`${url}/place3a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/europe.png" alt="Image" className="img-fluid" />
                Europe
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link  to={`${url}/place4a`} data-toggle="tab" className="tm-tab-link" >
                <img src="/img/asia.png" alt="Image" className="img-fluid" />
                Asia
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to={`${url}/place5a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/africa.png" alt="Image" className="img-fluid" />
                Africa
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to={`${url}/place6a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/australia.png" alt="Image" className="img-fluid" />
                Australia
              </Link>
            </li>
            <li className="tm-tab-link-li">
              <Link to={`${url}/place7a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/antartica.png" alt="Image" className="img-fluid" />
                Antartica
              </Link>
            </li>
          </ul>
    );
};

export default PlacesNavigation;