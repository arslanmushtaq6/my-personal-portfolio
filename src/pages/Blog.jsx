import React from 'react'

const Blog = () => {
    return (
        <div className='bg-slate-300'>
        <div className='gap-4 bg-slate-300 w-full px-4 container mx-auto text-white py-32 border-b border-slate-300 border-opacity-40'>
            <div className='flex flex-col gap-8 justify-center text-center'>
                <h1 className='text-3xl md:text-3xl lg:text-6xl font-bold leading-none text-black'>Best Articles From Experienced Devs To The World</h1>
                <p className='text-xl text-[#5a5a5a] font-light max-w-[570px] mx-auto'>
                The more you learn the more you earn. Regardless of if you are just starting out or already in the tech industry, there is an article just for you.
                </p>
            </div>
        </div>
        </div>
    )
}

export default Blog