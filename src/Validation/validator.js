export const required = (value) => (value ? undefined : "Required");
export  const minValue = (min) => (value) =>
     value.length >= min ? undefined : `Should be greater than ${min}`;
export  const maxValue = (max) => (value) =>
     value.length < max ? undefined : `Should be less than ${max}`;

export  const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
