import React from 'react'
import Auth from '../../layout/Auth'
import InputWithLabel from '../../components/base/input/InputWithLabel'
import { Button } from 'antd';
import SignInWithSocial from '../../components/SignInWithSocial/SignInWithSocial';
import NavigatorAuthContent from '../../components/NavigatorAuthContent/NavigatorAuthContent';
import '../PasswordRecovery/PasswordRecovery.scss'
const PasswordRecovery = () => {
  return (
    <Auth>
      <div className='passWordRecoveryForm'>
        <div className='passWordRecoveryForm-title'>
        Password recovery
        </div>
        <form action="">
          <InputWithLabel
            label="Your email"
            id="email"
            placeholder="Enter your email"
            type="email"
            name="email" />
        </form>
        <Button
          className="passWordRecoveryForm-btn"
          type="primary"
        >
          Reset Password
        </Button>

        <div className='passWordRecoveryForm-social'>
          <SignInWithSocial />
        </div>
        <div className='passWordRecoveryForm-navigatorAuthContent'>
          <NavigatorAuthContent content="Don’t have an account?" contentLink="Sign up here" to="/signUp" />
        </div>
      </div>
    </Auth>
  )
}

export default PasswordRecovery
