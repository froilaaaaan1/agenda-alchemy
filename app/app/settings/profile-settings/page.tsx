import Logo from '@/app/components/Logo'
import React from 'react'
import ProfileSettingsIcon from '../../../../public/images/profile-settings-icon.png'
import Image from 'next/image'
import EditInfoForm from './EditInfoForm'
import { Metadata } from 'next'

export const metadata: Metadata = { title: "AgendaAlchemy | Profile Settings" }

const ProfileSettings = () => {
  return (
    <main className='p-5 flex flex-col gap-10'>
      <Logo />
      <Image
        className='p-10'
        priority={true}
        src={ ProfileSettingsIcon }
        alt='A color pink paper with check icon on top of it.' />
      <h1 className='text-center font-bold'>Edit your information here.</h1>
      <EditInfoForm />
    </main>
  )
}

export default ProfileSettings