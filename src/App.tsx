import { Route, Routes } from "react-router-dom";
import Landingpage from "./Screen/Landingpage";
import Loginpage from "./Screen/Loginpage";
import Registerpage from "./Screen/Registerpage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Landingpage />} />
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
      </Routes>
    </div>
  );
};

export default App;
