import { Link } from 'react-router-dom';
import * as authService from '../Services/authService';

const Logout = ({
    onLogout,
    history
}) => {

    authService.logout();
    onLogout();
    // history.push('/login')
    return (
      <Link to='/login' replace={history.push('/login')} />
    );
};

export default Logout;