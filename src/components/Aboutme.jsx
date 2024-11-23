import React from 'react'
import image from '../assets/portfolioimage.webp'


const Aboutme = () => {
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full px-4 container mx-auto text-white py-32'>
                <div className='flex justify-center items-center'>
                    <img src={image} alt="" className='rounded' />
                </div>
                <div className='flex flex-col gap-8 justify-center'>
                    <h1 className='text-3xl md:text-3xl lg:text-6xl font-bold leading-none'>About Me, Im Vito Medlej</h1>
                    <p className='md:text-sm lg:text-xl text-[#b9b9b9] font-light'>
                        A 20-year-old Lebanon-based software developer. I first started developing games using Unity3D, but soon realized I preferred web and mobile app development, and I've been building and working on that for the past 3 years now.<br /> <br />
                        Being self-taught made me appreciate education; thus, I'm studying Management Information Systems simultaneously. Business and technology are both my passions. <br /> <br />
                        Aside from working hard, I tend to enjoy simple things like reading, petting cats, hitting the gym, and other things we humans do. If any of what I said seems interesting, then please do not hesitate to send me a message.
                    </p>
                </div>
            </div>

            <div className='pb-32'>
                <div className='w-full h-64 bg-blue-600 flex justify-center items-center'>
                    <div className='text-center'>
                        <h1 className='text-white font-bold mb-4 text-2xl md:text-3xl lg:text-5xl'>What's holding you back? Send me a message!</h1>
                        <button className='bg-transparent border text-white uppercase px-12 py-2 rounded hover:bg-white hover:text-blue-600 transition'>
                            contact
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme