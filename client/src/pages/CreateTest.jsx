import Categorize from "../components/Categorize Question/Categorize";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Cloze from "../components/Cloze Question/Cloze";
import Comprehension from "../components/Comprehension Question/Comprehension";
import { useContext } from "react";
import { TestContext } from "../context/TestContext";

const CreateTest = () => {
  const { testData, setTestData } = useContext(TestContext);

  const handleTitleChange = (e) => {
    setTestData({ ...testData, title: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidenav />
        <div className="sm:px-20 px-5 py-10 w-full">
          <input
            type="text"
            placeholder="Test title"
            value={testData.title}
            onChange={handleTitleChange}
            className="sm:w-1/2 mb-5 h-[40px] px-3 border-b border-b-zinc-400 outline-none"
          />
          <Categorize />
          <Cloze />
          <Comprehension />
          <div className="flex items-center justify-center">
            <button className="bg-green-500 px-4 py-2 rounded-md text-white">
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
