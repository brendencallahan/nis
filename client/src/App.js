import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className='max-w-3xl mx-auto p-2.5'>
      <NavBar/>
      <HomePage />
    </div>
  );
}