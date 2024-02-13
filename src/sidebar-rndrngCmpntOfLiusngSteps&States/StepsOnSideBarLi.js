import React, { useState } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { AiFillEnvironment } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { BsFillImageFill } from "react-icons/bs";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import Dashboard from '../UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Dashboard';
import Inbox from '../UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Inbox';
import Profile from '../UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Profile';
import Projects from '../UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Projects';
import Setting from '../UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Setting';
import Media from '../UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Media';
import Analytics from '../UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Analytics';
import Pages from '../UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Pages';
import Logout from '../UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Logout';


const StepsOnSideBarLi = () => {

    const [tab, setTab] = useState('dashboard')
    const [open, setOpen] = useState(true)
    const [submenuopen, setSubMenuOpen] = useState(false)

    const handleTabClick = (tab) => {
        setTab(tab.toLowerCase());
    }

    const Menus =
        [
            { title: 'Dashboard', icon: <MdDashboard /> },
            { title: 'Pages', icon: <AiOutlineFileText /> },
            { title: 'Media', spacing: true, icon: <BsFillImageFill /> },
            {
                title: 'Projects',
                submenu: true,
                icon: <BsReverseLayoutTextSidebarReverse />,

                submenuItems: [
                    { title: 'Submenu 1' },
                    { title: 'Submenu 2' },
                    { title: 'Submenu 3' },
                ],
            },
            { title: 'Analytics', icon: <AiOutlineBarChart /> },
            { title: 'Inbox', icon: <AiOutlineMail /> },
            { title: 'Profile', spacing: true, icon: <BsPerson /> },
            { title: 'Setting', icon: <AiOutlineSetting /> },
            { title: 'Logout', icon: <AiOutlineLogout /> },

        ]
    console.log(tab);
    return (
        <div className='flex'>

            <div className={`bg-purple-950 ${open ? 'w-72' : 'w-[85px]'} duration-300  text-white h-full px-5 pt-8 relative`}>

                <IoMdArrowBack className={`${!open && 'rotate-180'} absolute -right-3 top-9 cursor-pointer border border-black rounded-full bg-white text-black p-1 text-4xl`}
                    onClick={() => { setOpen(!open) }}
                />
                <div className='inline-flex'>

                    <AiFillEnvironment className={`font-bold text-4xl ${open && 'rotate-[360deg]'} duration-300 bg-amber-300 rounded mr-3 cursor-pointer block text-black `} />
                    <h1 className={`font-bold text-2xl ${!open && 'scale-0'} duration-300 `}>SideBar</h1>

                </div>

                <div className={`float-left flex items-center  bg-purple-900 py-2 my-6 rounded ${!open ? 'px-2.5' : 'px-4'}`}>

                    <IoSearch className={`float-left text-white text-2xl block cursor-pointer ${open && 'mr-2'} duration-300`} />
                    <input
                        type='search'
                        placeholder='Search'
                        className={`text-white text-xl bg-transparent w-full focus:outline-none ${!open && 'hidden'} `}></input>

                </div>

                <ul >
                    {Menus.map((items, index) => (
                        <>
                            <li key={index} onClick={() => handleTabClick(items.title)} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-purple-900 rounded-md ${items.spacing ? 'mt-9' : 'mt-2'}`}>
                                <span className='text-2xl block float-left'>
                                    {items.icon}
                                </span>

                                <span className={`text-base flex-1 font-medium ${!open && 'hidden'} duration-200`}>
                                    {items.title}
                                </span>
                                {items.submenu && open && (
                                    <FaChevronDown className={`${submenuopen && 'rotate-180'}`} onClick={() => { setSubMenuOpen(!submenuopen) }} />
                                )}
                            </li>
                            {items.submenu && open && submenuopen && (
                                <ul>
                                    {items.submenuItems.map((subitems, index) => (
                                        <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 hover:bg-purple-900 rounded-md  ${!open && 'hidden'} duration-200 `}>
                                            {subitems.title}

                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ))}
                </ul>

            </div>

            {/* Render content based on the selected tab */}
            <div>
                {tab === 'dashboard' && <Dashboard />}
                {tab === 'pages' && <Pages />}
                {tab === 'media' && <Media />}
                {tab === 'projects' && <Projects />}
                {tab === 'analytics' && <Analytics />}
                {tab === 'inbox' && <Inbox />}
                {tab === 'profile' && <Profile />}
                {tab === 'setting' && <Setting />}
                {tab === 'logout' && <Logout />}
            </div>


        </div>
    )
}

export default StepsOnSideBarLi
