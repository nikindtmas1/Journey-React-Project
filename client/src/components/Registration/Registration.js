import { useHistory } from 'react-router-dom';

import * as userService from '../Services/destinationService';

const Register = () => {
    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let username = formData.get('username');
        let password = formData.get('password');
        let rePass = formData.get('rePassword');

        if(password !== rePass){
            return history.push('/register');
        }

        userService.register({username, password})
        .then(history.push('/login'));

    };


    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                {/* <h2 className="active"> Sign Up </h2> */}
                <h2 className="inactive underlineHover">Sign Up </h2>


                <div className="fadeIn first">
                    <img src="/img/logo.png" id="icon" alt="User Icon" />
                </div>


                <form onSubmit={onSubmit}>
                    <input type="text" id="login" className="fadeIn second" name="username" placeholder="register" />
                    <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" />
                    <input type="text" id="password" className="fadeIn third" name="rePassword" placeholder="repete password" />
                    <input type="submit" className="fadeIn fourth" value="Sign Up" />
                </form>


                <div id="formFooter">
                    <a className="underlineHover" href="/login">Do you have registration?</a>
                </div>

            </div>
        </div>
    );
};

export default Register;