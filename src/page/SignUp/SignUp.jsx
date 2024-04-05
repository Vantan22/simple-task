import React from 'react'
import Auth from '../../layout/Auth'
import InputWithLabel from '../../components/base/input/InputWithLabel'
import CheckBox from '../../components/base/checkbox/CheckBox'
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import SignInWithSocial from '../../components/SignInWithSocial/SignInWithSocial'
import NavigatorAuthContent from '../../components/NavigatorAuthContent/NavigatorAuthContent'
import './SignUp.scss'
import PasswordWithlabel from '../../components/base/input/PasswordWithlabel';
const SignUp = () => {
  return (
    <Auth>
      <div className='signUpForm'>
        <div className='signUpForm-title'>
          Create account
        </div>
        <form action="">
          <InputWithLabel
            label="Full name"
            id="fullname"
            placeholder="Enter your fullname"
            type="fullname"
            name="fullname" />
          <InputWithLabel
            label="Your email"
            id="email"
            placeholder="Enter your email"
            type="email"
            name="email" />

          <PasswordWithlabel
            label="Password"
            placeholder="Enter your password"
            id="password"
            name="password"
          />
        </form>
        <div className="signUpForm-wrapCheckAndForgot">
          <CheckBox label="I agree with terms & conditions" />
        </div>

        <Button
          className="signUpForm-btn"
          type="primary"
        >
          Sign Up
        </Button>

        <div className='signUpForm-social'>
          <SignInWithSocial />
        </div>
        <div className='signUpForm-navigatorAuthContent'>
          <NavigatorAuthContent content="Already have an account?" contentLink="Login here" to="/login" />
        </div>
      </div>
    </Auth>
  )
}

export default SignUp