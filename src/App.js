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
import Dashboard from './components/Dashboard'
import Pages from './components/Pages'
import Media from './components/Media'
import Projects from './components/Projects'
import Analytics from './components/Analytics'
import Inbox from './components/Inbox'
import Profile from './components/Profile'
import Setting from './components/Setting'
import Logout from './components/Logout'
import StepsOnSideBarLi from './UIPages/sidebar-rndrngCmpntOfLiusngSteps&States/StepsOnSideBarLi';

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
