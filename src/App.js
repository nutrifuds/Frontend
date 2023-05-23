import Navbar from "./components/Navbar";
import './stylesheets/app.css';
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
