import React, { useState } from 'react'
import Auth from '../../layout/Auth'
import InputWithLabel from '../../components/base/input/InputWithLabel'
import CheckBox from '../../components/base/checkbox/CheckBox'
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import SignInWithSocial from '../../components/SignInWithSocial/SignInWithSocial'
import NavigatorAuthContent from '../../components/NavigatorAuthContent/NavigatorAuthContent'
import './SignUp.scss'
import PasswordWithlabel from '../../components/base/input/PasswordWithlabel';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpValidator } from '../../contains/auth-validator-config';
const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(signUpValidator),
  });

  const onSubmit = async (data,e) => {
    e.preventDefault();
    if (!agree) {
      setError('You must agree to the terms and conditions.');
      return;
    }
    console.log(data);
  }
  const handleCheckboxChange = () => {
    setAgree(!agree);
    setError("");
  };
  return (
    <Auth>
      <div className='signUpForm'>
        <div className='signUpForm-title'>
          Create account
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                label="Full name"
                id="fullName"
                placeholder="Enter your fullname"
                type="fullName"
                name="fullName"
                errors={errors}
                register={{
                  ...field,
                  onChange: (value) => field.onChange(value),
                  onBlur: () => field.onBlur(),
                }}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputWithLabel
                label="Your email"
                id="email"
                placeholder="Enter your email"
                type="email"
                name="email"
                errors={errors}
                register={{
                  ...field,
                  onChange: (value) => field.onChange(value),
                  onBlur: () => field.onBlur(),
                }}
              />
            )} />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordWithlabel
                label="Password"
                placeholder="Enter your password"
                id="password"
                name="password"
                errors={errors}
                register={{
                  ...field,
                  onChange: (value) => field.onChange(value),
                  onBlur: () => field.onBlur(),
                }}
              />
            )}
          />

          <div className="signUpForm-wrapCheckAndForgot">
            <CheckBox label="I agree with terms & conditions" 
            checked={agree}
            onChange={handleCheckboxChange}
            />
            {error && <div className="textErrorValidator">{error}</div>}
          </div>

          <Button
            className="signUpForm-btn"
            htmlType="submit"
          >
            Sign Up
          </Button>

          <div className='signUpForm-social'>
            <SignInWithSocial />
          </div>
          <div className='signUpForm-navigatorAuthContent'>
            <NavigatorAuthContent content="Already have an account?" contentLink="Login here" to="/login" />
          </div>
        </form>
      </div>
    </Auth>
  )
}

export default SignUp