import React from 'react'
import myPick from '../assets/vikash.jpg'
const About = () => {
    return (
        <div className='max-w-[98%]  mx-1 rounded-lg lg:mx-5  lg:flex lg:flex-col lg:justify-center lg:items-center' id="about">
            <div className="text-center mb-5 pt-5">
                <h1 className='text-3xl text-gray-400 font-bold lg:text-center'>About Me</h1>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical lg:pl-0">
                <li>
                    <div className="timeline-middle rounded-full">
                        <img src={myPick} alt='myPick ' className='w-20 h-20 rounded-full' />
                    </div>
                    <div className="timeline-end mb-10 mt-20">
                        <div className="text-xl text-cyan-600 font-bold">Vikash Kumar</div>
                        <div className='w-full bg-cyan-900 rounded-sm shadow-2xl p-5 mt-2'>
                            <p className='leading-loose text-xl font-semibold'>
                                Hi, I am a Software Engineer, I have learned MERN stack development and I am looking for an opportunity to work in company as a web developer in following technologies(HTML, CSS, JavaScript, MongoDB, Express, React, Node).
                                if you are looking for a web developer with skills, Please feel free to get in touch.
                            </p>
                        </div>
                    </div>
                    <hr className='bg-cyan-600' />
                </li>
            </ul>
        </div>
    )
}

export default About