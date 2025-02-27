import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Profile/Header';
import Sidebar from '../components/Profile/Sidebar';
const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header/>
          <main className='w-[100%] md:w-[80%] mx-auto p-4 flex md:flex-row flex-col gap-4 mt-8'>
            <Sidebar/>
            <div className="w-[100%]  md:px-6 2xl:px-10">
              <Outlet/>
            </div>
          </main>
        </div>
      </div>
    
    </div>
  );
};

export default DefaultLayout;
