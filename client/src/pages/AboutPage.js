export default function AboutPage() {
  return (
    <>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-slate-700 to-base-dark dark:from-gray-light dark:to-slate-300 nis-font text-center text-3xl mb-10 ml-2.5">
        About
      </h2>
      <p className="text-center">
        Made using React, Express, Node, and Tailwind
      </p>
      <h3 className="text-center">
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
    </>
  );
}
