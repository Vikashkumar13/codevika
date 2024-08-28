import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Education from '../components/Education'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomeScreen = () => {
    return (
        <>
            <div className='bg-[#0d1b2a]'>
                <Navbar />
                <HeroSection />
                <About />
                <Education />
                <Skill />
                <Project />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default HomeScreen