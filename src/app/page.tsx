import Image from 'next/image'
import Button from './components/Button'
import AffiliationSlider from './components/Affliations'
import ServiceCard from './components/ui/service_card'
import FounderCard from './components/ui/founder_card'
export default function Home() {
  return (
    <div>
      <section className=' container flex flex-row'>
        <div className='  mb-auto mt-4  flex w-1/2 flex-col space-y-8 font-andada font-semibold text-primary'>
          <div className='mt-12 px-14 text-xl leading-8'>
            PeaceWave is your one-stop shop for mental health, offering a
            user-friendly platform packed with cutting-edge technology. Track
            moods and medications with real-time alerts, get matched with a
            perfect therapist for secure messaging, explore a vast library of
            expert resources, connect with supportive communities led by
            licensed counselors, and gain insights through our AI system that
            analyzes body language for stress and anxiety. Track progress with
            sophisticated journaling tools, find dedicated support for
            caregivers, and receive 24/7 companionship from our AI-powered
            chatbot. PeaceWave - your partner on the path to mental well-being.
          </div>
          <div className='px-14'>
            <Button className='pb-auto rounded-full bg-primary text-white shadow-custom'>
              Learn More
            </Button>
          </div>
        </div>
        <div className='flex w-1/2'>
          <Image
            alt='mental_health'
            src='/images/mental_health.png'
            width={700}
            height={700}
          />
        </div>
      </section>
      <section className='container flex flex-col '></section>
    </div>
  )
}
