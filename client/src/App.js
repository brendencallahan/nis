import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className='bg-slate-200 dark:bg-cyan-700'>
      <div className="max-w-3xl mx-auto px-6 py-4">
        <NavBar />
        <HomePage />
      </div>
    </div>
  );
}
