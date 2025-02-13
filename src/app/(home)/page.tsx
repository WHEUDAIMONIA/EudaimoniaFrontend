'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ServiceCard from '@/components/service_card'
import FounderCard from '@/components/founder_card'

const founderCardData = [
  {
    name: 'Soumil',
    role: 'CEO',
    imageSrc: '/images/avatars/soumil.png',
    description:
      'The principle objective behind the conceptualization of Peace Wave is for the existence of a platform that makes Mental health resources affordable and accessible for all, with the ongoing mental health pandemic of the 21st century  allowing people to be able to seamlessly and lucidly navigate the intricate nuances of their mental health journeys is the need of hour and we are here to streamline the process such that it is all within the grasp of our users fingertips'
  },

  {
    name: 'Aashi',
    role: 'CMO',
    imageSrc: '/images/avatars/aashi.png',
    description:
      'It might be a lonely road to better mental health, but everyone deserves support along the way. We wish to use PeaceWave to provide a safe space where people may express themselves and get help while they work through this difficult process. Our goal is to establish a helpful community where users may meet people who are on similar paths and feel less isolated. We are here for you, every step of the way'
  },
  {
    name: 'Bhavya',
    role: 'COO',
    imageSrc: '/images/avatars/bhavya.png',
    description:
      "We understand firsthand how challenging the journey towards better mental health can be. It's a path filled with obstacles; feeling alone can make it even harder. That's why, at Peacewave, our mission is to make this journey a bit easier for you. We provide a supportive community where you can connect with others who understand what you're going through, along with access to therapists tailored to your specific needs. We're here so that you don't have to face this alone. Together, we can navigate this journey and make strides towards a healthier, happier you."
  }
]

const serviceCardData = [
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
      <section className='container flex flex-row'>
        <div className='mb-auto mt-4  flex w-1/2 flex-col space-y-8 font-andada font-semibold text-primary'>
          <div className='mt-12 px-14 text-xl leading-8'>
            {`PeaceWave is your one-stop shop for mental health, offering a
            user-friendly platform packed with cutting-edge technology. Track
            moods and medications with real-time alerts, get matched with a
            perfect therapist for secure messaging, explore a vast library of
            expert resources, connect with supportive communities led by
            licensed counselors, and gain insights through our AI system that
            analyzes body language for stress and anxiety. Track progress with
            sophisticated journaling tools, find dedicated support for
            caregivers, and receive 24/7 companionship from our AI-powered
            chatbot. PeaceWave - your partner on the path to mental well-being.`}
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
      <section className='container flex h-[230px] w-auto flex-col items-center justify-center rounded-2xl bg-primary bg-banner-pattern bg-cover bg-center'>
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
      <section className='container my-4 flex flex-col justify-center'>
        <h1 className='text-center font-andada text-[65px] font-bold text-primary '>
          What Our Founders Say
        </h1>
        <div className='gap-15 my-8 grid grid-cols-3'>
          {founderCardData.map((data, index) => (
            <FounderCard
              key={index}
              name={data.name}
              role={data.role}
              imageSrc={data.imageSrc}
              description={data.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
