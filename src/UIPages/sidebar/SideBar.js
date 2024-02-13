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
import { Link } from 'react-router-dom';


const SideBar = () => {

  const [open, setOpen] = useState(false)
  const [submenuopen, setSubMenuOpen] = useState(false)

  const Menus =
    [
      { title: 'Dashboard', icon: <MdDashboard />, href: "/" },
      { title: 'Pages', icon: <AiOutlineFileText />, href: "/pages" },
      { title: 'Media', spacing: true, icon: <BsFillImageFill />, href: "/media" },
      {
        title: 'Projects',
        submenu: true,
        icon: <BsReverseLayoutTextSidebarReverse />,
        href: "/projects",

        submenuItems: [
          { title: 'Submenu 1' },
          { title: 'Submenu 2' },
          { title: 'Submenu 3' },
        ],
      },
      { title: 'Analytics', icon: <AiOutlineBarChart />, href: "/analytics" },
      { title: 'Inbox', icon: <AiOutlineMail />, href: "/inbox" },
      { title: 'Profile', spacing: true, icon: <BsPerson />, href: "/profile" },
      { title: 'Setting', icon: <AiOutlineSetting />, href: "/setting" },
      { title: 'Logout', icon: <AiOutlineLogout />, href: "/logout" },

    ]
console.log(open);
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
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-purple-900 rounded-md ${items.spacing ? 'mt-9' : 'mt-2'}`}>
                <Link to={items.href}  className='text-2xl block float-left'>
                  {items.icon}
                </Link>


                <Link to={items.href} className={`text-base flex-1 font-medium ${!open && 'hidden'} duration-200`}>
                  {items.title}
                </Link>
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


    </div>
  )
}

export default SideBar
