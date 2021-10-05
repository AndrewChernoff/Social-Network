import { Field } from 'react-final-form'
import s from './../Validation/FormControl.module.css'

export const Form = (Element) => {
    const FormElelment = ({ input, meta, ...props }) => {
        let hasError = meta.error && meta.touched
        return (
            <div>
                <Element className={hasError ? s.formControl : undefined} {...input} {...props} />
                {hasError && <span className={s.errorSpan}>{meta.error}</span>}
            </div>
        )
    }
    return FormElelment
}

export const Textarea = Form('textarea');
export const Input = Form('input');

export const createForm = (name, component, placeholder, validate, type, wrighting) => {
    return <div>
        <Field name={name} component={component} placeholder={placeholder} validate={validate} type={type} /> {wrighting}
    </div>
}

export const createProfileForm = (name, component, placeholder, validate, type, defaultValue) => {
    return <div>
        <Field name={name} component={component} placeholder={placeholder} validate={validate} type={type} defaultValue={defaultValue} />
    </div>
}