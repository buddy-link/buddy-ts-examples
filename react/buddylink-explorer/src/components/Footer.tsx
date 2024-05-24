

const Footer = () => {
  return (
    <footer className="py-20">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="min-w-1/6" >
            <a
              href={"https://github.com/buddy-link/buddy-ts-examples"}
              target="_blank"
              className="flex gap-2 items-center justify-start"
            >
              {`Open Source on GitHub`}
              <img
                src="github-mark.svg"
                alt="GitHub"
                className="w-6 h-6 md:w-5 md:h-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
