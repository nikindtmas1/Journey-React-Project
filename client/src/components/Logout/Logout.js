import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import * as authService from '../Services/authService';
import * as authService from '../Services/data';


const Logout = ({
    
}) => {

  let history = useHistory();

  useEffect(() => {
    authService.logout()
    .then(() => {

      history.push('/')
    })
  },[]);
  
    return null;
};

export default Logout;