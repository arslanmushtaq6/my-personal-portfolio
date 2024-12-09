import React from 'react'
import image from '../assets/portfolioimage.webp'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {

    const fadeInrightAnimation = {
        hidden: {
            opacity: 0,
            x: 100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.1,
                duration: 1,
            }
        }
    }



    return (
        <>

            <motion.div initial="hidden" animate="show" variants={fadeInrightAnimation} className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full px-4 container mx-auto text-white py-32'>
                <div className='flex flex-col gap-8 justify-center'
                    
                >
                    <motion.h1 className='text-5xl md:text-7xl font-bold leading-none'
                    variants={fadeInrightAnimation} >The place where your business expands</motion.h1>
                    <motion.p className='text-xl text-[#b9b9b9]' variants={fadeInrightAnimation}>
                        Hey there! Call me Arslan Mushtaq. I enjoy creating web apps, ones that suit your desires and needs using latest technologies and cleanest design patterns.
                    </motion.p>
                    <div className='flex gap-6'>
                        <Link to="/projects">
                            <motion.button variants={fadeInrightAnimation} className='border rounded hover:bg-blue-700 text-[15px] hover:border-blue-700 px-5 py-3 bg-transparent'>View Projects</motion.button>
                        </Link>

                        <div className="relative group inline-block">
                            <motion.button variants={fadeInrightAnimation} href="#" className='bg-blue-700 bg-opacity-10 rounded text-[15px] px-5 py-3'>View Resume</motion.button>
                            <div
                                className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute w-48 mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 z-10">
                                <motion.p variants={fadeInrightAnimation} className="px-4 py-2">Resume Not Found</motion.p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <motion.img src={image} alt="" className='rounded' variants={fadeInrightAnimation}/>
                </div>
            </motion.div>

        </>
    )

}


export default Hero