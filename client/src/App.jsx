import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateTest from "./pages/CreateTest";
import GiveTest from "./pages/GiveTest";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/create-test" element={<CreateTest />} />
        <Route path="/give-test" element={<GiveTest />} />
      </Routes>
    </div>
  );
};

export default App;
