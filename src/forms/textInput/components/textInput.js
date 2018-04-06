import React from 'react'
import { Field } from 'redux-form'

const TextInputComponent = ({
  input, label, type, meta: { touched, error, warning }
}) => (
  <div>
    <label htmlFor={input.name}>{label}
      <input {...input} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </label>
  </div>
)

const TextInput = ({ name, label }) => (
  <Field
    name={name}
    label={label}
    component={TextInputComponent}
    type="text"
  />
)


export default TextInput
