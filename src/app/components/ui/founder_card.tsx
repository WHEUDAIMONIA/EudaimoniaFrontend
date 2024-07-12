import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { QuoteIcon } from '@radix-ui/react-icons'

interface FounderCardProps {
  name: string
  role: string
  imageSrc: string
  description: string
}

const FounderCard: React.FC<FounderCardProps> = ({
  name,
  role,
  imageSrc,
  description
}) => {
  return (
    <Card className='w-[380px] rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none border-2 border-primary shadow-xl'>
      <CardHeader className='flex flex-row'>
        <div className='my-auto'>
          <Avatar className='bg-blackA1 inline-flex h-[60px] w-[60px] select-none items-center justify-center overflow-hidden rounded-full align-middle'>
            <AvatarImage
              className='h-full w-full rounded-[inherit] object-cover'
              src={imageSrc}
              alt='Colm Tuite'
            />
          </Avatar>
        </div>
        <div className='ml-8 flex flex-col '>
          <CardTitle className='font-andada text-2xl font-bold font-normal text-black   '>
            {name}
          </CardTitle>
          <CardDescription className='font-Roboto text-sm text-gray-400'>
            {role}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className='py-auto'>
        <CardDescription className='font-Roboto font-serif text-xs leading-6 text-gray-800'>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className='flex flex-row-reverse'>
        <QuoteIcon className='h-9 w-9 rotate-180 text-primary' />
      </CardFooter>
    </Card>
  )
}
export default FounderCard
