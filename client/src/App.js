import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

import * as userServices from './components/Services/authService';

import Details from './components/Details/Details';
import EditDestination from './components/EditDestination/EditDestination';
import Logout from './components/Logout/Logout';
import ErrorPage from './components/ErrorPage/ErrorPage';



function App() {

  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});

  useEffect(() => {
      let user = userServices.getUser();

      setUserInfo({
        isAuthenticated: Boolean(user),
        user: user
      })
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username
    });
  };

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null
    })
  };

  return (
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
        <Route path="/contact" component={Contact} />
        <Route path="/addDestination" component={CreateDestination} />
        <Route path='/login' component={Login} onLogin={onLogin} />
        <Route path='/register' component={Register} />
        <Demo path='/demo' component={Demo} />
        <Route path="/logout" component={Logout} onLogout={onLogout} />
        <Route path="/places" component={Places} />
        <Route path='*' component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
