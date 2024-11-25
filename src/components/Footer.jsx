import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6 w-full px-4 container mx-auto text-white py-16 border-y border-opacity-30 border-slate-300'>

                <div className='flex flex-col gap-8 justify-center'>
                    <h1 className='text-3xl md:text-3xl leading-none'>About</h1>
                    <p className='text-xl text-[#b9b9b9] font-light'>Hi, my name is Arslan Mushtaq and My aim to solve various issues small Pakistani businesses face. You are free to use the website as a template for yourself as long as you give credit.</p>
                </div>

                <div className='flex flex-col gap-8 justify-center'>
                    <h1 className='text-3xl md:text-3xl leading-none'>Links</h1>
                    <div className='flex flex-col gap-6'>
                        <Link to="/" className='hover:text-blue-700'>Home</Link>
                        <Link to="/contact" className='hover:text-blue-700'>Contact</Link>
                        <Link to="/about" className='hover:text-blue-700'>About</Link>
                    </div>
                </div>

                <div className='flex flex-col gap-8 justify-center'>
                    <h1 className='text-3xl md:text-3xl leading-none'>Contact</h1>
                    <div className='flex flex-col gap-6'>
                        <Link to="https://github.com/arslanmushtaq6" className='hover:text-blue-700'>Github</Link>
                        <Link to="/" className='hover:text-blue-700'>arslanmushtaq588@gmail.com</Link>
                        <Link to="/" className='hover:text-blue-700'>+923015055833</Link>
                    </div>
                </div>



            </div>

            <div className='py-4'>
                <p className='text-center text-white'>Copyright © 2024.</p>
            </div>

        </>
    )
}

export default Footer