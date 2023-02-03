import React from 'react'
import { styles } from '@/lib/tailwind'
import DashboardIcon from '@mui/icons-material/Dashboard';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import { Button } from '@mui/material'



function PageHead() {
  return (
    <div className='w-full h-[70px] flex items-center justify-between p-4 px-8'>
      <h1 className='text-2xl font-bold '>Flows </h1>
      <div className='w-1/2 h-full flex  gap-x-3 justify-end'>
      <Button variant="outlined"
       className ="!bg-white !text-black !rounded-lg !font-bold !border-gray-300"
       startIcon={<FilterAltIcon />}
       >filter</Button>
      <Button variant="outlined" 
       startIcon={<SortIcon />}
      className ="!bg-white !text-black !rounded-lg !font-bold !border-gray-300">sort by</Button>
      <Button variant="outlined"
       startIcon={<DashboardIcon />}
      className ="!bg-white !text-black !rounded-lg !font-bold !border-gray-300">layout</Button>
      <Button variant="contained" className ="!bg-blue-600 !font-bold !rounded-lg" disableElevation>
       create new project
       </Button>
      </div>
    </div>
  )
}

export default PageHead