import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavigationBar } from '../components/NavigationBar';
import { TopBar } from '../components/TopBar';
import { usePlayStore } from '../hooks/usePlayStore';
import phoneShell from './../assets/s20.png';

export function PhoneLayout() {
  const location = useLocation();
  const [phoneBackground, setPhoneBackground] = useState("");
  const { apps: installedApps } = usePlayStore();

  useEffect(() => {
    const currentApp = installedApps.find(app => app.routePath === location.pathname);

    setPhoneBackground(location.pathname === '/home' ? "bg-[url('https://i.pinimg.com/736x/c1/9d/79/c19d7964360a0144b39a0e4b67ca2cfb.jpg')]" : currentApp?.background || 'bg-neutral-900');
  }, [location.pathname])

  return (
    <div className='relative select-none'>
      <img src={phoneShell} draggable="false"/>
      
      <div className='w-full h-full p-4 absolute inset-0 flex flex-col items-center justify-between'>
        <TopBar />

          <div className="grow h-full w-full">
            <div className={`absolute h-full w-full ${phoneBackground} bg-no-repeat bg-cover inset-0 -z-10 rounded-[4rem]`} />
            <Outlet />
          </div>
          
        <NavigationBar />
      </div>
      
    </div>
  )
};