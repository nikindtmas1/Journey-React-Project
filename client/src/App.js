import { Route, Switch } from 'react-router-dom';
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

import * as userServices from './components/Services/authService';

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

  return (
    <div className="tm-main-content" id="top">
      <div className="tm-top-bar-bg"></div>
      <Navigation {...userInfo} />

      <div className="tm-page-wrap mx-auto">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/places" component={Places} />
        <Route path="/contact" component={Contact} />
        <Route path="/addDestination" component={CreateDestination} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
