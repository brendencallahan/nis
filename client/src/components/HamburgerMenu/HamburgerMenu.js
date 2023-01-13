import { useRef, useState} from 'react';
import  { useClickAway } from 'react-use'
import HamburgerModal from './HamburgerModal';


export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const buttonRef = useRef(null);

  function handleOpening() {
    setIsOpen(current => !current)
  }

  useClickAway(ref, (event) => {
    if (buttonRef.current.contains(event.target)) {
      handleOpening();
    } else {
      setIsOpen(false);
    }


    console.log("working");
  })


  return (
    <>
      <button ref={buttonRef}>
        <svg
          className="fill-base-dark dark:fill-gray-light"
          viewBox="0 0 100 80"
          width="25"
          height="25"
          >
          <rect width="100" height="12.5" rx="10"></rect>
          <rect y="30" width="100" height="12.5" rx="10"></rect>
          <rect y="60" width="100" height="12.5" rx="10"></rect>
        </svg>
      </button>
      <div className='absolute' ref={ref}>

        {isOpen &&<HamburgerModal />}
      </div>
    </>
  );
}
