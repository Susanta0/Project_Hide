import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AllContest } from "./Pages/AllContest";
import { ChooseContests } from "./Pages/ChooseContests";
import { MyDashboard } from "./Pages/MyDashboard";
import { Signin } from "./Pages/Signin";
import { AllRoutes } from "./Routes/AllRoutes";
import { Signup } from "./Pages/Signup";
import { Review } from "./Pages/Review";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllRoutes />} />
        <Route path="/allcontest" element={<AllContest />} />
        <Route path="/choosecontests" element={<ChooseContests />} />
        <Route path="//mydashboard" element={<MyDashboard />} />
        <Route path="/review" element={<Review/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </>
  );
}

export default App;
