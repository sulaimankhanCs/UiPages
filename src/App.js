import logo from './logo.svg';
import './App.css';
import blacklogo from '../src//images/blacklogo.png'
import booked1 from '../src//images/booked1.png'
import booked2 from '../src//images/booked2.png'
import booked3 from '../src//images/booked3.png'
import { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";
import UiPage1 from './UIPages/UiPage1';
import UiPage2 from './UIPages/UiPage2';
import SideBar from './UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/SideBar';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Dashboard'
import Pages from '../src/UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Pages'
import Media from '../src/UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Media'
import Projects from '../src/UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Projects'
import Analytics from '../src/UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Analytics'
import Inbox from '../src/UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Inbox'
import Profile from '../src/UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Profile'
import Setting from '../src/UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Setting'
import Logout from '../src/UIPages/sidebar-rndrngCmpntOnClkLiUsngroutng/Logout'
import StepsOnSideBarLi from '../src/sidebar-rndrngCmpntOfLiusngSteps&States/StepsOnSideBarLi';

function App() {

  const [selected, setSelected] = useState("");

  const [activeTab, setActiveTab] = useState('reviewTab');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (

    <div>
      {/* <UiPage1/> */}
      {/* <UiPage2/> */}
      {/* <SideBar /> */}
{/*       
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/media' element={<Media />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/logout' element={<Logout />} />
      </Routes> */}

      <StepsOnSideBarLi/>
      
      {/* <ReactFlagsSelect/> */}
    </div>

  );
}

export default App;
