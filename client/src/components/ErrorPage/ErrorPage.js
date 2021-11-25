import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div >
            <h1>Error Page</h1>
            <Link to='/'><h3>Go to home page</h3></Link>
        </div>
    );
};

export default ErrorPage;