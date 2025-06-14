import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className='bg-slate-200 h-screen flex flex-col lg:flex-row '>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center'>
                <h1 className="sm:mb-4 pt-10 lg:mt-0 text-center text-2xl sm:text-4xl md:text-5xl font-bold leading-none tracking-tight text-indigo-700 ">Unbox your style with us.</h1>
                <p className="mb-6 text-lg font-normal lg:text-xl text-center ">Arcadia Lifestyle: Your Journey to Inspired Living Begins Here.</p>
                <Link className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" to={"/about"}> Learn more</Link>
            </div>
            <div className='w-4/5 sm:w-3/4 border lg:w-2/3 px-10 pt-5 self-center lg:self-auto'>
                <img className=' border rounded-md' src="https://images.pexels.com/photos/974964/pexels-photo-974964.jpeg" alt="Banner Image" />
            </div>
        </div>
    )
}

export default Banner
