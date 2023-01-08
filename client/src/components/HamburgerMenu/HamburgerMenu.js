export default function HamburgerMenu() {
  return (
    //placeholder to test dark mode
    <button className=""
      onClick={() => {
        document.body.classList.toggle('dark');
      }}
    >
      <svg className="fill-base-dark dark:fill-gray-light" viewBox="0 0 100 80" width="25" height="25">
        <rect width="100" height="12.5" rx="10"></rect>
        <rect y="30" width="100" height="12.5" rx="10"></rect>
        <rect y="60" width="100" height="12.5" rx="10"></rect>
      </svg>
    </button>
  );
}
