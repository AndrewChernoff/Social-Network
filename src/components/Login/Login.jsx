import { Form } from "react-final-form"
import { Input } from "../../Validation/FormControl";
import { required } from "../../Validation/validator";
import { connect } from 'react-redux';
import { loginUser } from "../../redux/authReducer";
import { Redirect } from 'react-router-dom'
import s from '../Login/Login.module.css';
import { createForm } from "../../Validation/FormControl";

const Login = (props) => {
    let onSubmit = (e) => {
        debugger
        props.loginUser(e.email, e.password, e.rememberMe, e.captcha)
    }

    if (props.isAuth) return <Redirect to='/profile' />

    let wrongLogin = props.isWrongLogin

    return (
        <div className={s.wrapper}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>

                        {createForm('email', Input, 'email', required, null, null)}

                        {createForm('password', Input, 'password', required, 'password', null)}

                        {createForm('rememberMe', Input, null, null, 'checkbox', 'Remember me')}

                        <div className={s.btn}> <button type="submit">Login</button> </div>

                        {wrongLogin ? <div className={s.wrongLogin}> Wrong email or password </div> : undefined}


                        {props.captcha &&
                            <div className={s.captcha}>
                                <img src={props.captcha} alt='captcha' />
                                <div style={{ paddingLeft: 20 }}>
                                    {createForm('captcha', Input, 'Symbols from image', null, 'text', null)}
                                </div>
                            </div>}


                    </form>
                )}
            />

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth,
        isWrongLogin: state.userAuth.isWrongLogin,
        captcha: state.userAuth.captcha
    }
}

const LoginContainer = connect(mapStateToProps, { loginUser })(Login)

export default LoginContainer
