import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Header: React.FC<{}> = () => {
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link href='/'>
        <div className='flex flex-row items-center'>
          <Image src='/images/logo.png' alt='Logo' width={100} height={100} />
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5 text-xl'>
          <Link href='/about'>{`About Us`}</Link>
        </nav>
      </div>
    </div>
  )
}
