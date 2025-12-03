import React from 'react'
import '../Search/style.css';
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded relative p-2'>
        <input type="text" placeholder='Search for products..' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-sm md:text-base ' />
        <Button className='!absolute top-[7px] right-[5px] z-50 !w-[37Px] !min-w-[37px] h-[35px] !rounded-full !text-xl text-gray-500' ><IoSearch className='text-[#ff5252]' /></Button>
    </div>
  )
}

export default Search
