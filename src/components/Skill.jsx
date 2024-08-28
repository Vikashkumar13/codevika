import React from 'react'
import { DiMongodb } from 'react-icons/di'
import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMysql, SiTypescript } from 'react-icons/si'
import { TbBrandMysql } from 'react-icons/tb'

const Skill = () => {
    return (
        <div className=' min-w-[95%] rounded-lg mx-1 lg:mx-5' id="skill">
            <div className="text-center mb-5 pt-5">
                <h1 className='text-3xl text-gray-400 font-bold lg:text-center'>Skills</h1>
            </div>
            <ul className="timeline timeline-vertical max-sm:pr-[80%] min-sm:w-full">
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <FaHtml5 className='w-10 h-10 text-orange-500' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-orange-500  ml-5'>HTML</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <FaCss3Alt className='w-10 h-10 text-blue-700' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-blue-700  ml-5'>CSS</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <RiTailwindCssFill className='w-10 h-10 text-[#4c1d95]' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-[#4c1d95]  ml-5'>Tailwind</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <IoLogoJavascript className='w-10 h-10 text-yellow-500' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-yellow-600  ml-5'>JavaScript</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <DiMongodb className='w-10 h-10 text-green-900' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-green-600  ml-5'>MongoDB</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <TbBrandMysql className='w-10 h-10 text-[#00758f]' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-[#00758f]  ml-5'>MySQL</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <FaReact className='w-10 h-10 text-cyan-400' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-cyan-600  ml-5'>React</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <SiExpress className='w-10 h-10 text-green-500' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-gray-400  ml-5'>Express</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <FaNodeJs className='w-10 h-10 text-green-900' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-green-600  ml-5'>Node</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <FaJava className='w-10 h-10 text-orange-500' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-orange-500  ml-5'>Java</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <FaPython className='w-10 h-10 text-yellow-600' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-yellow-600  ml-5'>Python</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
                <li>
                    <div className="timeline-middle">
                        <div className="timeline-middle">
                            <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center'>
                                <SiTypescript className='w-8 h-8 text-[#007acc]' />
                            </div>
                        </div>
                    </div>
                    <h1 className=' timeline-end text-xl font-bold text-[#007acc]  ml-5'>TypeScript</h1>
                    <hr className='bg-green-600 min-h-3' />
                </li>
            </ul>
        </div>
    )
}

export default Skill