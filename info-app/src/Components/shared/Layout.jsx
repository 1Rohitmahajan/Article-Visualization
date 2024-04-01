import React from 'react'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Sidebar from '../Sidebar';
import Header from './Header';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className='flex flex-auto flex-col' >
      <div className='flex flex-row   h-25 w-screen overflow-scroll-hidden'>
        <ToastContainer />
        <Sidebar />


        <div className='flex-1 overflow-hidden overflow-scroll-hidden'>
          <Header />
          <div className='p-4 overflow-scroll-hidden' >
            {<Outlet />}
          </div>



        </div>

      </div>

      <div className='py-2 f '>
       
        <Footer />
      </div>
    </div>

  )
}

export default Layout;