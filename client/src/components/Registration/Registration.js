
const Register = () => {
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                {/* <h2 className="active"> Sign Up </h2> */}
                <h2 className="inactive underlineHover">Sign Up </h2>


                <div className="fadeIn first">
                    <img src="/img/logo.png" id="icon" alt="User Icon" />
                </div>


                <form>
                    <input type="text" id="login" className="fadeIn second" name="register" placeholder="register" />
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