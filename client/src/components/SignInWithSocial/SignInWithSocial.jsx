import React from 'react'
import './SignInWithSocial.scss'
import logoFB from '@assets/image/LogoSocial/fb.svg'
import logoGoogle from '@assets/image/LogoSocial/gg.svg'
import logoXX from '@assets/image/LogoSocial/xx.svg'

const SignInWithSocial = () => {
  return (
    <div className="signInWithSocial">
      <div className="signInWithSocial-title">Sign up with social profiles</div>
      <div className="signInWithSocial-social">
        <div className="signInWithSocial-social-item">
          <img className="signInWithSocial-social-item-img" src={logoFB} alt="" />
        </div>
        <div className="signInWithSocial-social-item">
          <img className="signInWithSocial-social-item-img" src={logoGoogle} alt="" />
        </div>
        <div className="signInWithSocial-social-item">
          <img className="signInWithSocial-social-item-img" src={logoXX} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignInWithSocial
