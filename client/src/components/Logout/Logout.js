import { Link, useHistory } from 'react-router-dom';
//import * as authService from '../Services/authService';
import * as authService from '../Services/data';

const Logout = ({
    
}) => {

  let history = useHistory();

    authService.logout()
  
    history.push('/')
    // return (
    //   <Link to='/' replace={history.push('/')} />
    // );
};

export default Logout;