import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className='max-w-3xl mx-auto px-6 py-4'>
      <NavBar/>
      <HomePage />
    </div>
  );
}