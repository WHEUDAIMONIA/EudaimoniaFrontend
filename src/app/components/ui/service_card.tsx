// components/ServiceCard.tsx

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HeartFilledIcon, PlusIcon } from '@radix-ui/react-icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  learnMoreLink: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  learnMoreLink
}) => {
  return (
    <Card className='h-[440px] w-[370px] rounded-[24px] bg-white shadow-xl drop-shadow-xl'>
      <CardHeader>
        <Image
          src={imageSrc}
          alt={title}
          width={90}
          height={90}
          className='py-6'
        />
        <CardTitle className='font-andada text-4xl font-normal text-primary'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='pb-12'>
        <CardDescription className='text-md font-andada text-primary'>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <div>
          <button
            type='button'
            className='me-2 inline-flex items-center rounded-full bg-primary p-2.5 text-center text-sm font-medium text-white '
          >
            <PlusIcon className='h-4 w-4 '></PlusIcon>
          </button>
          <button
            type='button'
            className='me-2 inline-flex items-center rounded-full bg-primary p-2.5 text-center text-sm font-medium text-white '
          >
            <HeartFilledIcon className='h-4 w-4 '></HeartFilledIcon>
          </button>
        </div>
        <Button className='rounded-full text-white'>Learn More</Button>
      </CardFooter>
    </Card>
  )
}

export default ServiceCard
