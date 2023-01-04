export default function HamburgerMenu() {
  return (
    //placeholder to test dark mode
    <button
      onClick={() => {
        document.body.classList.toggle('dark');
      }}
    >
      Theme
    </button>
  );
}