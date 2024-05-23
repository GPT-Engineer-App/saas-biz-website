import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Signup from "./pages/Signup.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;