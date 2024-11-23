import React from 'react'
import eproject from '../assets/ecommerceproject.webp'
import emsproject from '../assets/emsproject.webp'
import recipeproject from '../assets/recipeproject.webp'


const Projects = () => {
    return (
        <div className='gap-4 w-full px-4 container mx-auto text-white py-32 border-b border-slate-300'>
            <div className='flex flex-col gap-8 justify-center text-center'>
                <h1 className='text-3xl md:text-3xl lg:text-6xl font-bold leading-none'>Successful Projects I'm Proud Of</h1>
                <p className='text-xl text-[#b9b9b9] max-w-[570px] mx-auto'>
                    No better way to get experience than real-life projects
                </p>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full px-4 container mx-auto text-white py-12'>
                <div className='flex justify-center items-center'>
                    <img src={eproject} alt="" className='rounded transition-transform duration-300 transform hover:scale-110 cursor-pointer' />
                </div>
                <div className='flex flex-col gap-4 md:gap-1 lg:gap-8 justify-center text-center bg-[#0808085c] p-6'>
                    <h2 className='text-lg md:text-2xl lg:text-3xl font-bold leading-none'>E-commerce Website</h2>
                    <h3 className='text-lg md:text-xl lg:text-lg font-light leading-none'>Coming Soon</h3>
                    <p className='md:text-sm lg:text-xl text-[#b9b9b9] font-light'>
                    An e-commerce website built with ReactJS and styled with Tailwind CSS provides a dynamic and responsive shopping experience. React’s component-based architecture simplifies managing product listings, carts, and checkouts. This combination ensures a scalable, visually appealing online store, easily customizable to meet any business needs.
                    </p>
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full px-4 container mx-auto text-white py-12'>
                
                <div className='flex flex-col gap-4 md:gap-1 lg:gap-8 justify-center text-center bg-[#0808085c] p-6'>
                    <h2 className='text-lg md:text-2xl lg:text-3xl font-bold leading-none'>Employee Management System</h2>
                    <h3 className='text-lg md:text-xl lg:text-lg font-light leading-none'>Coming Soon</h3>
                    <p className='md:text-sm lg:text-xl text-[#b9b9b9] font-light'>
                    An Employee Management System (EMS) is a software application used by businesses to manage their employees, track their performance, and handle HR-related tasks like recruitment, payroll, and benefits. Such systems can be built to handle various aspects of employee life-cycle management, including attendance, leave requests, and more.
                    </p>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={emsproject} alt="" className='rounded transition-transform duration-300 transform hover:scale-110 cursor-pointer' />
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full px-4 container mx-auto text-white py-12'>
                <div className='flex justify-center items-center'>
                    <img src={recipeproject} alt="" className='rounded transition-transform duration-300 transform hover:scale-110 cursor-pointer' />
                </div>
                <div className='flex flex-col gap-4 md:gap-1 lg:gap-8 justify-center text-center bg-[#0808085c] p-6'>
                    <h2 className='text-lg md:text-2xl lg:text-3xl font-bold leading-none'>Recipe App</h2>
                    <h3 className='text-lg md:text-xl lg:text-lg font-light leading-none'>Coming Soon</h3>
                    <p className='md:text-sm lg:text-xl text-[#b9b9b9] font-light'>
                    A Recipe App allows users to search, browse, and save recipes. It can include features like viewing ingredients, steps to cook, and nutritional information. You can also allow users to submit their own recipes, create shopping lists, or even save favorite recipes.
                    </p>
                </div>

                
            </div>

            
                    <div className='text-center'>
                         <button className='bg-transparent border text-blue-700 uppercase px-12 py-2 rounded hover:bg-blue-700 border-blue-700 hover:text-white transition'>
                            load more
                        </button>
                    </div>
               

        </div>
    )
}

export default Projects