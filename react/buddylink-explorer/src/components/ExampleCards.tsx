
const ExampleCards = () => {

  return (
    <div className="mt-40 h-full flex w-full justify-between">
      <div className="w-1/4 h-72 bg-[#282828] p-3 sm:p-4 rounded-md flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="font-bold min-w-[260px] sm:text-lg">Lookup Organization Details</h2>
          <img
            src="sample-organization.png"
            alt="Sample Organization"
          />
        </div>
      </div>
      <div className="w-1/4 h-72 bg-[#282828] p-3 sm:p-4 rounded-md flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="font-bold min-w-[260px] sm:text-lg">Check out Member Stats</h2>
          <img
            src="sample-member.png"
            alt="Sample Member"
          />
        </div>
      </div>
      <div className="w-1/4 h-72 bg-[#282828] p-3 sm:p-4 rounded-md flex flex-col gap-4">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="font-bold min-w-[260px] sm:text-lg">Find Wallets or Profiles</h2>
          <img
            src="sample-wallet.png"
            alt="Sample Wallet"
          />
        </div>
      </div>
    </div>
  );
};

export default ExampleCards;
