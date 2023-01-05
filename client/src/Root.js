import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function Root() {
  return (
    <div className='bg-slate-200 dark:bg-cyan-700 min-h-screen'>
      <div className="max-w-3xl mx-auto px-6 py-4">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
