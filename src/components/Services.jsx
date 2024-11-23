import React from 'react'
import { FaTools } from "react-icons/fa";
import { MdHttp } from "react-icons/md";
import { PiDevicesBold } from "react-icons/pi";

const Services = () => {
    return (
        <div className='gap-4 w-full px-4 container mx-auto text-white py-32 border-b border-slate-300 border-opacity-40'>
            <div className='flex flex-col gap-8 justify-center text-center'>
                <h1 className='text-3xl md:text-3xl lg:text-6xl font-bold leading-none'>You're Safe And in Good Hands</h1>
                <p className='text-xl text-[#b9b9b9] max-w-[570px] mx-auto'>
                    Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service.
                </p>
            </div>

            {/*Services*/}
            <div className='grid lg:grid-cols-3 pt-16 gap-32'>
                <div className='flex flex-col gap-4 text-center justify-center items-center'>
                    <FaTools className='bg-blue-600 text-6xl rounded-full p-4' />
                    <h2 className='text-3xl text-[#b9b9b9]'>Continuous Support</h2>
                    <p className='text-[#a7a7a7] leading-5 font-light'>I will advance your web-based software to keep it efficient, competitive on the market. Using a well-established DevOps processes, It helps me roll out urgent updates within few hours and release new, planned functional modules every other week.</p>
                </div>

                <div className='flex flex-col gap-4 text-center justify-center items-center'>
                    <MdHttp className='bg-blue-600 text-6xl rounded-full p-4' />
                    <h2 className='text-3xl text-[#b9b9b9]'>Back-end development</h2>
                    <p className='text-[#a7a7a7] leading-5 font-light'>I accurately implement the business logic of your web app on the back end. I always rely on proven frameworks to ensure fast and quality coding. And I build well structured APIs to integrate your web app with corporate or third-party systems and services</p>
                </div>

                <div className='flex flex-col gap-4 text-center justify-center items-center'>
                    <PiDevicesBold className='bg-blue-600 text-6xl rounded-full p-4' />
                    <h2 className='text-3xl text-[#b9b9b9]'>Frontend design/dev</h2>
                    <p className='text-[#a7a7a7] leading-5 font-light'>As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies.</p>
                </div>
            </div>
        </div>
    )
}

export default Services