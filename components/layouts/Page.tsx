import React, { ReactNode } from 'react'

type PageProps ={

    children:ReactNode
}

function Page({children}:PageProps) {
  return (
    <div className='w-full flex flex-col heightApp bg-gray-100'>
        {children}
    </div>
  )
}

export default Page