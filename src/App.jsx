import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";



function App() {
  return (
  <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={HomePage}></Route>
    </Routes>

    <FooterComponent />
  </div>
  );
}

export default App;


