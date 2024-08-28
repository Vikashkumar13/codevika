import React from 'react'

const Education = () => {
    return (
        <div className='max-w-[95%] rounded-lg  my-10 mx-1 lg:mx-5 ' id="education">
            <div className="text-center mb-5 pt-5">
                <h1 className='text-3xl text-gray-400 font-bold lg:text-center'>Education</h1>
            </div>
            <div className='w-full'>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="h-8 w-8">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" className='text-green-600' />
                            </svg>
                        </div>
                        <div className="timeline-end mb-5 leading-loose">
                            <time className=" italic text-gray-500 text-xl font-bold">2021-2025</time>
                            <div className="timeline-end">
                                <div className='bg-cyan-700 rounded-sm shadow-xl px-3 py-5'>
                                    <h1 className='text-2xl font-semibold text-slate-900'>B.E-Computer Science and Engineering</h1>
                                    <h2 className='text-lg font-semibold text-gray-400'>Sengunthar Engineering College, Tiruchengode-Tamilnadu</h2>
                                    <h3 className='text-md font-semibold text-yellow-600'>GAP-8.03</h3>
                                </div>
                            </div>
                        </div>
                        <hr className='bg-orange-700' />
                    </li>
                    <li>
                        <hr className='bg-orange-700' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="h-8 w-8">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" className='text-green-600' />
                            </svg>
                        </div>
                        <div className="timeline-end mb-5 leading-loose">
                            <time className=" italic text-gray-500 text-xl font-bold">2019-2021</time>
                            <div className="timeline-end">
                                <div className='bg-cyan-700 rounded-sm shadow-xl px-3 py-5'>
                                    <h1 className='text-2xl font-semibold text-slate-900'>Higher Secondary</h1>
                                    <h2 className='text-lg font-semibold text-gray-400'>U.R College, Rosera, Samastipur - Bihar</h2>
                                    <h3 className='text-md font-semibold text-yellow-600'>Marks - 68.7 %</h3>
                                </div>
                            </div>
                        </div>
                        <hr className='bg-gray-300' />
                    </li>
                    <li>
                        <hr className='bg-gray-300' />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="h-8 w-8">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" className='text-green-600' />
                            </svg>
                        </div>
                        <div className="timeline-end mb-5 leading-loose">
                            <time className=" italic text-gray-500 text-xl font-bold">2017-2019</time>
                            <div className="timeline-end">
                                <div className='bg-cyan-700 rounded-sm shadow-xl px-3 py-5'>
                                    <h1 className='text-2xl font-semibold text-slate-900'>High Schooling</h1>
                                    <h2 className='text-lg font-semibold text-gray-400'>K.C High School, Patsa, Samastipur-Bihar</h2>
                                    <h3 className='text-md font-semibold text-yellow-600'>Marks - 68.7 %</h3>
                                </div>
                            </div>
                        </div>
                        <hr className='bg-green-700' />
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Education