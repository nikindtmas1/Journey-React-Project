import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthCxt from '../../contexts/AuthCxt';

const Navigation = ({
   
}) => {

    const value = useContext(AuthCxt);
    let user = value.user.user;
    let isAuth = value.user.isAuthenticated
  
    let guestNavigation = (
        <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/destination">Destinations</NavLink>
                                </li>
                              
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/places">Recommended Places</NavLink>
                                </li>
                               
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>
                            </ul>
                        </div>
    );

    let userNavigation = (
        
        <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/destination">Destinations</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/addDestination">Create Destination</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/places">Recommended Places</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                </li>
                            </ul>
                            <span>Welcome: {user}</span>

                        </div>
    );

    return (
        <div className="tm-top-bar" id="tm-top-bar">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg narbar-light">
                        <NavLink className="navbar-brand mr-auto" to="/">
                            <img src="/img/logo.png" alt="Site logo" />
                            Journey
                        </NavLink>
                        <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {isAuth
                        ? userNavigation
                        : guestNavigation
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navigation;