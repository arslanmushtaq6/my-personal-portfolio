import logo from '../assets/main-logo.png'
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaInfoCircle, FaBox, FaPhoneAlt } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };


    return (
        <>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                ></div>
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-[#121212] text-white z-20 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
                <div className="p-4">
                    <button className="absolute top-4 right-4 text-white text-3xl">
                        <HiX />
                    </button>

                    <img src={logo} className='h-6 items-center mb-6' alt="" />

                    <ul className='flex flex-col gap-4 pt-8 border-t-2 border-[#272727]'>
                        <li className="py-2 px-4 flex items-center gap-6 hover:bg-gray-700 rounded">
                            <FaHome />
                            <Link to="/" onClick={handleCloseSidebar}>
                                Home
                            </Link>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-6 hover:bg-gray-700 rounded">
                            <FaInfoCircle />
                            <Link to="/about" onClick={handleCloseSidebar}>
                                About
                            </Link>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-6 hover:bg-gray-700 rounded">
                            <FaBox />
                            <Link to="/projects" onClick={handleCloseSidebar}>
                                Projects
                            </Link>
                        </li>
                        <li className="py-2 px-4 flex items-center gap-6 hover:bg-gray-700 rounded">
                            <FaPhoneAlt />
                            <Link to="/contact" onClick={handleCloseSidebar}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            <header className='bg-transparent z-10 w-full h-16 backdrop-blur-sm bg-opacity-60 font-display fixed border-b-2 border-[#272727]'>
                <nav className='w-full h-full container mx-auto flex items-center justify-between px-4'>
                    <Link to="/">
                        <img src={logo} className='h-8 items-center' alt="" />
                    </Link>
                    <div className='flex gap-6 items-center text-white'>
                        <Link to="/blog">
                            <button className='uppercase hover:bg-blue-700 hover:text-blue-700 hover:bg-opacity-10 rounded text-[15px] px-5 py-3'>Blog</button>
                        </Link>
                        {/* Hamburger Menu */}
                        <GiHamburgerMenu className='cursor-pointer' onClick={toggleSidebar} />
                        {/* <GiHamburgerMenu className='cursor-pointer'/> */}
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar