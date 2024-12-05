
import Categorize from "../components/Categorize Question/Categorize";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Cloze from "../components/Cloze Question/Cloze";

const CreateTest = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <div className="">
          <Sidenav />
        </div>
        <div className="sm:px-20 px-5 py-10  w-full">
          <input
            type="text"
            placeholder="Test title"
            className="sm:w-1/2 mb-5  h-[40px] px-3 border-b border-b-zinc-400 outline-none"
          />
      
            <Categorize />


            <Cloze />
      
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
