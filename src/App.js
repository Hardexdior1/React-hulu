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
import MovieDetails from "./Components/MovieDetails";
import SimpleForm from "./Components/SimpleForm"
import SlugGenerator from "./Components/SlugGenerator";
import Search from "./Components/Search";
function App() {
  return (
    <section className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/search" element={<Search />} />

          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Form />} />
          <Route path="/account" element={<Account />} />
          <Route path="/sub-scription" element={<SubScriptions />} />
          <Route path="/sign-up" element={<SimpleForm />} />

          <Route path="/movie_Details/:id" element={<MovieDetails />} />
          <Route path="/search/:id" element={<MovieDetails />} />

          <Route path="/slug" element={<SlugGenerator />} />


        </Routes>
      </BrowserRouter>

      
    </section>
  );
}

export default App;
