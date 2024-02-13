
import blacklogo from '..//images/blacklogo.png'
import booked1 from '..//images/booked1.png'
import booked2 from '..//images/booked2.png'
import booked3 from '..//images/booked3.png'
import { useState } from 'react';
import ReactFlagsSelect from "react-flags-select";

function UiPage2() {

  const [selected, setSelected] = useState("");

  const [activeTab, setActiveTab] = useState('reviewTab');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (

    <div >

      <div className='max-w-[80%] mx-auto '>

        <header className='flex justify-between p-4 '>
          <div>
            <img src={blacklogo}></img>
          </div>
          <div className='md:flex items-center font-bold hidden'>
            <ul class="nav flex gap-5  ">
              <li class="nav-item">
                <a class="nav-link active" href="#" aria-current="page">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blogs & News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">List your properties</a>
              </li>
              <li className="rounded-full   ">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  showSelectedLabel={false}
                  className='rounded-full '

                />
              </li>
            </ul>


          </div>
        </header>
      </div>
      <hr />

      {/* <div className='w-[76%] mx-auto'>
        <section className='pt-10'>
          <ul className='flex gap-10 text-xl '>

            <li>
             <button onClick={()=>handleTabClick('reviewTab') } className={ activeTab === 'reviewTab' ? 'active' : ''} >Reviews To</button>
            </li>
            <li>
            <button onClick={()=>handleTabClick('historyTab')} className={ activeTab === 'historyTab' ? 'active' : ''} >History</button>
            </li>

          </ul>

        </section>
      </div> */}

      <div className='w-[76%] mx-auto'>
        <section className='pt-10'>
          <ul className='flex gap-10 text-xl '>
            <li>
              <button onClick={() => handleTabClick('reviewTab')} className={`focus:outline-none ${activeTab === 'reviewTab' ? 'active' : ''}`}>Reviews To</button>
            </li>
            <li>
              <button onClick={() => handleTabClick('historyTab')} className={`focus:outline-none ${activeTab === 'historyTab' ? 'active' : ''}`}>History</button>
            </li>
          </ul>
        </section>
      </div>


      <hr />

      <div>
        {activeTab === 'reviewTab' &&

          <div className='max-w-[76%] mx-auto'>

            <section>
              <div className='py-7'>
                <h className='font-bold text-xl'>My Reviews</h>
              </div>

              <div className='flex md:flex-row flex-col gap-5 mb-5 w-full rounded border border-indigo-200 bg-white'>
                <div className='lg:m-5 m-2 md:w-[20%] flex md:items-center md:justify-none justify-center'>
                  <img className='md:w-[180px] md:h-[160px] ' src={booked3}></img>
                </div>
                <div className='flex flex-col md:w-[60%] justify-center px-2'>
                  <p className='font-bold text-gray-600 lg:p-1'>Booked on: june 14, 2023</p>
                  <h1 className='font-bold lg:text-2xl  lg:p-1'>Harbourview, Dartmouth, Nova Scotia, Canada</h1>
                  <p className='text-gray-400 lg:p-1'>Sleep 2 | BR 1 | BA 1</p>
                  <p className='text-red-500 lg:p-1 font-bold'>$244.00</p>
                  <p className='font-bold text-gray-600 lg:p-1'>55 Glen Eagles DriveClarksburg, WV 26301</p>
                </div>

                <div className='flex  flex-col items-center md:items-end md:w-[20%] p-5 '>
                  <button className='bg-blue-800 rounded-full p-2 px-5 text-white'>REVIEW</button>
                </div>

              </div>

              <div className='flex md:flex-row flex-col gap-5 mb-5 w-full rounded border border-indigo-200 bg-white'>
                <div className='lg:m-5 m-2 md:w-[20%] flex md:items-center md:justify-none justify-center'>
                  <img className='md:w-[180px] md:h-[160px] ' src={booked1}></img>
                </div>
                <div className='flex flex-col md:w-[60%] justify-center px-2'>
                  <p className='font-bold text-gray-600 lg:p-1'>Booked on: june 14, 2023</p>
                  <h1 className='font-bold lg:text-2xl  lg:p-1'>North End, Halifax, Nova Scotia, Canada</h1>
                  <p className='text-gray-400 lg:p-1'>Sleep 2 | BR 1 | BA 1</p>
                  <p className='text-red-500 lg:p-1 font-bold'>$244.00</p>
                  <p className='font-bold text-gray-600 lg:p-1'>55 Glen Eagles DriveClarksburg, WV 26301</p>
                </div>

                <div className='flex  flex-col items-center md:items-end md:w-[20%] p-5 '>
                  <button className='bg-blue-800 rounded-full p-2 px-5 text-white'>REVIEW</button>
                </div>

              </div>

              <div className='flex md:flex-row flex-col gap-5 mb-5 w-full rounded border border-indigo-200 bg-white'>
                <div className='lg:m-5 m-2 md:w-[20%] flex md:items-center md:justify-none justify-center'>
                  <img className='md:w-[180px] md:h-[160px] ' src={booked2}></img>
                </div>
                <div className='flex flex-col md:w-[60%] justify-center px-2'>
                  <p className='font-bold text-gray-600 lg:p-1'>Booked on: june 14, 2023</p>
                  <h1 className='font-bold lg:text-2xl  lg:p-1'>Head of Cheezetcook, Nova Scotia, Canada</h1>
                  <p className='text-gray-400 lg:p-1'>Sleep 2 | BR 1 | BA 1</p>
                  <p className='text-red-500 lg:p-1 font-bold'>$244.00</p>
                  <p className='font-bold text-gray-600 lg:p-1'>55 Glen Eagles DriveClarksburg, WV 26301</p>
                </div>

                <div className='flex  flex-col items-center md:items-end md:w-[20%] p-5 '>
                  <button className='bg-blue-800 rounded-full p-2 px-5 text-white'>REVIEW</button>
                </div>

              </div>

            </section>

          </div>

        }
      </div>


    </div>
  );
}

export default UiPage2;
