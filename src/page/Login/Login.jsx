import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import InputWithLabel from '../../components/base/input/InputWithLabel';
import { Button } from 'antd';
import './Login.scss'
import Auth from '../../layout/Auth';
import CheckBox from '../../components/base/checkbox/CheckBox';
import SignInWithSocial from '../../components/SignInWithSocial/SignInWithSocial';
import NavigatorAuthContent from '../../components/NavigatorAuthContent/NavigatorAuthContent';
import PasswordWithlabel from '../../components/base/input/PasswordWithlabel';
const Login = () => {

  return (
    <Auth>
      <div className='loginForm'>
        <div className='loginForm-title'>
          Sign In
        </div>
        <form action="">
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
        <div className="loginForm-wrapCheckAndForgot">
          <CheckBox label="Remember me" />
          <Link
            to="/forgot-password"
            className="font-inter text-xs font-bold leading-[18px] text-darkColor hover:text-primaryColor"
          >
            Recover password
          </Link>
        </div>

        <Button
          className="loginForm-btn"
          type="primary"
        >
          Sign In
        </Button>

        <div className='loginForm-social'>
          <SignInWithSocial />
        </div>
        <div className='loginForm-navigatorAuthContent'>
          <NavigatorAuthContent content="Don’t have an account?" contentLink="create an account" to="/signUp" />
        </div>
      </div>

    </Auth>
  )
}

export default Login
