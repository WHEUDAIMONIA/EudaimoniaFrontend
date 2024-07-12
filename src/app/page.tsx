'use client'
import Button from './components/Button'

export async function POSTFlask() {
  try {
    const val1 = 'rohit'
    const val2 = '2'
    const params = new URLSearchParams({
      name: val1,
      age: val2
    })
    const url = `http://localhost:5000/fetchuser?${params.toString()}`
    console.log(url)
    const res = await fetch(url, {
      method: 'GET'
      // headers: {
      //   'Content-Type': 'application/json'
      //   // 'API-Key': process.env.DATA_API_KEY!
      // },
      // body: JSON.stringify({ name: 'Hello Rohit' })
    })
    const data = await res.json()
    console.log(data)
    return Response.json(data)
  } catch (err) {
    console.log(err)
  }
}

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
        <Button onClick={POSTFlask}>Hello</Button>
      </section>
    </div>
  )
}
