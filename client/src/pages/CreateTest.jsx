import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

const CreateTest = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <div className="">
          <Sidenav />
        </div>
        <div className="sm:px-20 px-5 py-10 flex justify-between w-full">
          <input
            type="text"
            placeholder="Test title"
            className="sm:w-1/2  h-[40px] px-3 border-b border-b-zinc-400 outline-none"
          />
          <button className="bg-zinc-900 px-5 py-1 h-[40px] text-white rounded-full">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
