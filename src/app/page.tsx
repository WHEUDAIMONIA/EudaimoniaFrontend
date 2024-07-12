import Image from 'next/image'
import Button from './components/Button'
import AffiliationSlider from './components/Affliations'
import ServiceCard from './components/ui/service_card'
import FounderCard from './components/ui/founder_card'
import { title } from 'process'
import { describe } from 'node:test'
import { CardDescription } from '@/components/ui/card'

const serviceCardData: ServiceCardData[] = [
  {
    title: 'Newsletter',
    description:
      'Get bite-sized mental health insights and self-care tips delivered straight to your inbox.',
    imageSrc: '/images/services/newsletter.png',
    learnMoreLink: '/newsletter'
  },
  {
    title: 'Journaling Tool',
    description:
      'Gain self-awareness and track your mood patterns with our intelligent journaling assistant.',
    imageSrc: '/images/services/typewriter.png',
    learnMoreLink: '/journaling'
  },
  {
    title: 'Therapist Matching',
    description:
      'Find the perfect therapist for your needs through our personalized matching algorithm.',
    imageSrc: '/images/services/therapist_matching.png',
    learnMoreLink: '/therapist_matching'
  },
  {
    title: 'AI Tracker',
    description:
      ' Monitor your mood and potential triggers with our AI-powered tracking system.',
    imageSrc: '/images/services/Ai_tracker.png',
    learnMoreLink: '/ai_tracker'
  },
  {
    title: 'AI Chatbot',
    description:
      'Get 24/7 initial support, guidance, and resources from our friendly AI companion.',
    imageSrc: '/images/services/Ai_chatbot.png',
    learnMoreLink: '/ai_chatbot'
  },
  {
    title: 'Communities',
    description:
      'Connect with a supportive network of peers who understand your journey in a safe online space.',
    imageSrc: '/images/services/communities.png',
    learnMoreLink: '/communities'
  }
]
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
      <section className=' bg-banner-pattern container flex h-[230px] w-auto flex-col items-center justify-center rounded-2xl bg-primary bg-cover bg-center'>
        <h1 className='font-andada text-[90px] text-white '>Services</h1>
      </section>
      <section className='container flex justify-center'>
        <div className='my-8 grid grid-cols-3 gap-20'>
          {serviceCardData.map((data, index) => (
            <ServiceCard
              key={index}
              title={data.title}
              description={data.description}
              imageSrc={data.imageSrc}
              learnMoreLink={data.learnMoreLink}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
