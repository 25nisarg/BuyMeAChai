

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
        <h2 className="text-3xl font-bold text-center mb-18">Your Fans Can Buy You A Chai</h2>
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
      <div className="text-white container mx-auto py-32 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-18">Learn More About US</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7346.672971074081!2d72.61284046361907!3d22.974650916482265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f5590ffcd7d%3A0x4b0554bef6153a98!2sGhodasar%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1764656640924!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}
