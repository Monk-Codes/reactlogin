import { Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import NavBar from "./Components/NavBar";
import Dashboard from "./Components/Dashboard";
import Contact from "./Components/Contact";
import About from "./Components/About";
function App() {
 return (
  <Routes>
   <Route path="/" element={<NavBar />}>
    <Route path="/" element={<Welcome />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<SignupForm />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
   </Route>
   {/* <Route path="/" element={<Footer />}></Route> */}
  </Routes>
 );
}

export default App;
