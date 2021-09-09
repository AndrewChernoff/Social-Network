import s from './../Validation/FormControl.module.css'

export const Form = (Element) => {
     const FormElelment = ({ input, meta, ...props }) => {
        let hasError = meta.error && meta.touched 
        return (
            <div>
                <Element className={hasError && s.formControl} {...input} {...props} type="text"/>
                {hasError && <span className={s.errorSpan}>{meta.error}</span>}
            </div>
        )
    }
    return FormElelment
}



 export const Textarea = Form('textarea');
 export const Input = Form('input');