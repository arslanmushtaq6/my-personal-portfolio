import React, { useEffect } from 'react'

const Contact = () => {

  return (
    <div className='gap-4 w-full px-4 container mx-auto text-white py-32 border-b border-opacity-20 border-slate-300'>
      <div className='flex flex-col gap-8 justify-center text-center'>
        <h1 className='text-3xl md:text-3xl lg:text-6xl font-bold leading-none'>Let's achieve the impossible together</h1>
        <p className='text-xl text-[#b9b9b9] max-w-[570px] mx-auto'>
          If you need help or have some questions, I'll be there ready and happy to help.
        </p>
      </div>

      <div className='py-6 flex justify-center items-center'>
        <form action="https://api.web3forms.com/submit" method='POST' className='justify-center text-center gap-6 grid grid-cols-1 w-[450px]'>
          <input type="hidden" name="access_key" value="4618dbfe-f855-4040-b9d1-42c4b10255fb" />
          <input type="text" name='name' className='bg-transparent outline-none border hover:border-black border-gray-400 focus:border focus:border-blue-600 py-4 px-4 rounded' placeholder='Your Name' required/>
          <input type="text" name='email' className='bg-transparent outline-none border hover:border-black border-gray-400 focus:border focus:border-blue-600 py-4 px-4 rounded' placeholder='Your Email' required/>
          <textarea name='message' className='bg-transparent outline-none border hover:border-black border-gray-400 focus:border focus:border-blue-600 py-4 px-4 rounded' placeholder='Your Message' required></textarea>
          {/* <input type="text" className='bg-transparent outline-none border py-4 px-4 rounded' placeholder='Your Phone' /> */}
          {/* <div className='col-span-2 flex flex-col gap-6'>
            <input type="text" className='bg-transparent outline-none border py-4 px-4 rounded' placeholder='Your Email' />
            <textarea name="" className='bg-transparent outline-none border py-4 px-4 rounded' placeholder='Your Message'></textarea>
          </div> */}
          <div className='text-center'>
            <button type='submit' className='bg-transparent border text-blue-700 uppercase px-12 py-2 rounded hover:bg-blue-700 border-blue-700 hover:text-white transition'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact