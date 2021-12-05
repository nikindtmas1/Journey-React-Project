import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="tm-container-outer">
        <p className="mb-0">Copyright © <span className="tm-current-year">2021</span> Nikolai Nikolaev 
            
        . Designed by <Link rel="nofollow" to="/" target="_parent">Template Mo</Link></p>
    </footer>
    );
};

export default Footer;