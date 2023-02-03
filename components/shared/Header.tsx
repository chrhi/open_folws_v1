import Link from 'next/link'
import React from 'react'

const links = [
    {
        name : "Dashboard",
        link:"/app"
    },
    {
        name : "flows",
        link:"/app/flows"
    },
    {
        name : "text editor",
        link:"/editor"
    }
]

function Header() {
  return (
    <div className='w-full h-[50px] flex justify-between p-2 px-4'>
      <div className='w-1/2 h-full flex justify-start '>
      <h1 className='text-blue-600 text-xl font-bold cursor-pointer hover:text-blue-700 '>Open Flows</h1>  
      {
        links.map((item) => <Link href={item.link} > {item.name} </Link>  )
      }
      </div>
      <div className='w-1/2 h-full flex justify-end '>

      </div>
    </div>
  )
}

export default Header