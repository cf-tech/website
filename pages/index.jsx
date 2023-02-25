
const IndexPage = () =>
{
  return (
    <>
      <div>
        <h1 className="text-4xl p-5 text-center font-bold">CF Technologies -The Sky is not the Limit!</h1>
      </div>
      <div className="md:flex">
        <img src="/images/logo.png" width="600" className="p-6" />
        <p className="p-10 text-2xl"> Welcome to our website! <br /> <br />CF Technologies is a software development company in based in London. <br /> <br />
          {/*lorem ipsum starts here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

export default IndexPage;
