'use client'
import Button from './components/Button'

export default function Home() {
  const callAPI = async () => {
    try {
      const res = await fetch(`https://api.sampleapis.com/coffee/hot`)
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

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
        <Button onClick={callAPI}>Hello</Button>
      </section>
    </div>
  )
}
