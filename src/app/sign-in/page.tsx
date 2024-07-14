import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function SignIn() {
  return (
    <div
      className='flex items-center justify-center bg-primary bg-auth-page bg-cover bg-center'
      style={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <Card className='h-4/5 w-4/5 rounded-[10px] bg-white'>
        <section className='container flex'>
          <div className='flex w-1/2 flex-col'>
            <Image
              alt='logo_resize'
              src='/images/logo_resized.png'
              width={200}
              height={200}
            />
            <div className='mt-12 flex px-14 font-andada text-xl font-semibold  leading-8 text-primary'>
              {`Peacewave`}
            </div>
            <div className='flex items-center justify-center font-andada text-xl text-primary'>
              {`Mental health`}
            </div>
            <div className='flex items-center justify-center font-andada text-xl text-primary'>
              {`made easy!`}
            </div>
            <Image
              alt='brain'
              src='/images/brain_auth.png'
              width={200}
              height={200}
            />
          </div>
          <div className='flex w-1/2'>Sign In</div>
        </section>
      </Card>
    </div>
  )
}
