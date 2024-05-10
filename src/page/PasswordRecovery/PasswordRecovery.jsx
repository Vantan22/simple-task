import React from 'react'
import Auth from '../../layout/Auth'
import InputWithLabel from '../../components/base/input/InputWithLabel'
import { Button } from 'antd';
import SignInWithSocial from '../../components/SignInWithSocial/SignInWithSocial';
import NavigatorAuthContent from '../../components/NavigatorAuthContent/NavigatorAuthContent';
import '../PasswordRecovery/PasswordRecovery.scss'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordValidator } from '../../contains/auth-validator-config';
const PasswordRecovery = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(forgotPasswordValidator),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Auth>
      <div className='passWordRecoveryForm'>
        <div className='passWordRecoveryForm-title'>
        Password recovery
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputWithLabel
                    label="Email"
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
                )}
              />
        
        <Button
          className="passWordRecoveryForm-btn"
          type="primary"
          htmlType="submit"
        >
          Reset Password
        </Button>

        <div className='passWordRecoveryForm-social'>
          <SignInWithSocial />
        </div>
        </form>
        <div className='passWordRecoveryForm-navigatorAuthContent'>
          <NavigatorAuthContent content="Don’t have an account?" contentLink="Sign up here" to="/signUp" />
        </div>
      </div>
    </Auth>
  )
}

export default PasswordRecovery
