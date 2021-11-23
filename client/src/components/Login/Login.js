import * as userService from '../Services/authService';

const Login = ({
    history
}) => {

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get('name');
        let password = formData.get('password');

       userService.login(username);

        history.push('/');
    };
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <h2 className="active"> Sign In </h2>
                {/* <h2 className="inactive underlineHover">Sign Up </h2> */}


                <div className="fadeIn first">
                    <img src="/client/public/img/logo.png" id="icon" alt="User Icon" />
                </div>


                <form onSubmit={onSubmit} method="POST">
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
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