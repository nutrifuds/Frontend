import HelloWorld from "./components/HelloWorld"
import Navbar from "./components/Navbar";
import './stylesheets/app.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
    </div>
  );
}

export default App;
