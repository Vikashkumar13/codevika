import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import { LiaWhatsapp } from 'react-icons/lia'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

const Contact = () => {
    return (
        <div className='max-w-[96%] ml-1 rounded-lg lg:mx-5  lg:flex lg:flex-col lg:justify-center lg:items-center' id="contact">
            <div className="text-center mb-5 pt-5">
                <h1 className='text-3xl text-gray-400 font-bold lg:text-center'>Contact me on</h1>
            </div>
            <div className='flex max-sm:justify-start justify-center items-center overflow-x-scroll gap-5 ml-3 lg:no-scrollbar lg:gap-24'>
                <div className='flex flex-col justify-center items-center py-2'>
                    <TiSocialLinkedinCircular className='max-sm:w-16 max-sm:h-16 w-20 h-20 text-blue-400' />
                    <a href="https://www.linkedin.com/in/vikash-kumar-b68646298/" target="_blank" className='text-xl text-blue-500 hover:underline'>LinkedIn</a>
                </div>
                <div className='flex flex-col justify-center items-center py-2'>
                    <LiaWhatsapp className='max-sm:w-16 max-sm:h-16 w-20 h-20 text-green-600' />
                    <a href="whatsapp:contact=8757364047" target='_blank' className='text-xl text-blue-500 hover:underline'>WhatsApp</a>
                </div>
                <div className='flex flex-col justify-center items-center py-2'>
                    <CgMail className='max-sm:w-16 max-sm:h-16 w-20 h-20 text-red-500' />
                    <a href="https://mail.google.com/mail/u/0/" target="_blank" className='text-xl text-blue-500 hover:underline'>Gmail</a>
                </div>
                <div className='flex flex-col justify-center items-center py-2'>
                    <AiOutlineGithub className='max-sm:w-16 max-sm:h-16 w-20 h-20 text-blue-400' />
                    <a href="https://github.com/Vikashkumar13" target='_blank' className='text-xl text-blue-500 hover:underline'>GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Contact