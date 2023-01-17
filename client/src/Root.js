import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function Root() {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('darkMode'))) {
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <div className="bg-gray-light dark:bg-base-dark dark:text-gray-200 min-h-screen h-full">
      <NavBar />
      <div className="max-w-[95vw] ml-[2.5vw] md:max-w-[70vw] md:ml-[15vw] lg:max-w-[40vw] lg:ml-[30vw] py-4">
        <Outlet />
      </div>
    </div>
  );
}
