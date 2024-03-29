import Image from 'next/image'
import React from 'react'

export const Presentation = () => {
    return (
        <div className='flex flex-col items-center justify-between lg:flex-row lg:gap-10'>
            <div className='flex flex-col items-center justify-center gap-2 pb-8 lg:pb-0'>
                <h2 className=' text-xl font-bold tracking-tight lg:text-2xl text-gray-100'>Hola! Soy Juan Cruz Cortiñas</h2>
                <h3 className=' text-xl font-bold tracking-tight lg:text-2xl text-gray-100'>Front-end Developer</h3>
            </div>
         
                <Image src='/fotocv.png' alt='img cv' className='z-30 rounded-md shadow-xl w-fit lg:w-64 h-auto' priority width="0" height="100" sizes="100vw" />
         
        </div>
    )
}
