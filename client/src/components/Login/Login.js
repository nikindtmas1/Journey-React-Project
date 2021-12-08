import { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import * as userService from '../Services/data';

import AuthCxt from '../../contexts/AuthCxt';

const Login = () => {
    
    const {onLogin} = useContext(AuthCxt);

    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let username = formData.get('username').trim();
        let password = formData.get('password').trim();


        if(username === '' || password === ''){
            return alert("All fields are required!");
        }
        
        if(username.length < 3){
            return alert("Username input is invalid!");
        }
        
       userService.login(username, password)
       .then(logData => {
           console.log(logData);
           onLogin(logData);
       })
       .catch(error => console.log(error))
       history.push('/');
    };

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <h2 className="active"> Sign In </h2>
           
                <div className="fadeIn first">
                    <img src="/img/logo.png" id="icon" alt="User Icon" />
                </div>


                <form onSubmit={onSubmit} method="POST">
                    <div>
                        <input type="text" id="login" className="fadeIn second" name="username" placeholder="login" />
                    </div>
                    <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>


                <div id="formFooter">
                    <a className="underlineHover" href="/register">Do not have registration?</a>
                </div>

            </div>
        </div>
    );
};

export default Login;