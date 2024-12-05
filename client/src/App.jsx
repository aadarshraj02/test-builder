import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateTest from "./pages/CreateTest";
import GiveTest from "./pages/GiveTest";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/create-test" element={<CreateTest />} />
          <Route path="/give-test" element={<GiveTest />} />
        </Routes>
      </DndProvider>
    </div>
  );
};

export default App;
