import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import NavBar from "./Components/NavBar";
// import LandingPage from "./Components/LandingPage";
// import About from "./Components/About";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Account from "./Components/Account";
import SubScriptions from "./Components/SubScriptions";

function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/SubScriptions" element={<SubScriptions />} />

          {/* <Route path="/About" element={<About />} /> */}
        </Routes>
      </BrowserRouter>


      <a className="" href="">
        REFRESH
      </a>
    </section>
  );
}

export default App;
