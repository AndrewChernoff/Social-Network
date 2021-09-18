import { Field, Form } from "react-final-form"
import { Input } from "../../Validation/FormControl";
import { required } from "../../Validation/validator";
import { connect } from 'react-redux';
import { loginUser } from "../../redux/authReducer";
import { Redirect } from 'react-router-dom'
import s from '../../Validation/FormControl.module.css';
import { createForm } from "../../Validation/FormControl";

const Login = (props) => {
    let onSubmit = (e) => {
        props.loginUser(e.email, e.password, e.rememberMe)
    }

    if (props.isAuth) return <Redirect to='/profile' />

    let wrongLogin = props.isWrongLogin

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>

                        {createForm('email', Input, 'email', required, null, null)}

                        {createForm('password', Input, 'password', required, 'password', null)}

                        {createForm('rememberMe', Input, null, null, 'checkbox', 'remember me')}

                        {wrongLogin ? <div className={s.wrongLogin}> Wrong email or password </div> : undefined}

                        <button type="submit">Login</button>
                    </form>
                )}
            />

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth,
        isWrongLogin: state.userAuth.isWrongLogin
    }
}

const LoginContainer = connect(mapStateToProps, { loginUser })(Login)

export default LoginContainer
