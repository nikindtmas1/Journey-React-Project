import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import * as authService from '../Services/authService';
import * as authService from '../Services/data';
import AuthCxt from '../../contexts/AuthCxt';

const Logout = ({
    
}) => {

  let history = useHistory();
  const value = useContext(AuthCxt);
  let user = value.user.user;

  useEffect(() => {
    authService.logout(user.accessToken)
    .then(() => {

      history.push('/')
    })
  },[]);
  
    // return (
    //   <Link to='/' replace={history.push('/')} />
    // );
    return null;
};

export default Logout;