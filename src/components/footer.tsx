import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer: React.FC<{}> = () => {
  return (
    <footer className='bg-primary'>
      <div className='mx-auto w-full max-w-screen-xl p-40 py-6 lg:py-8'>
        <div className='md:flex md:justify-around'>
          <div className='my-auto'>
            <Link href='/'>
              <Image
                src='/images/logo_text.png'
                alt='Peacewave'
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 font-andada sm:grid-cols-3'>
            <div className='text-center'>
              <h2 className='mb-6 text-lg font-semibold uppercase text-white '>
                Our Services
              </h2>
              <ul className=' inline-block font-medium text-white '>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    AI Chatbot
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    AI Tracker
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Newsletter
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Communities
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Journaling Tool
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Therapist Matching
                  </Link>
                </li>
              </ul>
            </div>
            <div className='text-center'>
              <h2 className='mb-6 text-lg font-semibold uppercase text-white '>
                Explore More
              </h2>
              <ul className=' inline-block font-medium text-white '>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Profile
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Vision
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    About us
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    To-do-list
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Journaling
                  </Link>
                </li>
              </ul>
            </div>
            <div className='text-center'>
              <h2 className='mb-6 text-lg font-semibold uppercase text-white '>
                Contact Details
              </h2>
              <ul className=' inline-block font-medium text-white '>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Linkedin
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Instagram
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link href='/' className='hover:underline'>
                    Email Id
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='flex h-20 items-center justify-center bg-white'>
        <span className=' text-center font-andada text-lg text-primary'>
          <Link href='/' className='hover:underline'>
            Peacewave
          </Link>
          2024 © All rights reserved.
        </span>
      </div>
    </footer>
  )
}
