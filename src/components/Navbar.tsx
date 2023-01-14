import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
        <ul className='flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Service</li>
            <li className='p-4'>Blog</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav}>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#041629] ease-in-out duration-500 ' : "fixed left-[-100%] "}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React.</h1>
            <ul className='pt-12 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Service</li>
                <li className='p-4 border-b border-gray-600'>Blog</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar