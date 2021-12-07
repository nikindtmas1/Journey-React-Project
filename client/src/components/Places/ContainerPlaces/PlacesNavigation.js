
import { NavLink, useRouteMatch } from 'react-router-dom';

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
              <NavLink  to={`${url}/place1a`} data-toggle="tab" onClick={() => {}} className="tm-tab-link">
                <img src="/img/north-america.png" alt="" className="img-fluid" />
                North America
              </NavLink>
            </li>
            <li className="tm-tab-link-li">
              <NavLink to={`${url}/place2a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/south-america.png" alt="" className="img-fluid" />
                South America
              </NavLink>
            </li>
            <li className="tm-tab-link-li">
              <NavLink to={`${url}/place3a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/europe.png" alt="" className="img-fluid" />
                Europe
              </NavLink>
            </li>
            <li className="tm-tab-link-li">
              <NavLink  to={`${url}/place4a`} data-toggle="tab" className="tm-tab-link" >
                <img src="/img/asia.png" alt="" className="img-fluid" />
                Asia
              </NavLink>
            </li>
            <li className="tm-tab-link-li">
              <NavLink to={`${url}/place5a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/africa.png" alt="" className="img-fluid" />
                Africa
              </NavLink>
            </li>
            <li className="tm-tab-link-li">
              <NavLink to={`${url}/place6a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/australia.png" alt="" className="img-fluid" />
                Australia
              </NavLink>
            </li>
            <li className="tm-tab-link-li">
              <NavLink to={`${url}/place7a`} data-toggle="tab" className="tm-tab-link">
                <img src="/img/antartica.png" alt="" className="img-fluid" />
                Antartica
              </NavLink>
            </li>
          </ul>
    );
};

export default PlacesNavigation;