import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function Root() {
  return (
    <div className="min-w-screen bg-gray-light dark:bg-base-dark dark:text-gray-200 min-h-screen">
      <div className="max-w-[95vw] ml-[2.5vw] md:max-w-[70vw] md:ml-[15vw]  lg:max-w-[50vw] lg:ml-[25vw] py-4">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}