import Image from 'next/image'
import Button from './components/Button'
import AffiliationSlider from './components/Affliations'

export default function Home() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          <span className='bg-span-bg bg-clip-text'>{`W&H`}</span>
          <br />
          {`Eudaimonia`}
        </h1>
        <div className='text-text-secondary my-6 px-20 text-center text-2xl'>
          {`Mental Health Made Easy ...`}
        </div>
      </section>
    </div>
  )
}
