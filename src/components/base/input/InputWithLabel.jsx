import React from 'react'
import { Input } from 'antd'
import '../input/InputWithLabel.scss'
import '../../../assets/sass/textValidator.scss'
const InputWithLabel = ({label, id, errors, type, placeholder, name, register}) => {
  return (
        <div className="inputWithLabel">
          <label className="inputWithLabel-label" htmlFor={id}>
            {label}
          </label>
            <Input
            className='inputWithLabel-input'
              placeholder={placeholder}
              type={type}
              id={id}
              status={errors[name] && 'error'}
              {...register}
            />
            {errors[name] && (
          <span className="textErrorValidator">{errors[name].message}</span>
        )}
        </div>
      );
}

export default InputWithLabel
