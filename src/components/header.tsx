'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header: React.FC = () => {
  const [isClick, setIsClick] = useState(false)

  const toggleNavbar = () => {
    setIsClick(!isClick)
  }

  return (
    <header className='bg-white p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo.png'
            alt='Peacewave Logo'
            className='h-8 w-8 md:h-12 md:w-12 lg:h-14 lg:w-14'
            width={60}
            height={60}
          />
          <span className='ml-2 text-xl text-primary md:text-2xl lg:text-3xl'>
            Peacewave
          </span>
        </Link>
        <nav className='hidden space-x-10 text-primary md:flex'>
          <Link href='/'>Our Journey</Link>
          <Link href='/'>Journaling</Link>
          <Link href='/'>Resources</Link>
          <Link href='/'>Community</Link>
          <Link href='/'>Access</Link>
          <Link href='/'>Sign Up</Link>
          <Link href='/'>Sign In</Link>
        </nav>
        <div className='flex items-center'>
          {/* <div className='overflow-hidden rounded-full'>
            <Image src='/images/usr.png' alt='Profile' width={40} height={40} />
          </div> */}
          <button
            className='ml-2 flex h-8 w-8 items-center justify-center rounded-full text-primary md:hidden'
            onClick={toggleNavbar}
          >
            {isClick ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav
        className={`${isClick ? 'block' : 'hidden'} bg-white p-4 text-primary md:hidden`}
      >
        <Link href='/' className='block py-2'>
          Our Journey
        </Link>
        <Link href='/' className='block py-2'>
          Journaling
        </Link>
        <Link href='/' className='block py-2'>
          Resources
        </Link>
        <Link href='/' className='block py-2'>
          Community
        </Link>
        <Link href='/' className='block py-2'>
          Access
        </Link>
        <Link href='/' className='block py-2'>
          Sign Up
        </Link>
        <Link href='/' className='block py-2'>
          Sign In
        </Link>
      </nav>
    </header>
  )
}
