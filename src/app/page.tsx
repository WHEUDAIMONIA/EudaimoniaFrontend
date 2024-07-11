import Image from 'next/image'
import Button from './components/Button'
import AffiliationSlider from './components/Affliations'
import ServiceCard from './components/ui/service_card'

export default function Home() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          <span className='bg-span-bg bg-clip-text'>{`W&H`}</span>
          <br />
          {`Eudaimonia`}
        </h1>
        <ServiceCard
          title='Journaling Tool'
          description='Gain self-awareness and track your mood patterns with our intelligent journaling assistant.'
          imageSrc='/images/typewriter.png'
          learnMoreLink='/learn-more'
        />
        <div className='text-text-secondary my-6 px-20 text-center text-2xl'>
          {`Mental Health Made Easy ...`}
        </div>
      </section>
    </div>
  )
}
