'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isClick, setIsClick] = React.useState(false)

  const toggleNavbar = () => {
    setIsClick(!isClick)
  }

  return (
    <header className='bg-white p-4 '>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo.png'
            alt='Peacewave Logo'
            className='h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12'
            width={50}
            height={50}
          />
          <span className='ml-2 text-xl text-primary md:text-2xl lg:text-3xl'>
            Peacewave
          </span>
        </Link>
        <nav className='hidden space-x-10 text-primary md:flex'>
          <Link href='/our-journey'>Our Journey</Link>
          <Link href='/journaling'>Journaling</Link>
          <Link href='/resources'>Resources</Link>
          <Link href='/community'>Community</Link>
          <Link href='/access'>Access</Link>
          <Link href='/sign-up'>Sign Up</Link>
        </nav>
        <div className='flex items-center'>
          <div className='overflow-hidden rounded-full'>
            <Image src='/images/usr.png' alt='Profile' width={40} height={40} />
          </div>
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
        <Link href='/our-journey' className='block py-2'>
          Our Journey
        </Link>
        <Link href='/journaling' className='block py-2'>
          Journaling
        </Link>
        <Link href='/resources' className='block py-2'>
          Resources
        </Link>
        <Link href='/community' className='block py-2'>
          Community
        </Link>
        <Link href='/access' className='block py-2'>
          Access
        </Link>
        <Link href='/sign-up' className='block py-2'>
          Sign Up
        </Link>
      </nav>
    </header>
  )
}

export default Header
