import { useHistory } from 'react-router-dom';

import * as userService from '../Services/data';

const Register = () => {
    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);
        let username = formData.get('username').trim();
        let password = formData.get('password').trim();
        let rePass = formData.get('rePassword').trim();

        if (username === '' || password === '' || rePass === '') {
            return alert("All fields are required!");
        }

        if (password !== rePass) {
            return alert("Password and rePassword must be equal!");
        }

        if (username.length < 3) {
            return alert("Username input is invalid!");
        }

        userService.register(username, password)
            .then(history.push('/login'))
            .catch(err => {
                alert(err.message);
                throw err
            })

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
                    <input type="text" id="login" className="fadeIn second" name="username" placeholder="username" />
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