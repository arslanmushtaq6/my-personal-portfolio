import React from 'react'
import reacticon from '../assets/reactjs.svg'
import angularicon from '../assets/angular.svg'
import gitsbyicon from '../assets/gatsby.svg'
import scssicon from '../assets/scss.svg'
import jsicon from '../assets/js.svg'
import tsicon from '../assets/typescript.svg'
import giticon from '../assets/git.svg'
import nextjsicon from '../assets/nextjs.svg'
import laravelicon from '../assets/laravel.svg'
import servericon from '../assets/serverless.svg'
import graphicon from '../assets/graphql.svg'
import mysqlicon from '../assets/mysql.svg'
import redisicon from '../assets/redis.svg'
import nodejsicon from '../assets/nodejs.svg'

const Tools = () => {
    return (
        <div className='gap-4 w-full px-4 container mx-auto text-white py-32 border-b border-slate-300'>
            <div className='flex flex-col gap-8 justify-center text-center'>
                <h1 className='text-3xl md:text-3xl lg:text-6xl font-bold leading-none'>Tools Of The Present And Future</h1>
                <p className='text-xl text-[#b9b9b9] max-w-[570px] mx-auto'>
                    Frontend technologies I prefer using
                </p>
            </div>

            {/*Tools*/}
            <div className='grid grid-cols-2 md:grid-cols-4 pt-16 gap-8'>
                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={reacticon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>React js/native</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={angularicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Angular</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={gitsbyicon} alt="" className='ww-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Gatsby</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={scssicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Scss</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={jsicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Javascript</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={tsicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Typescript</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={giticon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Git</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={nextjsicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Nextjs</h2>
                </div>
            </div>

            {/*Other Technologies*/}
            <div className='flex flex-col gap-8 pt-14 justify-center text-center'><p className='text-xl text-[#b9b9b9] max-w-[570px] mx-auto'>
                    Other Technologies
                </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 pt-16 gap-8'>
                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={laravelicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Laravel PHP</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={servericon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Serverless</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={graphicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>GraphQl</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={mysqlicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>MySQL</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={redisicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Redis DB</h2>
                </div>

                <div className='flex flex-col gap-2 text-center items-center'>
                    <img src={nodejsicon} alt="" className='w-16 h-16' />
                    <h2 className='text-lg text-[#b9b9b9]'>Nodejs</h2>
                </div>
            </div>
        </div>
    )
}

export default Tools