import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function Root() {
  return (
    <div className='min-w-screen bg-gray-light dark:bg-base-dark dark:text-gray-200 min-h-screen'>
      <div className='max-w-[80vw] ml-[10vw] py-4'>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
