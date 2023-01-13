import DarkModeButton from './DarkModeButton';
import CollectionButton from './CollectionButton';

export default function HamburgerModal() {
  return (
    <div className="bg-gray-dark shadow-lg mt-10 absolute flex flex-col justify-center items-center w-[95vw] md:w-[70vw] lg:w-[40vw] h-[85vh]">
      <CollectionButton />
      <DarkModeButton />
    </div>
  );
}
