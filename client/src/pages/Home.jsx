import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10 w-full flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl md:text-6xl lg:text-8xl">
            Create Test Give Test!
          </h1>
          <p className="my-5 text-sm  text-center">
            Customize your test Signup to know more.
          </p>
        </div>
        <div className="overflow-hidden">
          <img src="./test.png" className="w-full" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10 gap-20">
        <Link to="/login" className="bg-black text-white px-5 py-2 rounded-full">Create Test</Link>
        <Link to="/login" className="bg-black text-white px-5 py-2 rounded-full">Give Test</Link>
      </div>
    </div>
  );
};

export default Home;
