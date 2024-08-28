import React, { useState } from 'react'
import { FcAbout, FcVideoProjector } from 'react-icons/fc'
import { GiSkills } from 'react-icons/gi'
import { IoClose, IoMenuSharp } from 'react-icons/io5'
import { MdOutlineCastForEducation } from 'react-icons/md'
import { RiContactsFill, RiHome4Fill } from 'react-icons/ri'
import { Link } from "react-scroll";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };
    // handle menu clicks
    const handleMenuClick = () => {
        setOpen(false);
    };
    return (
        <>
            {/* MOBILE NAVBAR  */}
            <div className="lg:hidden xl:hidden navbar">
                <div className="navbar-start min-w-[95%] flex gap-20 pt-3">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            {open ? (<IoClose size={30} onClick={handleOpen} />)
                                : (<IoMenuSharp size={30} onClick={handleOpen} />)
                            }
                        </div>
                        {
                            open && (<>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-sm z-[1] mt-3 w-52 p-2 shadow bg-slate-950">

                                    <Link to="hero" spy={true} smooth={true} offset={-100} duration={300} onClick={handleMenuClick} className='flex p-3 gap-4 text-2xl hover:text-blue-500'><RiHome4Fill />Home</Link>

                                    <Link to="about" spy={true} smooth={true} offset={-100} duration={300} onClick={handleMenuClick} className='flex p-3 gap-4 text-2xl hover:text-blue-500'><FcAbout />About</Link>

                                    <Link to="education" spy={true} smooth={true} offset={-100} duration={300} onClick={handleMenuClick} className='flex p-3 gap-4 text-2xl hover:text-blue-500'><MdOutlineCastForEducation />Education</Link>

                                    <Link to="skill" spy={true} smooth={true} offset={-100} duration={300} onClick={handleMenuClick} className='flex p-3 gap-4 text-2xl hover:text-blue-500'><GiSkills />Skill</Link>

                                    <Link to="project" spy={true} smooth={true} offset={-100} duration={300} onClick={handleMenuClick} className='flex p-3 gap-4 text-2xl hover:text-blue-500'><FcVideoProjector />Project</Link>

                                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={300} onClick={handleMenuClick} className='flex p-3 gap-4 text-2xl hover:text-blue-500' ><RiContactsFill />Contact</Link>
                                </ul>
                            </>)
                        }

                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold text-cyan-600'>code<span className='text-red-500'>vika</span></h1>
                    </div>
                </div>
            </div>
            {/* DESKTOP NAVBAR  */}
            <div className="hidden lg:block xl:block navbar px-5 pt-8">
                <div className='flex justify-between items-center'>
                    <div>
                        <Link to={"/"} className="text-3xl text-cyan-600">code<span className='text-red-500'>vika</span></Link>
                    </div>
                    <div>
                        <ul className='flex gap-10'>

                            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='hover:text-blue-500 cursor-pointer'>Home</Link>

                            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='hover:text-blue-500 cursor-pointer'>About</Link>

                            <Link to="education" spy={true} smooth={true} offset={-100} duration={500} className='hover:text-blue-500 cursor-pointer'>Education</Link>

                            <Link to="skill" spy={true} smooth={true} offset={-100} duration={500} className='hover:text-blue-500 cursor-pointer'>Skill</Link>

                            <Link to="project" spy={true} smooth={true} offset={-100} duration={500} className='hover:text-blue-500 cursor-pointer'>Project</Link>

                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className='mr-5 hover:text-blue-500 cursor-pointer'>Contact</Link>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar