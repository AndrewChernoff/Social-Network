import { Field, Form } from "react-final-form"
import { Input } from "../../Validation/FormControl";
import { required } from "../../Validation/validator";

const Login = (props) => {
let onSubmit = () => {
    console.log('sup');
}


    return <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <Field name="email" component={Input} placeholder="email" validate={required} />
                </div>

                <div>
                    <Field name="password" component={Input} placeholder="password" validate={required}/>
                </div>
                
                <div>                   
                    <Field name="rememberMe" component="input" type="checkbox" placeholder="First Name" /> remember me
                </div>
                <button type="submit">Login</button>
            </form>
        )}
    />
}
export default Login