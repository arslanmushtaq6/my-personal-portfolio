import React from 'react'
import image from '../assets/portfolioimage.webp'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full px-4 container mx-auto text-white py-32'>
            <div className='flex flex-col gap-8 justify-center'>
                <h1 className='text-5xl md:text-7xl font-bold leading-none'>The place where your business expands</h1>
                <p className='text-xl text-[#b9b9b9]'>
                    Hey there! Call me Arslan Mushtaq. I enjoy creating web apps, ones that suit your desires and needs using latest technologies and cleanest design patterns.
                </p>
                <div className='flex gap-6'>
                    <Link to="/projects">
                        <button className='border rounded hover:bg-blue-700 text-[15px] hover:border-blue-700 px-5 py-3 bg-transparent'>View Projects</button>
                    </Link>
                    <button href="" className='bg-blue-700 bg-opacity-10 rounded text-[15px] px-5 py-3'>View Resume</button>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={image} alt="" className='rounded' />
            </div>
            
        </div>
    )
}

export default Hero