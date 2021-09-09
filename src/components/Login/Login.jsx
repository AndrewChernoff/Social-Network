import { Field, Form } from "react-final-form"
import { Input } from "../../Validation/FormControl";
import { required } from "../../Validation/validator";
import { connect } from 'react-redux';
import { loginUser } from "../../redux/authReducer";
import { Redirect } from 'react-router-dom'

const Login = (props) => {

    let onSubmit = (e) => {
        props.loginUser(e.email, e.password, e.rememberMe)
    }

    if (props.isAuth) return <Redirect to='/profile' />

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div>
                            <Field name="email" component={Input} placeholder="email" validate={required} />
                        </div>

                        <div>
                            <Field name="password" component={Input} placeholder="password" validate={required} />
                        </div>

                        <div>
                            <Field name="rememberMe" component="input" type="checkbox" placeholder="First Name" /> remember me
                        </div>
                        <button type="submit">Login</button>
                    </form>
                )}
            />

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.userAuth.isAuth
    }
}

const LoginContainer = connect(mapStateToProps, { loginUser })(Login)

export default LoginContainer
