import About from "./component/About";
import Services from "./component/Services";
import MyWork from "./component/MyWork";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main className="bg-black min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <NavBar />
      <div className="container mx-auto">
        <Home />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
