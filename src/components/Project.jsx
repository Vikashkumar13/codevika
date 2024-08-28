import React from 'react'
import jobPortalPick from "../assets/jobPortal.png"

const Project = () => {
    return (
        <div className=" max-w-[96%] my-10 mx-1 lg:mx-5" id="project">
            <div className="text-center mb-8 pt-5">
                <h1 className='text-3xl text-gray-400 font-bold lg:text-center'>My Projects</h1>
            </div>
            <div className='flex justify-start items-center overflow-x-scroll md:no-scrollbar lg:no-scrollbar gap-3 max-sm:pb-5 lg:gap-8 lg:mx-5'>
                <div className="card card-compact rounded-md bg-base-100 max-sm:min-w-full md:max-w-[30%] lg:max-w-[30%] hover:shadow-2xl">
                    <figure>
                        <img src={jobPortalPick} alt="jobPortalPick" />
                    </figure>
                    <div className="card-bod p-3 bg-cyan-950">
                        <p className='text-lg'>This is a JobPortal web application where people can provide and get job developed in MERN Stack</p>
                        <div className="card-actions justify-end gap-5 mt-2">
                            <button className="btn btn-sm bg-cyan-700 rounded-full">
                                <a href="/" className='text-xl hover:text-blue-600'>Demo</a>
                            </button>
                            <button className="btn btn-sm bg-blue-800 rounded-full ">
                                <a href="/" className='text-xl hover:text-blue-600'>code</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact rounded-md bg-base-100 max-sm:min-w-full md:max-w-[30%] lg:max-w-[30%] hover:shadow-2xl">
                    <figure>
                        <img src={jobPortalPick} alt="jobPortalPick" />
                    </figure>
                    <div className="card-bod p-3 bg-cyan-950">
                        <p className='text-lg'>This is a JobPortal web application where people can provide and get job developed in MERN Stack</p>
                        <div className="card-actions justify-end gap-5 mt-2">
                            <button className="btn btn-sm bg-cyan-700 rounded-full">
                                <a href="/" className='text-xl hover:text-blue-600'>Demo</a>
                            </button>
                            <button className="btn btn-sm bg-blue-800 rounded-full ">
                                <a href="/" className='text-xl hover:text-blue-600'>code</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact rounded-md bg-base-100 max-sm:min-w-full md:max-w-[30%] lg:max-w-[30%] hover:shadow-2xl">
                    <figure>
                        <img src={jobPortalPick} alt="jobPortalPick" />
                    </figure>
                    <div className="card-bod p-3 bg-cyan-950">
                        <p className='text-lg'>This is a JobPortal web application where people can provide and get job developed in MERN Stack</p>
                        <div className="card-actions justify-end gap-5 mt-2">
                            <button className="btn btn-sm bg-cyan-700 rounded-full">
                                <a href="/" className='text-xl hover:text-blue-600'>Demo</a>
                            </button>
                            <button className="btn btn-sm bg-blue-800 rounded-full ">
                                <a href="/" className='text-xl hover:text-blue-600'>code</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project