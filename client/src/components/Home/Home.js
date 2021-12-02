import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import AuthCxt from "../../contexts/AuthCxt";

const Home = () => {

    const value = useContext(AuthCxt);
    let user = value.user.user;

    return (
        <>
        <section className="tm-banner">
                <div className="tm-container-outer tm-banner-bg">
                    <div className="container">

                        <div className="row tm-banner-row tm-banner-row-header">
                            <div className="col-xs-12">
                                <div className="tm-banner-header">
                                    <h1 className="text-uppercase tm-banner-title">Let's begin</h1>
                                    <img src="img/dots-3.png" alt="Dots" />
                                    <p className="tm-banner-subtitle">We assist you to choose the best.</p>
                                    <Link to="/destination" className="tm-down-arrow-link"><i className="fa fa-2x fa-angle-down tm-down-arrow"></i></Link>       
                                </div>    
                            </div>                        
                        </div> 
                        <div className="row tm-banner-row" id="tm-section-search">
                        
                        {user
                        ? <SearchBar />
                        : null
                        }
            
                        </div> 
                        <div className="tm-banner-overlay"></div>
                    </div>                     
                </div>                      
            </section>

            <section className="p-5 tm-container-outer tm-bg-gray">            
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 mx-auto tm-about-text-wrap text-center">                        
                            <h2 className="text-uppercase mb-4">Your <strong>Journey</strong> is our priority</h2>
                            <p className="mb-4">Nullam auctor, sapien sit amet lacinia euismod, lorem magna lobortis massa, in tincidunt mi metus quis lectus. Duis nec lobortis velit. Vivamus id magna vulputate, tempor ante eget, tempus augue. Maecenas ultricies neque magna.</p>
                            <Link to="/places" className="text-uppercase btn-primary tm-btn">Continue explore</Link>                              
                        </div>
                    </div>
                </div>            
            </section>
            </>
    );
};

export default Home;