export default function AboutPage() {
  return (
    <>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-slate-700 to-base-dark dark:from-gray-light dark:to-slate-300 nis-font text-center text-3xl mb-10 ml-2.5">
        About
      </h2>
      <div className="text-center">
        <p className="pb-10">Made using React, Express, Node, and Tailwind</p>
        <p className="pb-10">
          Read more about NASA's APIs{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://api.nasa.gov/"
          >
            here
          </a>
        </p>
        <h3 className="">
          View the GitHub repo at <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://github.com/brendencallahan/nis"
          >
            https://github.com/brendencallahan/nis
          </a>
        </h3>
      </div>
    </>
  );
}
