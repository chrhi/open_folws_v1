import React, { FormEvent, useState } from 'react'

function singin() {

  const [email , set_email] = useState<string | undefined>()
  const [password , set_password] = useState<string | undefined>()

  const handle_submit = (event:FormEvent) => {
    event.preventDefault()
    console.log(
      email , 
      password
    )
  }
  return (
    <div className='w-full h-screen flex p-8'>
      <h1>sing in to your account</h1>
      <form onSubmit={ (event:FormEvent) => handle_submit(event)}>
          {/* @ts-ignore */}
        <input type="text" onChange ={(event:FormEvent) => set_email(event.target.value)}   />
          {/* @ts-ignore */}
        <input type="email" onChange ={(event:FormEvent) => set_password(event.target.value)}   />
        <button >
          sing in 
        </button>
      </form>
    </div>
  )
}

export default singin