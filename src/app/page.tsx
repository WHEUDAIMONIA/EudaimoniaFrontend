'use client'
import Button from './components/Button'

async function AddUser() {
  try {
    const url = `https://peacewavebackend.azurewebsites.net/adduser`
    // const url = `http://localhost:5000/adduser`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_email: 'test@gmail.com', isOauth: false })
    })
    const data = await res.json()
    console.log(data)
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
        <Button onClick={AddUser}>Add User Test</Button>
      </section>
    </div>
  )
}
