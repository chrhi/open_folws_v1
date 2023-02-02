import React, { FormEvent } from 'react'
import { useState } from 'react'
import {useAuthAbdullah} from "../../util/auth/auth"
import { async } from '@firebase/util'

function signup() {

  //out custom hook
  // @ts-ignore
  const create_user = useAuthAbdullah((state) => state?.create_user)

  //these variabes are going to hold the value of each input
  const [user_name , set_user_name ] = useState<string | undefined>()
  const [email , set_email ] = useState<string | undefined>()
  const [password , set_password ] = useState<string | undefined>()
  const [confirm_password , set_confirm_password ]= useState<string | undefined>()

  //this function will handle the submit form
  const handle_submit = async ( event : FormEvent) => {
    event.preventDefault()
    console.log({
      user_name ,
      email
      , password
    })
    await create_user(email , password)
  }



  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <form onSubmit={(event:FormEvent) => handle_submit(event)}>
        {/* @ts-ignore */}
        <input type="text" onChange={(event :FormEvent) => set_user_name ( prev => event.target.value)} />
         {/* @ts-ignore */}
         <label >email</label>
        <input type="email"  onChange={(event :FormEvent) => set_email ( prev => event.target.value)} />
         {/* @ts-ignore */}
         <label >password</label>
        <input type="password"  onChange={(event :FormEvent) => set_password ( prev => event.target.value)} />
        <button >submit</button>
      </form>
    </div>
  )
}

export default signup