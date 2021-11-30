import { Link, useHistory } from 'react-router-dom';
import * as authService from '../Services/authService';

const Logout = ({
    onLogout,
    
}) => {

  let history = useHistory();

    authService.logout();
    onLogout();
    history.push('/')
    // return (
    //   <Link to='/' replace={history.push('/')} />
    // );
};

export default Logout;