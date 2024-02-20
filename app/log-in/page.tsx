import React from 'react'
import LoginIcon from '../../public/images/login-icon.png'
import Image from 'next/image'
import FormComponent from '../components/Forms'
import Logo from '../components/Logo'

const Login = () => {
  return (
    <div className='p-5 flex min-h-screen justify-between flex-col'>
      <Logo />
      <main className='p-5 gap-5 flex flex-col'>
        <Image 
          priority={true}
          src={ LoginIcon }
          className='p-7' alt='Image of generic icon of a person' />
        <h1 className='text-center font-bold'>Login using your account.</h1>
        <FormComponent mode="log-in" />
      </main>
    </div>
  )
}

export default Login