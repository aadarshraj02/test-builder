import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Categorize from "../components/Categorize Question/Categorize";
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
        <div className="sm:px-20 px-5 py-10  w-full">
          <input
            type="text"
            placeholder="Test title"
            className="sm:w-1/2 mb-5  h-[40px] px-3 border-b border-b-zinc-400 outline-none"
          />
          <DndProvider backend={HTML5Backend}>
            <Categorize />
          </DndProvider>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
