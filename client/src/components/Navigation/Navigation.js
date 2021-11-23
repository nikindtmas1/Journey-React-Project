import { Link } from 'react-router-dom';

const Navigation = ({
    isAuthenticated,
    user
}) => {

    let guestNavigation = (
        <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/destination">Destinations</Link>
                                </li>
                              
                                <li className="nav-item">
                                    <Link className="nav-link" to="/places">Recommended Places</Link>
                                </li>
                               
                                <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
    );

    let userNavigation = (
        
        <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/destination">Destinations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addDestination">Add Destinations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/places">Recommended Places</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/logout">Logout</Link>
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
                        <Link className="navbar-brand mr-auto" to="/">
                            <img src="img/logo.png" alt="Site logo" />
                            Journey
                        </Link>
                        <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {isAuthenticated
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