import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthCxt from './contexts/AuthCxt';

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Places from "./components/Places/Places";
import Destination from "./components/TopDestination/TopDestination";
import CreateDestination from './components/CreateDestination/CreateDestination';
import Login from './components/Login/Login';
import Register from './components/Registration/Registration';
import Demo from './components/Places/ContainerPlaces/Demo';
import AfricaPlaceDetails from './components/Places/PlacesDetails/AfricaPlaceDetails';
import AsiaPlaceDetails from './components/Places/PlacesDetails/AsiaPlaceDetails';
import EuropePlacesDetails from './components/Places/PlacesDetails/EuropePlaceDetails';
import SouthAmericaDetails from './components/Places/PlacesDetails/SouthAmericaDetails';
import NorthAmericaDetails from './components/Places/PlacesDetails/NorthAmericaDetails';
import AustraliaDetails from './components/Places/PlacesDetails/AustraliaDetails';
import AntarticaDetails from './components/Places/PlacesDetails/AntarticaPlaceDetails';


import * as userServices from './components/Services/authService';

import Details from './components/Details/Details';
import EditDestination from './components/EditDestination/EditDestination';
import EditPlace from './components/Places/EditPlace/EditPlace';
import Logout from './components/Logout/Logout';
//import Logout from './components/Services/data';
import ErrorPage from './components/ErrorPage/ErrorPage';



function App() {

  let path = useRouteMatch();
  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: '', userId: ''});

  useEffect(() => {
      let userData = userServices.getUser();
      let user = userData.username;
      let id = userData.userId;
      

      setUserInfo({
        isAuthenticated: Boolean(user),
        user: user,
        userId: id,
      })
  }, []);

  // const onLogin = (username) => {
  //   setUserInfo({
  //     isAuthenticated: true,
  //     user: username
  //   });
  // };

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null,
      userId: null
    })
  
  };


  return (
    <AuthCxt.Provider value={{user: userInfo}}>
      <div className="tm-main-content" id="top">
        <div className="tm-top-bar-bg"></div>
        <Navigation {...userInfo} />

        <div className="tm-page-wrap mx-auto">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/destination" component={Destination} />
            <Route path="/journey/destinations/:id" component={Details} />
            <Route path="/edit/:id" component={EditDestination} />
            <Route path={`/editPlace${path.path}`} component={EditPlace} />
            <Route path="/contact" component={Contact} />
            <Route path={`/demo${path.path}`} component={Demo} />
            <Route path="/addDestination" component={CreateDestination} />
            <Route path='/login'><Login ></Login></Route> 
            {/* onLogin={onLogin} */}
            <Route path='/register' component={Register} />
            {/* <Demo path='/demo' component={Demo} /> */}
            <Route path="/logout" ><Logout onLogout={onLogout}></Logout></Route>
            <Route path="/places" component={Places} />
            <Route path={`/journey/africas/:id`} component={AfricaPlaceDetails} />
            <Route path={`/journey/asias/:id`} component={AsiaPlaceDetails} />
            <Route path={`/journey/places/place3a/:id`} component={EuropePlacesDetails} />
            <Route path={`/journey/southAmericas/:id`} component={SouthAmericaDetails} />
            <Route path={`/journey/northAmericas/:id`} component={NorthAmericaDetails} />
            <Route path={`/journey/australias/:id`} component={AustraliaDetails} />
            <Route path={`/journey/antarticas/:id`} component={AntarticaDetails} />
            <Route path='*' component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </div>
    </AuthCxt.Provider>
  );
}

export default App;
