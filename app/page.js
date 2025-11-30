

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]">
        <div className="font-bold text-5xl">
          Buy Me A Chai
        </div>
        <p>A Crowdfunding Platform For Creators. Get Funded By Followers and Fans</p>
        <div>
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2">Start Here</button>

          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 me-2 mb-2">Read More</button>

        </div>
      </div>
      <div className="bg-white h-1 opacity-15">
      </div>
      <div className="text-white container mx-auto py-32">
        <h1 className="text-2xl font-bold text-center mb-18">Your Fans Can Buy You A Chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black " width={100}  src="./man.gif" alt="" />
            <p className="font-bold" >Fund Yourself</p>
            <p className="text-center w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, commodi!</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black " width={100}  src="./coin.gif" alt="" />
            <p className="font-bold" >Fund Yourself</p>
            <p className="text-center w-1/2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black " width={100}  src="./people.gif" alt="" />
            <p className="font-bold" >Your Fans Want to Help</p>
            <p className="text-center w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, minus.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-15">
      </div>
      <div className="text-white container mx-auto py-32">
        <h1 className="text-2xl font-bold text-center mb-18">Learn More About US</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black " width={100}  src="./man.gif" alt="" />
            <p className="font-bold" >Fund Yourself</p>
            <p className="text-center w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, commodi!</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black " width={100}  src="./coin.gif" alt="" />
            <p className="font-bold" >Fund Yourself</p>
            <p className="text-center w-1/2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro.</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className=" bg-slate-400 rounded-full p-2 text-black " width={100}  src="./people.gif" alt="" />
            <p className="font-bold" >Your Fans Want to Help</p>
            <p className="text-center w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, minus.</p>
          </div>
        </div>
      </div>
    </>
  );
}
