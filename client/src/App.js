import logo from './logo.svg';
import './App.css';
import ProductCard from "./Components/ProductCard";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <div className="App" style ={{display : "flex" , justifyContent: "center", alignItems: "center", height: "100vh"}}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ProductCard/> */}
      <ProductDetail/>
     </div>
  );
}

export default App;
