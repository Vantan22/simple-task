import React from 'react'
import { Input } from 'antd';
import iconEyeHide  from '../../../assets/image/ic_eye_hide.svg';
import  iconEyeShow from '../../../assets/image/ic_eye_show.svg';
import Icon from '../../base/icon/Icon';
import './PasswordWithlabel.scss';
const PasswordWithlabel = ({ label, id, placeholder}) => {
  return (
    <div className="passwordWithLabel">
      <label className="passwordWithLabel-label" htmlFor={id}>
        {label}
      </label>
      <div className='passwordWithLabel-inputWrap'>
        <Input.Password
        className='passwordWithLabel-inputWrap-input'
          placeholder={placeholder}
          id={id}
          iconRender={(visible) => (visible ? <Icon src={iconEyeHide} /> : <Icon src={iconEyeShow} />)}
        />
      </div>
    </div>
  )
}

export default PasswordWithlabel
