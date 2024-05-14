import React from 'react'
import { Input } from 'antd'
import iconEyeHide from '@assets/image/ic_eye_hide.svg'
import iconEyeShow from '@assets/image/ic_eye_show.svg'
import Icon from '../icon/Icon.jsx'
import './PasswordWithlabel.scss'
import '@assets/sass/textValidator.scss'

const PasswordWithlabel = ({ label, id, placeholder, register, errors, name }) => {
  return (
    <div className="passwordWithLabel">
      <label className="passwordWithLabel-label" htmlFor={id}>
        {label}
      </label>
      <div className="passwordWithLabel-inputWrap">
        <Input.Password
          className="passwordWithLabel-inputWrap-input"
          placeholder={placeholder}
          id={id}
          status={errors[name] && 'error'}
          {...register}
          iconRender={(visible) => (visible ? <Icon src={iconEyeHide} /> : <Icon src={iconEyeShow} />)}
        />
        {errors[name] && <span className="textErrorValidator">{errors[name].message}</span>}
      </div>
    </div>
  )
}

export default PasswordWithlabel
