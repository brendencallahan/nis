export default function AboutPage() {
  return (
    <div className="text-center">
      <main>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-slate-700 to-base-dark dark:from-gray-light dark:to-slate-300 nis-font text-center text-3xl mb-10 ml-2.5">
          About
        </h2>
        <p>
          The main purpose of NIS, or NASA Image Search, is to let you:
          <ul className="list-disc my-10">
            <li>See the Astronomy Picture of the Day on the homepage</li>
            <li>Search through NASA's Image Library</li>
            <li>Save your favorite photos to come back to later</li>
          </ul>
        </p>
      </main>
      <footer>
        <p className="mt-20 mb-5">
          The frontend was made using React.JS and Tailwind, while the backend
          was made with Node.JS and Express.JS
        </p>
        <p className="mb-5">
          Read more about{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://api.nasa.gov/"
          >
            NASA's APIs
          </a>
        </p>
        <p className="">
          View the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://github.com/brendencallahan/nis"
          >
            GitHub repo
          </a>
        </p>
      </footer>
    </div>
  );
}
