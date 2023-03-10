import Link from 'next/link'
import React from 'react'
import { Avatar, Button, IconButton } from '@mui/material'
import DropDowsAvatar from "./DropDowsAvatar"

const links = [
    {
        name : "Dashboard",
        link:"/app",
        selected:false,
    },
    {
        name : "flows",
        link:"/app/flows",
        selected:true,
    },
    {
        name : " editor",
        link:"/editor",
        selected:false,
    }
]

const NavLink = (link :string , name :string , selected : boolean) => (
  
<Button variant="text"  className={`  ${selected ? "text-black": "text-gray-600" } hover:text-gray-900 ${selected ? "font-bold": null }`}>
<Link href={link}> {name} </Link>
</Button>
)



function Header() {

  return (
    <div className='w-full h-[55px] flex justify-between p-2 px-4 items-center shadow-sm'>
      <div className='w-1/2 h-full flex justify-start items-center '>
      <h1 className='text-blue-600 text-xl font-bold cursor-pointer hover:text-blue-700 '>Open Flows</h1>  
      <div className='w-fit flex gap-x-6 items-center ml-6 '>
      {/* {
        links.map((item) => <Link href={item.link} className={`text-lg  ${item.selected ? "text-black": "text-gray-600" } hover:text-gray-900 ${item.selected ? "font-bold": null }`}> {item.name} </Link>  )
      } */}

      {
        links.map((item) => NavLink(item.link , item.name , item.selected) )
      }
      </div>
      </div>
      <div className='w-1/2 h-full flex justify-end '>
    <DropDowsAvatar />
      </div>
    </div>
  )
}

export default Header