import Huddle from "./components/huddle/Huddle";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Huddle />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
