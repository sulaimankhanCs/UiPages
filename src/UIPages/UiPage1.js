import React from 'react'
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { TiTree } from "react-icons/ti";
import { BsEnvelopeSlash } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { BiLayerPlus } from "react-icons/bi";
import { PiMicrosoftOutlookLogoBold } from "react-icons/pi";
import { BsCalendar2Month } from "react-icons/bs";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";



const UiPage1 = () => {

    const [hide, setHide] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const handle = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <>

            <div className='flex'>

                <div className={` lg:flex flex-col  ${!hide ? 'hidden' : ''} lg:w-[20%] md:w-[50%] w-[90%] h-full border-r-2 border-gray-500 gap-2  `}>

                    <div className='flex flex-col  px-5 h-full gap-2'>
                        <div className='flex justify-between'>
                            <h1 className='text-3xl font-bold text-center m-5 '>zelvor</h1>
                            <IoMdArrowRoundBack onClick={() => setHide(false)} className=' block lg:hidden text-2xl mt-4 ' />
                        </div>
                        <h2 className='text-gray-500 pl-5 font-bold'>Main menu</h2>

                        <button className='bg-gray-800 text-white font-bold rounded-full text-left p-3 flex items-center pl-5 text-xl gap-2'><RxDashboard />Dashboard</button>
                        <button className='border-2 border-black rounded-full bg-white font-bold p-3  flex items-center  text-xl gap-2'><BiLayerPlus />Manage meetings</button>

                        <div className='flex pl-5 gap-1  p-2'>
                            <BsEnvelopeSlash className='text-xl' />
                            <h2 className='font-bold text-xl'>Meeting requests</h2>
                        </div>
                        <div className='flex  pl-5 gap-1 p-2'>
                            <CiCalendar className='text-xl' />
                            <h2 className='font-bold text-xl pb-10'>Calender</h2>
                        </div>

                    </div>
                    <hr />
                    <div className='flex flex-col  px-5 h-full gap-5'>

                        <p className='text-gray-500 pl-5 pt-5'>others</p>
                        <div className='flex pl-5'>
                            <MdOutlineSettings className='text-2xl' />
                            <h1 className='font-bold text-xl flex'>Settings</h1>
                        </div>
                        <div className='flex pl-5'>
                            <MdOutlineContactSupport className='text-2xl' />
                            <h1 className='font-bold text-xl'>Support Center</h1>
                        </div>
                        <div className='flex pl-5'>
                            <TiTree className='text-2xl' />
                            <h1 className='font-bold text-xl'>Manage absences</h1>
                        </div>
                        <div>
                            <button className='w-full bg-gray-800 text-white font-bold rounded-full text-center p-3'>Log Out</button>
                        </div>


                    </div>

                </div>

                <div className={`lg:flex flex-col  ${hide ? 'hidden' : ''}  lg:w-[80%] w-full md:px-10 px-5 bg-gray-100`}>

                    <div className='flex justify-between '>
                        <div>
                            <h1 className='text-4xl font-bold pb-4'>Hello Amelia</h1>
                            <p className='text-gray-800 font-bold pb-5'>Let's check what awaits you today!</p>
                        </div>

                        <div className='lg:hidden mt-5'>
                            <button onClick={() => setHide(true)}>
                                <IoReorderThreeOutline className='font-bold text-3xl' />
                            </button>
                        </div>
                    </div>

                    <section className='md:flex w-full  py-5'>

                        <div className='flex flex-wrap lg:w-[50%] md:w-[55%]  lg:gap-3 md:gap-1 gap-3'>

                            <div className='flex flex-col justify-between w-full md:w-[48%] lg:w-[48%] h-[120px] rounded border-2 border-gray-500 bg-white lg:text-xl text-xl font-bold p-3 '>
                                <h1>Schedule new meetings</h1>
                                <IoMdArrowForward />
                            </div>
                            <div onClick={handle} className='flex flex-col justify-between w-full md:w-[48%] lg:w-[48%] h-[120px] rounded border-2 border-gray-500 bg-white lg:text-xl text-xl font-bold p-3 '>
                                <h1>Review meeting requests</h1>
                                <IoMdArrowForward />
                            </div>
                            <div className='flex flex-col justify-between w-full md:w-[48%] lg:w-[48%] h-[120px] rounded border-2 border-gray-500 bg-white lg:text-xl text-xl font-bold p-3 '>
                                <h1>Manage meetings</h1>
                                <IoMdArrowForward />
                            </div>
                            <div className='flex flex-col justify-between w-full md:w-[48%] lg:w-[48%] h-[120px] rounded border-2 border-gray-500 bg-white lg:text-xl text-xl font-bold p-3 '>
                                <h1>Manage absences</h1>
                                <IoMdArrowForward />
                            </div>

                        </div>

                        <div className='flex flex-col lg:w-[50%] md:w-[45%] w-full border-2 border-gray-500 rounded  bg-white mt-2 md:mt-0'  >

                            <div className='flex justify-between p-2 '>
                                <div className='md:text-2xl text-xl font-bold'>
                                    <h1 className='md:p-2'>Calender</h1>
                                    <p className='p-2 text-2xl md:text-4xl'>02:50</p>
                                </div>
                                <div className='text-gray-500  font-bold '>
                                    <p className='md:p-2 text-end'>Go to Calender &gt; </p>
                                    <p className='lg:text-4xl md:text-2xl text-xl pt-3'>05 Feb, 2024</p>
                                </div>
                            </div>
                            <hr />

                            <div>
                                time grid
                            </div>

                        </div>

                    </section>

                    <section className='md:flex w-full lg:gap-3 md:gap-1 '>
                        <div className='lg:w-[24.4%] md:w-[27%] border-2 border-gray-500 rounded p-2 md:p-1 lg:p-3 bg-white m-2 md:m-0'>

                            <div className='flex justify-between items-center md:py-5 lg:py-3'>
                                <h1 className='font-bold text-xl lg:text-2xl'>Integrations</h1>
                                <p className='text-gray-500 font-bold'>&gt;</p>
                            </div>

                            <hr />
                            <p className='font-bold p-2'>Calender Integrations:</p>

                            <div className='flex justify-between'>
                                <p className='flex  lg:gap-2 font-bold text-gray-800 p-1'><PiMicrosoftOutlookLogoBold className='text-blue-500' />Outlook.com</p>
                                <p className=' font-bold underline p-1'>connet</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='flex  lg:gap-2 font-bold text-gray-800 p-1'><BsCalendar2Month className='text-blue-500' />Calender</p>
                                <p className=' font-bold underline p-1'>connet</p>
                            </div>
                            <hr />

                            <p className='font-bold py-2'>Video Conference Integrations:</p>

                            <div className='flex justify-between'>
                                <p className=' font-bold text-gray-800 p-1'>Zoom</p>
                                <p className=' font-bold underline p-1'>connet</p>
                            </div>



                        </div>
                        <div className='lg:w-[51.2%] md:w-[46%] border-2 border-gray-500 rounded m-2 md:m-0'>
                            <div className='p-4 bg-white'>
                                <h1 className='font-bold text-xl lg:text-2xl p-1'>Notifications</h1>
                            </div>
                            <hr className='border-1 border-gray-300' />
                            <div className='p-4 bg-green-100'>
                                <p className='text-gray-500 font-bold'>05 Feb, 2024 02:50</p>
                                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                            </div>
                            <div className='p-4 bg-green-100 mt-2'>
                                <p>04 Feb, 2024 02:00</p>
                            </div>
                        </div>


                        <div className='lg:w-[24.4%] md:w-[27%] border-2 border-gray-500 rounded p-3 bg-white m-2 md:m-0'>

                            <div className='flex justify-between items-center lg:py-3'>
                                <h1 className='font-bold text-xl lg:text-2xl lg:p-1'>Meeting requests</h1>
                                <p className='text-gray-500 font-bold'>&gt;</p>
                            </div>
                            <div className='border-2 border-gray-500 rounded bg-green-50 p-2'>

                                <h1 className='font-bold'>Strategy Meeting</h1>
                                {/* <p className='flex justify-end'>&gt;</p> */}
                                <p className='text-gray-500 '>Feb 06-Feb 09, 2024</p>
                                <div className='flex justify-end py-2'>
                                    <button className='border border-green-500 rounded-full px-3'>yes</button>
                                    <button className='border border-red-500 rounded-full px-3'>No</button>
                                </div>

                            </div>

                        </div>
                    </section>

                </div>
            </div>

            {modalOpen && (
                <>
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 md:w-[374px] rounded-xl shadow-2xl w-full md:h-[196.78px] h-[30%] p-4 bg-white">
                        <h1>salkhfdlawhfl</h1>
                    </div>

                </>
            )}
        </>

    )
}

export default UiPage1
