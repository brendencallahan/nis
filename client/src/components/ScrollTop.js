export default function ScrollTop() {

  function handleScrollTop(e){
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  return (

    <div className="pt-[8px]">
    <button onClick={handleScrollTop}>
      <svg className="opacity-80 dark:opacity-80 fill-gray-dark dark:fill-slate-400" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/> </svg>
    </button>
  </div>
    )
}