import React from 'react'
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    return (
        <div className='pt-16 lg:pt-32' id="hero">
            <div className='text-3xl text-cyan-500 items-center pl-5'>
                <Typewriter options={{
                    strings: ["Hi, I am Vikash Kumar.", "Full Stack Developer...", "MERN Stack Developer...", "React Native Developer..."],
                    autoStart: true,
                    loop: true,
                }}
                />
                <button className="btn btn-primary text-xl my-10 shadow-md rounded-md"><a href='src\assets\VIKASH-KUMAR(RESUME).pdf' target='_blank'>Download Resume</a></button>
            </div>
        </div>
    )
}

export default HeroSection